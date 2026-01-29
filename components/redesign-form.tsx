"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import { useState, useRef, useTransition } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { redesignImage } from "@/actions/redesign";
import { Upload, Loader2 } from "lucide-react";
import { FieldError, FieldLabel } from "@/components/ui/field";
import { ResultSkeleton } from "./result-skeleton";
import { ResultCard } from "./result-card";
import { getSignedUploadUrl } from "@/lib/storage";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const redesignSchema = z.object({
  description: z
    .string()
    .min(
      10,
      "Please describe your desired design style (at least 10 characters)",
    ),
  imageFile: z
    .instanceof(File)
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Please upload a JPEG, PNG, or WebP image",
    )
    .refine(
      (file) => file.size <= 10 * 1024 * 1024,
      "Image must be smaller than 10MB",
    ),
});

export function RedesignForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    imageUrl: string;
    description: string;
  } | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      description: "",
      imageFile: undefined as any,
    } as z.infer<typeof redesignSchema>,
    onSubmit: async ({ value }) => {
      startTransition(async () => {
        if (!session) {
          toast.error("Please sign up to continue");
          router.push("/signup");
          return;
        }

        try {
          //  get signed url -> upload it -> get gs url -> call backend action
          const { url, gs_uri } = await getSignedUploadUrl({
            filename: "room-image",
            contentType: value.imageFile.type,
          });

          await axios.put(url, value.imageFile, {
            headers: {
              "Content-Type": value.imageFile.type,
            },
          });

          console.debug("gs uri of image : ", gs_uri);

          const response = await redesignImage({
            image_uri: gs_uri,
            stylePrompt: value.description,
          });

          if (response.success && response.data?.image_uri) {
            setResult({
              imageUrl: response.data.image_uri,
              description: response.data.description,
            });
            toast.success("Design generated successfully!");
          } else {
            setResult(null);

            if (response.error === "Entitlement usage limit exceeded") {
              toast.warning("Plan limit exceeded. Please upgrade your plan.");
              router.push("/premium");
              return;
            }
            toast.warning(response.error || "Failed to generate design");
          }
        } catch (error) {
          toast.error("An unexpected error occurred");
          console.error(error);
        }
      });
    },
  });

  return (
    <div className="space-y-8">
      {/* Form Card */}
      <div className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-8"
        >
          {/* Image Upload */}
          <form.Field
            name="imageFile"
            children={(field) => (
              <div className="space-y-3">
                <FieldLabel>Upload Your Image</FieldLabel>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      field.handleChange(file);
                      setSelectedFileName(file.name);
                    }
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-border rounded-lg p-8 hover:border-primary/50 hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <p className="font-medium text-foreground">
                        {selectedFileName || "Click to upload or drag and drop"}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        JPEG, PNG or WebP (max 10MB)
                      </p>
                    </div>
                  </div>
                </button>
                {field.state.meta.errors.length > 0 && (
                  <FieldError errors={field.state.meta.errors} />
                )}
              </div>
            )}
          />

          {/* Description */}
          <form.Field
            name="description"
            children={(field) => (
              <div className="space-y-3">
                <FieldLabel htmlFor="description">
                  Design Style Description
                </FieldLabel>
                <Textarea
                  id="description"
                  placeholder="Describe the design style you want (e.g., 'Modern minimalist with warm earth tones and natural light')"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Be specific about colors, materials, mood, and architectural
                  elements
                </p>
                {field.state.meta.errors.length > 0 && (
                  <FieldError errors={field.state.meta.errors} />
                )}
              </div>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-12 text-base font-medium"
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!session
              ? "Login to Redesign"
              : isPending
                ? "Generating Design..."
                : "Redesign It"}
          </Button>
        </form>
      </div>

      {/* Results Section */}
      {isPending && <ResultSkeleton />}
      {result && !isPending && <ResultCard result={result} />}
    </div>
  );
}

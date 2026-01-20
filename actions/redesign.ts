"use server";
import axios from "axios";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const API_URL = process.env.BACKEND_API_URL || "http://localhost:8080/api/v1";
export async function redesignImage({
  image_uri,
  stylePrompt,
}: {
  image_uri: string;
  stylePrompt?: string;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signup");
  }
  try {
    if (!image_uri) {
      return {
        success: false,
        message: "Missing Image url",
      };
    }

    // Call backend API
    const res = await axios.post(
      `${API_URL}/ai/redesign-room`,
      { image_uri, stylePrompt },
      { headers: { Authorization: `Bearer ${session.apiToken}` } },
    );

    const data = res.data;
    console.debug("Redesign API response:", data);
    return {
      success: true,
      data: data.data,
    };
  } catch (error: any) {
    console.error("Error in redesignImage:", error?.response?.data);
    return {
      success: false,
      error: error?.response?.data?.message || "Failed to redesign image",
    };
  }
}

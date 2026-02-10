"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const handleGoogleSignup = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#0ea7e8]/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0ea7e8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0ea7e8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[440px] relative z-10">
        {/* Signup Container */}
        <div className="relative group">
          {/* Subtle glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0ea7e8]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

          <div className="relative bg-card/80 backdrop-blur-xl border border-border/40 rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col items-center">
            <div className="text-center mb-10 w-full">
              <h1 className="text-3xl font-light tracking-tight text-foreground mb-3 leading-tight">
                Designing <span className="text-muted-foreground italic">Dreams</span>
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Join our collective of visionaries and start transforming your architectural narrative.
              </p>
            </div>

            {/* Google Signup Button */}
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-white text-foreground border border-border/60 rounded-2xl hover:bg-gray-50 hover:border-[#0ea7e8]/30 hover:shadow-lg hover:shadow-[#0ea7e8]/5 transition-all duration-300 active:scale-[0.98] group/btn"
            >
              <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-sm font-semibold tracking-wide">Continue with Google</span>
            </button>

            {/* Support Message */}
            <div className="mt-10 pt-10 border-t border-border/40 w-full text-center">
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Need architectural assistance?{" "}
                <Link href="/#contact" className="text-[#0ea7e8] font-semibold hover:underline">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.2em] font-medium text-center px-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="/terms" className="hover:text-foreground transition-colors underline underline-offset-4">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="/privacy" className="hover:text-foreground transition-colors underline underline-offset-4">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

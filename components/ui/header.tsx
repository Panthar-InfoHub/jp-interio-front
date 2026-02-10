"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut } from "lucide-react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClick = () => {
    if (!session) {
      router.push("/signup");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Services", href: "/#services" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "Contact", href: "/#contact" },
    { name: "Premium", href: "/premium" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40 shadow-sm transition-all duration-300 h-[64px] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-5 w-full flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-xl border border-border/40 transition-transform group-hover:scale-105 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="SPZAORA Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-xl font-extralight tracking-[0.2em] md:tracking-[0.25em] uppercase text-foreground leading-none">
                SPZAORA
              </span>
              <span className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.15em] md:tracking-[0.18em] mt-1 md:mt-1.5 font-medium">
                Interior Standards
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-[#0ea7e8] transition-colors duration-300 relative group",
                  pathname === link.href && "text-[#0ea7e8]"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0ea7e8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            {!session ? (
              <button
                onClick={handleClick}
                className="px-8 py-2.5 bg-[#0ea7e8] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#0ea7e8]/20 hover:bg-[#0ea7e8]/90 hover:shadow-[#0ea7e8]/30 transition-all duration-300 active:scale-95"
              >
                Get Started
              </button>
            ) : (
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-card border border-[#0ea7e8]/20 rounded-full shadow-sm shadow-[#0ea7e8]/5 group/profile transition-all hover:border-[#0ea7e8]/40">
                  <div className="w-6 h-6 rounded-full bg-[#0ea7e8]/10 flex items-center justify-center transition-colors group-hover/profile:bg-[#0ea7e8]/20">
                    <User size={14} className="text-[#0ea7e8]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0ea7e8] leading-none">
                      Hello
                    </span>
                    <span className="text-[11px] font-semibold text-foreground/90 leading-none">
                      {session.user?.name || "Member"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 group text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-red-500 transition-all duration-300"
                >
                  <LogOut size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 -mr-2 focus:outline-none z-50"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[64px] bg-background z-40 md:hidden transition-all duration-300 ease-in-out h-[calc(100vh-64px)] overflow-y-auto",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center pt-12 pb-20 px-6 min-h-full">
          <nav className="flex flex-col items-center gap-8 w-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-light uppercase tracking-[0.25em] text-foreground/80 hover:text-[#0ea7e8] transition-all duration-300",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="w-full h-[1px] bg-border/40 my-10" />

          <div className="w-full mt-auto">
            {!session ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleClick();
                }}
                className="w-full py-4 bg-[#0ea7e8] text-white rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#0ea7e8]/20 active:scale-[0.98] transition-all"
              >
                Get Started
              </button>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-center gap-4 p-5 rounded-2xl bg-secondary/30 border border-border/40">
                  <div className="w-10 h-10 rounded-full bg-[#0ea7e8]/10 flex items-center justify-center">
                    <User size={18} className="text-[#0ea7e8]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0ea7e8]">Hello</span>
                    <span className="text-sm font-semibold">{session.user?.name}</span>
                  </div>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full py-4 bg-secondary text-foreground rounded-2xl text-xs font-bold uppercase tracking-[0.2em] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under the fixed header */}
      <div className="h-[64px] hidden md:block" />
    </>
  );
}

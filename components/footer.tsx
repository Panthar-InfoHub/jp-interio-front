"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="SPZADORA Logo"
                width={80}
                height={80}
                className="h-auto object-cover "
              />
              Spzaora
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting award-winning interiors for residential and commercial
              clients worldwide. We bring your vision to life with precision and
              style.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Info</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-foreground transition"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:support@spzaora.com"
                  className="hover:text-foreground transition"
                >
                  support@spzaora.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917068999458"
                  className="hover:text-foreground transition"
                >
                  +91 7068999458
                </a>
              </li>
              {/* <li>
                <span>123 Design Ave, NY</span>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
            <p>© 2026 spzaora. All rights reserved.</p>
            <div className="  text-center text-xs text-muted-foreground">
              <p>
                Designed and Developed by{" "}
                <Link
                  className="font-bold"
                  href="https://www.pantharinfohub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Panthar InfoHub Pvt. Ltd{" "}
                </Link>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#14c8eb] rounded transform rotate-45 flex items-center justify-center"></span>
              JP Interio
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting award-winning interiors for residential and commercial
              clients worldwide. We bring your vision to life with precision and
              style.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-foreground transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-foreground transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-foreground transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#journal"
                  className="hover:text-foreground transition"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@jpinterio.com"
                  className="hover:text-foreground transition"
                >
                  hello@jpinterio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-foreground transition"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <span>123 Design Ave, NY</span>
              </li>
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
            <p>© 2026 JP Interio. All rights reserved.</p>
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
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest("[data-mobile-menu]")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="md:hidden rounded-full p-2 bg-[#2EC9A5]/10 hover:bg-[#2EC9A5]/20 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        aria-label="Open menu"
      >
        <svg
          className="h-5 w-5 text-[#2EC9A5]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-[#06211A] p-6 shadow-xl"
              data-mobile-menu
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <svg
                    width="30"
                    height="35"
                    viewBox="0 0 70 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8529 80.397C13.5708 80.397 9.28862 80.419 5.00647 80.397C3.17126 80.397 1.18312 80.7277 0.265519 78.4566C-0.586542 76.2737 0.768014 74.9728 2.12257 73.6057C10.818 64.8521 19.4915 56.0764 28.1869 47.3448C29.5414 45.9998 30.9615 44.6989 30.1313 42.5381C29.3011 40.3552 27.3567 40.3993 25.4559 40.3993C18.3991 40.4213 11.3205 40.3993 4.26365 40.3993C2.58137 40.3993 0.964651 40.3331 0.243676 38.4148C-0.433603 36.5847 0.418449 35.3279 1.64192 34.0711C11.823 23.8401 21.9821 13.5871 32.0976 3.33412C33.9984 1.39376 36.2487 0.423588 38.9359 0.423588C47.8498 0.401538 56.7637 0.423588 65.6994 0.423588C67.4035 0.423588 69.0202 0.644079 69.7412 2.47418C70.5059 4.41454 69.4572 5.75955 68.1463 7.06047C59.3635 15.8803 50.6026 24.7441 41.8417 33.5639C40.509 34.8869 39.0452 36.1437 39.8754 38.3487C40.7493 40.6639 42.7156 40.3772 44.5508 40.3772C51.4984 40.3993 58.4459 40.3993 65.3935 40.3772C67.185 40.3772 68.9765 40.4654 69.7412 42.4719C70.5059 44.4343 69.3916 45.7352 68.0808 47.0582C58.0527 57.1127 48.0464 67.1893 38.1057 77.31C36.0084 79.4488 33.6488 80.4631 30.6775 80.397C26.4172 80.3308 22.1351 80.397 17.8529 80.397Z"
                      fill="#2EC9A5"
                    />
                  </svg>
                  <span className="ml-2 text-lg font-bold">Savvy</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 bg-[#2EC9A5]/10 hover:bg-[#2EC9A5]/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-[#2EC9A5]" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 mb-8">
                <a
                  href="#features"
                  className="text-lg font-medium hover:text-[#2EC9A5] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#security"
                  className="text-lg font-medium hover:text-[#2EC9A5] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Security
                </a>
                <a
                  href="#how-it-works"
                  className="text-lg font-medium hover:text-[#2EC9A5] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="text-lg font-medium hover:text-[#2EC9A5] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </a>
              </nav>

              <Button
                className="w-full bg-[#2EC9A5] hover:bg-[#2EC9A5]/80 text-[#06211A] font-medium rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Download App
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

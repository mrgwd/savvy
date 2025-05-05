"use client";
// import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SavvyLogo } from "../ui/logo";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "floating-navbar transition-all duration-300 shadow-lg"
        // isScrolled ? "shadow-lg bg-black/30" : "bg-black/20"
      )}
    >
      <div className="flex items-center space-x-12 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 pl-4">
          <SavvyLogo className="size-5" />
          <span className="font-bold text-lg">Savvy</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center font-medium space-x-6">
          <Link
            href="#features"
            className="text-sm text-neutral-300 hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm text-neutral-300 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#security"
            className="text-sm text-neutral-300 hover:text-primary transition-colors"
          >
            Security
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-2 text-white hover:bg-white/10"
            >
              <Menu className="size-5" />
            </Button>
          )}

          {/* CTA Button */}
          <Button className="rounded-full">Get Started</Button>
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 px-4 py-3 bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 animate-fade-in">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-sm transition-colors py-2">
              Features
            </a>
            <a href="#about" className="text-sm transition-colors py-2">
              About
            </a>
            <a href="#security" className="text-sm transition-colors py-2">
              Security
            </a>
            <a href="#cards" className="text-sm transition-colors py-2">
              Cards
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

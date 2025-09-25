"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/layout/Logo.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#3C87F4CC]/80">
      <div className="container mx-auto px-4 xl:px-36 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>

          {/* Mobile Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-transparent focus-visible:border-none focus-visible:ring-0 hover:text-white hover:scale-105"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="#features" className="cursor-pointer">
                  주요 기능
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#scenarios" className="cursor-pointer">
                  활용 사례
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#faq" className="cursor-pointer">
                  FAQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
            >
              주요 기능
            </a>
            <a
              href="#scenarios"
              className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
            >
              활용 사례
            </a>
            <a
              href="#faq"
              className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

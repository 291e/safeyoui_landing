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
import { DownloadButton } from "../downloadButtons";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] max-w-[1920px] mx-auto z-50 bg-[#3C87F4CC]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 xl:px-36 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-12 justify-between w-full md:justify-start">
            <div
              onClick={() => (window.location.href = "/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>

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
              <Link
                href="#features"
                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                주요 기능
              </Link>
              <Link
                href="#scenarios"
                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                활용 사례
              </Link>
              <Link
                href="#faq"
                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="https://safeyoui.com/board/free/list.html?board_no=1002"
                className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                문의하기
              </Link>
            </nav>
          </div>
          <div className="items-center justify-end hidden md:flex w-full max-w-[400px] gap-4">
            <DownloadButton
              variant="app-store"
              className="bg-[#2269D0] max-h-[50px]"
            />
            <DownloadButton
              variant="google-play"
              className="bg-[#2269D0] max-h-[50px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

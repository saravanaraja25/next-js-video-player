"use client";

import React from "react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="h-[72px] border-b border-foreground-500 border-secondary-muted xl:px-44 px-8 shadow">
      <header className="flex justify-between items-center py-4 mx-auto">
        <div className="flex items-center justify-center gap-[8px]">
          <Link
            href="/"
            className={`text-md py-2 text-foreground hover:text-primary`}
          >
            <h1 className="text-2xl text-foreground hover:text-primary cursor-pointer">
              Video Player
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(
                "https://github.com/saravanaraja25/next-js-video-player"
              )
            }
          >
            <Github className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
        </div>
      </header>
    </div>
  );
};

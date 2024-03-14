import React from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { VideoProvider } from "@/context/VideoContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <VideoProvider>{children}</VideoProvider>
    </ThemeProvider>
  );
}

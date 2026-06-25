"use client";

import { Toaster } from "sonner";
import { useThemeMode } from "../ThemeWrapper";

export default function SonnerProvider() {
  const { isLight } = useThemeMode();

  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      theme={isLight ? "light" : "dark"}
      toastOptions={{
        duration: 4000,
        classNames: {
          toast: "rounded-2xl border shadow-2xl backdrop-blur-xl",
          title: "font-semibold",
          description: "text-sm",
          actionButton: "rounded-full",
          cancelButton: "rounded-full",
        },
      }}
    />
  );
}
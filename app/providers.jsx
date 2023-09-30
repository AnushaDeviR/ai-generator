// boiler-plate reference: https://nextui.org/docs/frameworks/nextjs#setup-provider
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

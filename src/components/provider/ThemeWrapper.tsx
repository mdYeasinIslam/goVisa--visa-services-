"use client";
import { useEffect, useState } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-white w-full h-screen" />; // placeholder
  }

  return <>{children}</>;
}

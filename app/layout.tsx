import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "C VISHNU VARDHAN — AI & Full Stack Developer",
  description:
    "Portfolio of C VISHNU VARDHAN, an AI & Full Stack Developer crafting premium, immersive digital products.",
  openGraph: {
    title: "C VISHNU VARDHAN — AI & Full Stack Developer",
    description:
      "Portfolio of C VISHNU VARDHAN, an AI & Full Stack Developer crafting premium, immersive digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-void font-body antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

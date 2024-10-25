import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TLE Feedbacks",
  description: "Used for getting all the TLE feedbacks at one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <div className="absolute top-5 right-5">
          <ModeToggle />
        </div>
      </body>
    </html>
  );
}

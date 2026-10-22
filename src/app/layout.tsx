import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Kevin Afriyie | Environmental Scientist & Climate Advocate",
  description:
    "Portfolio of Kevin Afriyie — Environmental Science student at KNUST, General Secretary of ENSSA-KNUST, Organizing Secretary of Youth-NREG, and Peer Mentor of the Year 2025. Passionate about youth advocacy, environmental governance, and climate action.",
  keywords: [
    "Kevin Afriyie",
    "Environmental Scientist",
    "Climate Advocate",
    "KNUST",
    "Youth-NREG",
    "ENSSA",
    "Environmental Governance",
    "Ghana",
  ],
  authors: [{ name: "Kevin Afriyie" }],
  icons: {
    icon: "/kevin-avatar.jpg",
  },
  openGraph: {
    title: "Kevin Afriyie | Environmental Scientist & Climate Advocate",
    description:
      "Empowering young people to participate in decision-making around natural resources, climate action, and sustainable development.",
    siteName: "Kevin Afriyie Portfolio",
    type: "website",
    images: [{ url: "/kevin-portrait.jpg", width: 420, height: 810 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${fraunces.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

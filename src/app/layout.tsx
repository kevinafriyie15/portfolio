import type { Metadata } from "next";
import { Geist, League_Spartan, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kevin Afriyie | Environmental Scientist & Climate Advocate",
    template: "%s | Kevin Afriyie",
  },
  description:
    "Portfolio of Kevin Afriyie. Environmental Science student at KNUST, General Secretary of ENSSA-KNUST, Organizing Secretary of Youth-NREG, and Peer Mentor of the Year 2025. Passionate about youth advocacy, environmental governance, and climate action.",
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${leagueSpartan.variable} ${sourceSerif.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

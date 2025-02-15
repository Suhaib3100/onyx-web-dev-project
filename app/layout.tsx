import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footerdemo } from "@/components/ui/footer-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Onyx-Website by Suhaib",
  description: "The project given by onyx Software to create a landing page.Made by Suhaib",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
    <Footerdemo />
          </ThemeProvider>
      </body>
    </html>
  )
}

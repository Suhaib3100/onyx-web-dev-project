"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsSearchOpen((open) => !open)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("keydown", down)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", down)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="relative flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg blur opacity-60" />
                <div className="relative bg-black rounded-lg w-full h-full flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    CD
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block font-bold text-lg bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Coding Defined
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-sm text-gray-300 hover:text-white"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-4 h-4 mr-2" />
                <span>Search...</span>
                <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-600 bg-black px-1.5 font-mono text-[10px] font-medium opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Products
              </Button>
              <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Resources
              </Button>
              <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Pricing
              </Button>
              <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Contact
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                  Sign in
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg shadow-purple-500/25">
                  Get Started
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search...
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  Products
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  Resources
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  Pricing
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                  Contact
                </Button>
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-center text-gray-300 hover:text-white">
                    Sign in
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Documentation</span>
            </CommandItem>
            <CommandItem>
              <span>Courses</span>
            </CommandItem>
            <CommandItem>
              <span>Projects</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Resources">
            <CommandItem>
              <span>Community</span>
            </CommandItem>
            <CommandItem>
              <span>Blog</span>
            </CommandItem>
            <CommandItem>
              <span>Support</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

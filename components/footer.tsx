"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animations"

const sections = [
  {
    title: "Use cases",
    links: ["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming"],
  },
  {
    title: "Explore",
    links: ["Design", "Prototyping", "Development features", "Collaboration", "Design process"],
  },
  {
    title: "Resources",
    links: ["Blog", "Best practices", "Support", "Developers", "Resource library"],
  },
]

export function Footer() {
  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="border-t border-white/10 bg-black"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div variants={fadeIn}>
            <Link href="/" className="font-bold text-xl mb-4 block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">CD</span>
            </Link>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {sections.map((section, i) => (
            <motion.div key={i} variants={fadeIn}>
              <h3 className="font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2024 Coding Redefined. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

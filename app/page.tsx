"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GradientDots } from "@/components/ui/gradient-dots"
import { fadeIn, staggerContainer, slideIn, scaleIn } from "@/lib/animations"
import {
  CodeIcon,
  BrainCircuitIcon,
  RocketIcon,
  ArrowRightIcon,
  SparklesIcon,
  Terminal,
  Blocks,
  Gem,
} from "lucide-react"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#1A0B2E]"
      >
        <GradientDots />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.1)_0%,rgba(0,0,0,0)_50%)]" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="text-left space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Now accepting new students
              </div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0E7FE] via-[#B69AFE] to-[#7C3AED]">
                  Coding Redefined
                </span>
                <br />
                <span className="text-[#F0E7FE]">for the future</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-xl">
                Join our elite coding academy where innovation meets expertise. Transform your passion for coding into
                mastery through hands-on projects and expert mentorship.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white shadow-xl shadow-purple-500/25"
                >
                  Start Learning
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/30 hover:bg-purple-500/10 text-purple-300"
                >
                  View Curriculum
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { count: "500+", label: "Students", icon: <Terminal className="h-5 w-5 text-purple-400" /> },
                  { count: "50+", label: "Projects", icon: <Blocks className="h-5 w-5 text-purple-400" /> },
                  { count: "95%", label: "Success Rate", icon: <Gem className="h-5 w-5 text-purple-400" /> },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:bg-purple-500/10 transition-colors"
                  >
                    {stat.icon}
                    <div className="text-2xl font-bold text-white mt-2">{stat.count}</div>
                    <div className="text-sm text-purple-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideIn} className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg blur opacity-30 animate-pulse" />
                <Card className="relative bg-[#1A0B2E]/80 backdrop-blur-sm border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-500/10">
                        <CodeIcon className="h-8 w-8 text-purple-400" />
                        <div>
                          <h3 className="font-semibold text-white">Live Coding</h3>
                          <p className="text-sm text-purple-300">Real-time collaboration</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-500/10">
                        <BrainCircuitIcon className="h-8 w-8 text-purple-400" />
                        <div>
                          <h3 className="font-semibold text-white">AI Integration</h3>
                          <p className="text-sm text-purple-300">Smart learning paths</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-500/10">
                        <RocketIcon className="h-8 w-8 text-purple-400" />
                        <div>
                          <h3 className="font-semibold text-white">Career Launch</h3>
                          <p className="text-sm text-purple-300">Industry partnerships</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-purple-300">Next cohort starting in</span>
                        <span className="text-sm text-white">14 days</span>
                      </div>
                      <div className="w-full bg-purple-500/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full w-3/4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="relative h-20">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute left-1/4 bottom-10 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute left-2/3 bottom-5 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
            />
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Code Refinement
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Advanced Learning Paths",
                description:
                  "Structured curriculum designed to take you from basics to advanced concepts with hands-on projects.",
                icon: <BrainCircuitIcon className="w-8 h-8 text-purple-500" />,
              },
              {
                title: "Real-World Projects",
                description: "Work on production-grade applications with modern tech stacks and best practices.",
                icon: <RocketIcon className="w-8 h-8 text-violet-500" />,
              },
            ].map((item, i) => (
              <motion.div key={i} variants={slideIn}>
                <Card className="relative group hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-violet-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Works Section */}
      <section className="py-32 bg-gradient-to-b from-black to-purple-950/20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Latest Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="group cursor-pointer hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-violet-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg mb-4 overflow-hidden group-hover:ring-2 ring-purple-500/50 transition-all duration-300" />
                    <h3 className="text-lg font-semibold mb-2">Project {i + 1}</h3>
                    <p className="text-gray-400 mb-4">
                      An innovative solution showcasing our expertise in modern web development.
                    </p>
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-32 bg-gradient-to-b from-purple-950/20 to-black overflow-hidden">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Voices of Success
          </motion.h2>
        </motion.div>
        <TestimonialSlider />
      </section>

      {/* Join Us Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Wait? Join Us Now</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Begin your journey to becoming a better developer today. Join our community of passionate coders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={slideIn} className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-purple-500" />
                    Why Choose Us
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Expert-led mentorship program",
                      "Industry-standard project experience",
                      "Flexible learning schedule",
                      "Career guidance and support",
                      "Access to premium resources",
                      "Active developer community",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={slideIn}>
              <Card className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Input
                        placeholder="Your name"
                        className="h-12 bg-white/5 border-white/10 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="h-12 bg-white/5 border-white/10 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[120px] bg-white/5 border-white/10 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 transition-all duration-300">
                      Get Started
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

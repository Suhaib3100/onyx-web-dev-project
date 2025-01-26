"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content:
      "Coding Redefined transformed my career. The hands-on projects and mentorship were invaluable. I've grown from a beginner to a confident full-stack developer in just months.",
    author: "Alex Johnson",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "The AI-driven learning paths helped me grasp complex concepts quickly. I've never seen a more intuitive and effective way to learn machine learning. Highly recommended!",
    author: "Samantha Lee",
    role: "Machine Learning Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "The community support and real-world projects gave me the confidence to land my dream job. The skills I've gained are directly applicable to my daily work as a frontend developer.",
    author: "Michael Chen",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 py-16"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Quote className="w-12 h-12 mx-auto md:mx-0 mb-6 text-purple-400" />
              <p className="text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Avatar className="w-16 h-16 border-2 border-purple-500">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                  <AvatarFallback>{testimonials[currentIndex].author[0]}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Student working"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20"
                  onClick={prevTestimonial}
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20"
                  onClick={nextTestimonial}
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


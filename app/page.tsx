"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  Search,
  Globe,
  Server,
  Palette,
  Shield,
  Mail,
  Star,
  Check,
  Menu,
  X,
  Moon,
  Sun,
  User,
  UserPlus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react"

export default function GoDaddyHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "GoDaddy made it incredibly easy to get our business online. The website builder is intuitive and the support team is amazing!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Mike Chen",
      company: "Local Restaurant",
      text: "From domain registration to hosting, everything just works. Our website loads fast and we've never had downtime issues.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "The professional tools and templates helped us create stunning websites for our clients. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=ER",
    },
  ]

  const brands = [
    { name: "Apple", logo: "/placeholder.svg?height=40&width=120&text=Apple" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120&text=Google" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120&text=Amazon" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120&text=Microsoft" },
    { name: "Meta", logo: "/placeholder.svg?height=40&width=120&text=Meta" },
    { name: "Netflix", logo: "/placeholder.svg?height=40&width=120&text=Netflix" },
  ]

  const blogPosts = [
    {
      title: "10 Essential Tips for Domain Name Selection",
      date: "December 15, 2024",
      description:
        "Learn how to choose the perfect domain name that represents your brand and boosts your online presence.",
      image: "/placeholder.svg?height=200&width=300&text=Domain+Tips",
      category: "Domains",
    },
    {
      title: "Website Security Best Practices for 2024",
      date: "December 12, 2024",
      description:
        "Protect your website and customers with these essential security measures and SSL certificate guidelines.",
      image: "/placeholder.svg?height=200&width=300&text=Security+Guide",
      category: "Security",
    },
    {
      title: "Building Your First Business Website",
      date: "December 10, 2024",
      description: "A comprehensive guide to creating a professional website that converts visitors into customers.",
      image: "/placeholder.svg?height=200&width=300&text=Website+Building",
      category: "Websites",
    },
  ]

  const faqs = [
    {
      question: "What is included in web hosting?",
      answer:
        "Our web hosting includes unlimited bandwidth, free SSL certificate, 24/7 support, and a 99.9% uptime guarantee.",
    },
    {
      question: "Can I transfer my existing domain?",
      answer:
        "Yes, you can easily transfer your domain to GoDaddy. We'll help you through the entire process at no extra cost.",
    },
    {
      question: "Do you offer website backup services?",
      answer:
        "Yes, we provide automatic daily backups for all hosting plans to keep your website data safe and secure.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and various local payment methods depending on your location.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans. No questions asked.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const Modal = ({ isOpen, onClose, title, children }: any) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
                <X className="h-6 w-6" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}>
      {/* Fixed Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className="text-2xl font-bold text-black dark:text-white">GoDaddy</div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["Domains", "Websites", "Hosting", "Email", "Security", "Deals"].map((item) => (
                <div key={item} className="relative group">
                  <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {item} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>
              <Button
                variant="ghost"
                onClick={() => setShowLoginModal(true)}
                className="hidden sm:flex items-center space-x-1"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowSignupModal(true)}
                className="hidden sm:flex items-center space-x-1"
              >
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6">Start for Free</Button>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-4 space-y-4">
                {["Domains", "Websites", "Hosting", "Email", "Security", "Deals"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex space-x-2 pt-4">
                  <Button variant="ghost" onClick={() => setShowLoginModal(true)} className="flex-1">
                    Login
                  </Button>
                  <Button variant="ghost" onClick={() => setShowSignupModal(true)} className="flex-1">
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section with Background Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/placeholder-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <motion.div style={{ y }} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Find your perfect domain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200"
          >
            Bring your business online with ease
          </motion.p>

          {/* Domain Search */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Search your domain..."
                  className="h-14 text-lg pl-4 pr-12 bg-white text-black border-0"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button className="h-14 px-8 bg-green-600 hover:bg-green-700 text-white font-semibold">Search</Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need Online
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From domains to hosting, we provide all the tools you need to succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Globe, title: "Domains", desc: "Find the perfect domain name" },
              { icon: Server, title: "Hosting", desc: "Fast, reliable web hosting" },
              { icon: Palette, title: "Website Builder", desc: "Create stunning websites easily" },
              { icon: Shield, title: "SSL Security", desc: "Protect your website and data" },
              { icon: Mail, title: "Business Email", desc: "Professional email addresses" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Flexible hosting solutions for every need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "₹199",
                period: "/month",
                badge: null,
                features: ["1 Website", "10 GB Storage", "Free SSL", "24/7 Support"],
              },
              {
                name: "Plus",
                price: "₹399",
                period: "/month",
                badge: "Best Value",
                features: ["Unlimited Websites", "Unlimited Storage", "Free SSL", "Priority Support", "Free Domain"],
              },
              {
                name: "Pro",
                price: "₹799",
                period: "/month",
                badge: null,
                features: ["Everything in Plus", "Advanced SEO Tools", "Marketing Credits", "Dedicated Support"],
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card
                  className={`relative h-full transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 ${
                    plan.badge ? "border-2 border-green-600 shadow-xl" : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold dark:text-white">{plan.price}</span>
                      <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span className="dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.badge ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="p-8 dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-0">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial].name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Trusted by Leading Brands</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="h-10" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Stay updated with the latest tips and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                    <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-700">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                      className="flex justify-between items-center p-6 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h3 className="text-lg font-semibold dark:text-white">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          activeFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">GoDaddy</div>
              <p className="text-gray-400 mb-6">The world's largest domain registrar and web hosting provider.</p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Domain Names
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Website Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SSL Certificates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status Page
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and offers</p>
              <div className="flex">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="ml-2 bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 GoDaddy Operating Company, LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} title="Login">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email</label>
            <Input type="email" placeholder="Enter your email" className="dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Login</Button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {"Don't have an account? "}
            <button
              onClick={() => {
                setShowLoginModal(false)
                setShowSignupModal(true)
              }}
              className="text-green-600 hover:text-green-700"
            >
              Sign up
            </button>
          </p>
        </form>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} title="Sign Up">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Full Name</label>
            <Input type="text" placeholder="Enter your full name" className="dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email</label>
            <Input type="email" placeholder="Enter your email" className="dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Password</label>
            <Input type="password" placeholder="Create a password" className="dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => {
                setShowSignupModal(false)
                setShowLoginModal(true)
              }}
              className="text-green-600 hover:text-green-700"
            >
              Login
            </button>
          </p>
        </form>
      </Modal>
    </div>
  )
}

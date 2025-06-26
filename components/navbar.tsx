"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Initial navbar animation
      gsap.fromTo(
          navRef.current,
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
      )

      // Animate navbar items
      gsap.fromTo(
          ".nav-item",
          {
            y: -15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
          },
      )
    }, navRef)

    // Enhanced scroll behavior
    let lastScrollY = 0
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update background based on scroll
      if (currentScrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Show/hide navbar logic
      if (currentScrollY > 150) {
        // Only show when scrolling up AND near top (within 300px)
        if (currentScrollY < lastScrollY && currentScrollY < 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } else {
        // Always show when near top
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", requestTick, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener("scroll", requestTick)
    }
  }, [])

  // Apply visibility changes instantly
  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, {
        y: isVisible ? 0 : -100,
        duration: 0,
      })
    }
  }, [isVisible])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "NavOcular", href: "/products/navocular" },
        { name: "OpticSpectra", href: "/products/opticspectra" },
      ]
    },
    { name: "Applications", href: "/applications" },
    {
      name: "Verticals",
      href: "/verticals",
      hasDropdown: true,
      dropdownItems: [
        { name: "Government", href: "/verticals/government" },
        { name: "Defence", href: "/verticals/defence" },
        { name: "OEM/ODM", href: "/verticals/oem-odm" },
        { name: "Consumer", href: "/verticals/consumer" },
      ]
    },
    { name: "Insights", href: "/insights" },
    { name: "Career", href: "/career" },
  ]

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleDropdownClose = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 500) // 500ms delay
    setDropdownTimeout(timeout)
  }

  const handleDropdownKeepOpen = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  return (
      <header
          ref={navRef}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-white/98 backdrop-blur-2xl shadow-xl shadow-black/5 border-b border-gray-100"
                  : "bg-white/90 backdrop-blur-lg"
          }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative w-40 h-10 transition-all duration-300 group-hover:scale-[1.02]">
                <Image
                    src="/images/navtech-logo.png"
                    alt="Nav Wireless Technologies"
                    fill
                    className="object-contain filter drop-shadow-sm"
                    priority
                />
              </div>
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-green-500/5 rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                  <div key={index} className="nav-item relative">
                    {item.hasDropdown ? (
                        <div
                            className="relative"
                            onMouseEnter={() => {
                              handleDropdownKeepOpen()
                              setActiveDropdown(item.name)
                            }}
                            onMouseLeave={handleDropdownClose}
                        >
                          <Link
                              href={item.href}
                              className="flex items-center space-x-1 px-5 py-3 text-gray-700 hover:text-green-600 transition-all duration-300 text-sm font-medium group rounded-xl hover:bg-green-50/80"
                          >
                            <span className="relative z-10">{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
                          </Link>

                          {/* Dropdown Menu */}
                          {activeDropdown === item.name && (
                              <div
                                  className="absolute top-full left-0 mt-2 w-48 bg-white/98 backdrop-blur-2xl shadow-xl shadow-black/10 border border-gray-100 rounded-xl py-2 z-50"
                                  onMouseEnter={handleDropdownKeepOpen}
                                  onMouseLeave={handleDropdownClose}
                              >
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                    <Link
                                        key={dropdownIndex}
                                        href={dropdownItem.href}
                                        className="block px-4 py-3 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50/80 transition-all duration-300 first:rounded-t-xl last:rounded-b-xl"
                                        onClick={() => {
                                          setActiveDropdown(null)
                                          if (dropdownTimeout) {
                                            clearTimeout(dropdownTimeout)
                                          }
                                        }}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                ))}
                              </div>
                          )}
                        </div>
                    ) : (
                        <Link
                            href={item.href}
                            className="relative px-5 py-3 text-gray-700 hover:text-green-600 transition-all duration-300 text-sm font-medium group rounded-xl hover:bg-green-50/80"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
                        </Link>
                    )}
                  </div>
              ))}

              {/* Enhanced CTA Button */}
              {/* Styled Contact Us Button */}
              <div className="nav-item ml-4">
                <Link href="/contact">
                  <button
                      className="group bg-[#95c149] hover:bg-[#95c149] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 shadow-md"
                      style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>

            </nav>

            {/* Enhanced Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/98 backdrop-blur-2xl border-l border-gray-100 w-80">
                {/* Enhanced Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="w-32 h-8 relative">
                    <Image
                        src="/images/navtech-logo.png"
                        alt="Nav Wireless Technologies"
                        fill
                        className="object-contain"
                    />
                  </div>
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Enhanced Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                      <div key={index}>
                        {item.hasDropdown ? (
                            <div>
                              <button
                                  onClick={() => handleDropdownToggle(item.name)}
                                  className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-xl font-medium group"
                              >
                                <span>{item.name}</span>
                                <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                              </button>

                              {/* Mobile Dropdown Items */}
                              {activeDropdown === item.name && (
                                  <div className="ml-4 mt-2 space-y-1">
                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                        <Link
                                            key={dropdownIndex}
                                            href={dropdownItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-lg"
                                        >
                                          {dropdownItem.name}
                                        </Link>
                                    ))}
                                  </div>
                              )}
                            </div>
                        ) : (
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 rounded-xl font-medium group"
                            >
                              <span>{item.name}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                            </Link>
                        )}
                      </div>
                  ))}

                  {/* Enhanced Mobile CTA */}
                  <div className="pt-6 mt-4 border-t border-gray-100">
                    <Button
                        asChild
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-semibold shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02]"
                        onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <span>Contact Us</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </nav>

                {/* Enhanced Mobile Menu Footer */}
                <div className="absolute bottom-8 left-6 right-6 text-center text-sm text-gray-500 border-t border-gray-100 pt-6">
                  <p className="font-medium text-gray-700">Nav Wireless Technologies Pvt. Ltd.</p>
                  <p className="mt-1 text-xs">© 2024 All rights reserved</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Enhanced bottom border */}
        <div
            className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0"
            }`}
        ></div>
      </header>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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

    return () => {
      ctx.revert()
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  // Instant navigation handler
  const handleNavigation = (href: string) => {
    setActiveDropdown(null)
    setIsOpen(false)
  }

  return (
      <header
          ref={navRef}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200"
      >
        <div className="container mx-auto px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative" onClick={() => handleNavigation("/")}>
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                  <div key={index} className="nav-item relative">
                    {item.hasDropdown ? (
                        <div
                            className="relative"
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <button
                              className="flex items-center space-x-1 px-5 py-3 text-gray-700 hover:text-green-600 transition-all duration-300 text-sm font-medium group hover:bg-green-50/80 w-full"
                          >
                            <span className="relative z-10">{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                          </button>

                          {/* Dropdown Menu */}
                          {activeDropdown === item.name && (
                              <div
                                  className="absolute top-full left-0 mt-2 w-48 bg-[#95C149] shadow-xl shadow-black/10 border border-[#95C149] py-2 z-50"
                              >
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                    <Link
                                        key={dropdownIndex}
                                        href={dropdownItem.href}
                                        className="block px-4 py-3 text-sm text-white hover:text-yellow-200 transition-all duration-200 font-medium"
                                        onClick={() => handleNavigation(dropdownItem.href)}
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
                            onClick={() => handleNavigation(item.href)}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
                        </Link>
                    )}
                  </div>
              ))}

              {/* CTA Button */}
              <div className="nav-item ml-4">
                <Link href="/contact" onClick={() => handleNavigation("/contact")}>
                  <button
                      className="group bg-[#95c149] hover:bg-[#7da73a] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 shadow-md"
                      style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
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
              <SheetContent side="right" className="bg-[#95C149] border-l border-[#95C149] w-80">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
                  <div className="w-32 h-8 relative">
                    <Image
                        src="/images/navtech-logo.png"
                        alt="Nav Wireless Technologies"
                        fill
                        className="object-contain brightness-0 invert"
                    />
                  </div>
                  <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-white hover:bg-white/20 rounded-xl transition-all duration-300"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                      <div key={index}>
                        {item.hasDropdown ? (
                            <div>
                              <button
                                  onClick={() => handleDropdownToggle(item.name)}
                                  className="flex items-center justify-between w-full px-4 py-4 text-white hover:text-yellow-200 transition-all duration-200 font-medium group"
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
                                            onClick={() => handleNavigation(dropdownItem.href)}
                                            className="block px-4 py-3 text-sm text-white/90 hover:text-yellow-200 transition-all duration-200"
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
                                onClick={() => handleNavigation(item.href)}
                                className="flex items-center justify-between px-4 py-4 text-white hover:text-yellow-200 transition-all duration-200 font-medium group"
                            >
                              <span>{item.name}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                            </Link>
                        )}
                      </div>
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-6 mt-4 border-t border-white/20">
                    <Button
                        asChild
                        className="w-full bg-white hover:bg-white/90 text-[#95C149] py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 border-white"
                        onClick={() => handleNavigation("/contact")}
                    >
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <span>Contact Us</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-8 left-6 right-6 text-center text-sm text-white/80 border-t border-white/20 pt-6">
                  <p className="font-medium text-white">Nav Wireless Technologies Pvt. Ltd.</p>
                  <p className="mt-1 text-xs text-white/70">© 2024 All rights reserved</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  )
}
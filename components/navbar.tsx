"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { gsap } from "gsap"
import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

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

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (!isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

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
        { name: "Telecom", href: "/verticals/telecom" },
      ]
    },
    { name: "Insights", href: "/insights" },
    { name: "Career", href: "/career" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }
  const handleMobileDropdownToggle = (itemName: string) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName)
  }

  // Instant navigation handler
  const handleNavigation = (href: string) => {
    setActiveDropdown(null)
    setMobileDropdown(null)
    setIsOpen(false)
  }

  return (
      <header
          ref={navRef}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200"
      >
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex h-20 sm:h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative" onClick={() => handleNavigation("/")}>
              <div className="relative w-32 sm:w-40 h-8 sm:h-10 transition-all duration-300 group-hover:scale-[1.02]">
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

            {/* Desktop Navigation - Now shows on md screens and up (768px+) */}
            <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2">
              {navItems.map((item, index) => (
                  <div key={index} className="nav-item relative flex items-center">
                    {item.hasDropdown ? (
                        <div
                            className="relative flex items-center"
                            onClick={() => handleDropdownToggle(item.name)}
                        >
                          <button
                              className="flex items-center justify-center space-x-0.5 md:space-x-1 px-1.5 md:px-2 lg:px-3 xl:px-5 py-1.5 md:py-2 lg:py-3 text-gray-700 hover:text-[#95C149] transition-all duration-300 text-xs lg:text-sm font-bold group w-full h-full"
                          >
                            <span className="relative z-10">{item.name}</span>
                            <ChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-all duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            <span className="absolute bottom-0.5 md:bottom-1 lg:bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-3 md:group-hover:w-4 lg:group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                          </button>
                          {/* Dropdown Menu */}
                          {activeDropdown === item.name && (
                              <div
                                  className="absolute top-full left-0 mt-2 w-36 md:w-40 lg:w-48 bg-[#95C149] shadow-xl shadow-black/10 border border-[#95C149] py-2 z-50"
                              >
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                    <Link
                                        key={dropdownIndex}
                                        href={dropdownItem.href}
                                        className="block px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-3 text-xs lg:text-sm text-[#DEDEDE] hover:text-[#FFFFFF] transition-all duration-200 font-bold"
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
                            className="relative flex items-center justify-center px-1.5 md:px-2 lg:px-3 xl:px-5 py-1.5 md:py-2 lg:py-3 text-gray-700 hover:text-[#95C149] transition-all duration-300 text-xs lg:text-sm font-bold group rounded-xl h-full"
                            onClick={() => handleNavigation(item.href)}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <span className="absolute bottom-0.5 md:bottom-1 lg:bottom-1.5 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-3 md:group-hover:w-4 lg:group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
                        </Link>
                    )}
                  </div>
              ))}

              {/* CTA Button */}
              <div className="nav-item ml-1 md:ml-2 lg:ml-4 flex items-center">
                <Link href="/contact" onClick={() => handleNavigation("/contact")}>
                  <button
                      className="group bg-[#95c149] hover:bg-[#7da73a] text-white px-3 md:px-4 lg:px-6 xl:px-8 py-1.5 md:py-2 lg:py-3 rounded-full text-xs md:text-sm lg:text-base font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-1 lg:space-x-2 shadow-md"
                      style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>
            </nav>

            {/* Mobile Navigation Trigger - Now shows only on mobile (below md/768px) */}
            <div className="md:hidden flex items-center">
              <button
                  aria-label="Open menu"
                  className="text-gray-700 hover:text-[#95C149] p-2 rounded-md focus:outline-none"
                  onClick={() => setIsOpen(true)}
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="p-0 max-w-xs w-full bg-white shadow-lg border-l border-gray-200 overflow-auto">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <Link href="/" className="relative w-32 h-8" onClick={() => handleNavigation("/")}>
                  <Image
                      src="/images/navtech-logo.png"
                      alt="Nav Wireless Technologies"
                      fill
                      className="object-contain"
                      priority
                  />
                </Link>
                <button
                    aria-label="Close menu"
                    className="text-gray-700 hover:text-[#95C149] p-2 rounded-md focus:outline-none"
                    onClick={() => setIsOpen(false)}
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-2 py-3">
                {navItems.map((item, index) => (
                    <div key={index} className="nav-item relative">
                      {item.hasDropdown ? (
                          <>
                            <button
                                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#95C149] text-base font-semibold bg-transparent rounded-lg transition-all duration-300"
                                onClick={() => handleMobileDropdownToggle(item.name)}
                            >
                              <span>{item.name}</span>
                              {mobileDropdown === item.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                            {mobileDropdown === item.name && (
                                <div className="pl-4">
                                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                      <Link
                                          key={dropdownIndex}
                                          href={dropdownItem.href}
                                          className="block px-4 py-2 text-gray-600 hover:text-[#95C149] transition-all duration-200 text-base font-medium"
                                          onClick={() => handleNavigation(dropdownItem.href)}
                                      >
                                        {dropdownItem.name}
                                      </Link>
                                  ))}
                                </div>
                            )}
                          </>
                      ) : (
                          <Link
                              href={item.href}
                              className="block px-4 py-3 text-gray-700 hover:text-[#95C149] transition-all duration-300 text-base font-semibold rounded-lg"
                              onClick={() => handleNavigation(item.href)}
                          >
                            {item.name}
                          </Link>
                      )}
                    </div>
                ))}
                {/* CTA Button */}
                <div className="nav-item px-4 py-3">
                  <Link href="/contact" onClick={() => handleNavigation("/contact")}>
                    <button
                        className="group bg-[#95c149] hover:bg-[#7da73a] text-white w-full py-3 rounded-full text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                    >
                      <span>Contact Us</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>
  )
}


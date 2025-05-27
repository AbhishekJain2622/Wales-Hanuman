"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    // dropdown: [
    //   { name: "About Lord Hanuman", href: "/about/hanuman" },
    //   // { name: "About Swami", href: "/about/swami" },
    //   // { name: "Our Mission", href: "/about/mission" },
    //   // { name: "Temple Services", href: "/about/services" },
    //   // { name: "Visit Us", href: "/about/visit" },
    //   // { name: "Support the Temple", href: "/about/support" },
    // ],
  },
  {
    name: "Temples",
    href: "/temples",
    // dropdown: [
    //   { name: "Main Temple", href: "/temples/main" },
    //   { name: "Associated Temples", href: "/temples/associated" },
    // ],
  },
  {
    name: "Festivals & Events",
    href: "/events",
    // dropdown: [
    //   { name: "Upcoming Events", href: "/events/upcoming" },
    //   { name: "Calendar", href: "/events/calendar" },
    //   { name: "Abhishekam Booking", href: "/events/booking" },
    // ],
  },
  {
    name: "Resources",
    href: "/resources",
    // dropdown: [
    //   { name: "Articles", href: "/resources/articles" },
    //   { name: "Teachings", href: "/resources/teachings" },
    // ],
  },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  return (
    <nav className="bg-primary-green text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image src="/logo.png" alt="Wales Hanuman Temple Logo" fill className="object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-semibold">Wales Hanuman Temple</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div className="flex items-center cursor-pointer">
                  <Link href={link.href} className="hover:text-primary-saffron transition-colors">
                    {link.name}
                  </Link>
                  {link.dropdown && <ChevronDown className="h-4 w-4 ml-1 group-hover:text-primary-saffron" />}
                </div>

                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-primary-gold/20 hover:text-primary-saffron"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-primary-green border-t border-primary-gold/30 py-2">
          <div className="container mx-auto px-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <div
                  className="flex items-center justify-between cursor-pointer py-2"
                  onClick={() => link.dropdown && toggleDropdown(link.name)}
                >
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-saffron"
                    onClick={(e) => link.dropdown && e.preventDefault()}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {link.dropdown && openDropdown === link.name && (
                  <div className="pl-4 space-y-1 mt-1 border-l-2 border-primary-gold/50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-sm text-white/90 hover:text-primary-saffron"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-red-600">
            RoomEtaaa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/posts" className="text-gray-600 hover:text-red-600 transition-colors">
              Browse Rooms
            </Link>
            <Link href="/posts/location" className="text-gray-600 hover:text-red-600 transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 bg-white shadow-lg rounded-lg mt-2">
            <Link href="/posts" className="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">
              Browse Rooms
            </Link>
            <Link href="/posts/location" className="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">
              Locations
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md">
              Contact
            </Link>
            <div className="px-4 space-y-2 pt-2 border-t border-gray-100">
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="block">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 
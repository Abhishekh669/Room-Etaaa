"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useGetUserSession } from "@/features/hooks/tanstacks/query-hooks/users/use-get-session"

export function Navbar() {
  const {data : session} = useGetUserSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const getLink = () =>{
    if(!session){
      return "/login"
    }
    if(session){
      if(session.role === "USER")return "/posts"
      else if(session.role === "ADMIN" || session.role === "OWNER")return "/ghar/rooms"
      else return "/login"
    }
    return "/"
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl  new-font md:text-2xl font-bold text-red-600">
            <span className="text-black">Room </span>Etaaa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/posts" className="text-gray-600 hover:text-red-600 transition-colors">
              Browse Rooms
            </Link>
            <Link href="/posts/location" className="text-gray-600 hover:text-red-600 transition-colors">
              Locations
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4">
             
              <Link href={getLink()}>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  {session ? "Go To App" : "Get Started"}
                </Button>
              </Link>
            </div>
          </div>

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
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              Contact
            </button>
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
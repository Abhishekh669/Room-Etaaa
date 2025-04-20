"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, MapPin, Home } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white pt-20 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white opacity-50"></div>
      <div className="relative z-10 text-center space-y-6 md:space-y-8 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Find Your Perfect <span className="text-red-600">Room</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover thousands of rooms, apartments, and shared spaces nearby you. 
          Your next home is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/posts" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
              Browse Rooms <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/posts/location" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-50">
              <MapPin className="mr-2 h-4 w-4" />
              Search by Location
            </Button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-8">
          <div className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">10K+</div>
            <div className="text-gray-600">Active Listings</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">5K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center bg-white/50 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-red-600">50+</div>
            <div className="text-gray-600">Locations</div>
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-red-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Your Perfect Room?
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have found their ideal living space through RoomEtaaa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/posts">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              Browse Rooms
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="  border-white text-red-600 hover:bg-red-700">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 
"use client"
import { Search, MapPin, Shield, MessageSquare, Star, Clock } from "lucide-react"

const features = [
  {
    icon: <Search className="h-8 w-8 text-red-600" />,
    title: "Smart Search",
    description: "Find rooms that match your preferences with our advanced search filters."
  },
  {
    icon: <MapPin className="h-8 w-8 text-red-600" />,
    title: "Location Based",
    description: "Search rooms by location and find the perfect neighborhood for you."
  },
  {
    icon: <Shield className="h-8 w-8 text-red-600" />,
    title: "Verified Listings",
    description: "All our listings are verified to ensure you get what you see."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-red-600" />,
    title: "Direct Communication",
    description: "Chat directly with property owners and get quick responses."
  },
  {
    icon: <Star className="h-8 w-8 text-red-600" />,
    title: "User Reviews",
    description: "Read honest reviews from previous tenants before making a decision."
  },
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    title: "24/7 Support",
    description: "Our support team is always ready to help you with any queries."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-red-600">RoomEtaaa</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We make finding your perfect room simple, fast, and secure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 hover:border-red-100 transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
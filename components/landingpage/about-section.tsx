"use client"
import { Building2, Users, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-red-600">RoomEtaaa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing the way people find and manage rooms in Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              RoomEtaaa was founded in 2023 with a simple mission: to make finding and managing rooms in Nepal easier, faster, and more reliable. We understand the challenges of finding the perfect room in Kathmandu and other major cities in Nepal.
            </p>
            <p className="text-gray-600">
              Our platform connects property owners with potential tenants, providing a seamless experience for both parties. We've helped thousands of people find their perfect living space and property owners manage their properties efficiently.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To transform the real estate rental market in Nepal by providing a transparent, efficient, and user-friendly platform that benefits both property owners and tenants.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Target className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Our Vision</h4>
                <p className="text-sm text-gray-600">To be Nepal's leading platform for room rentals and property management</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-gray-900">Our Values</h4>
                <p className="text-sm text-gray-600">Transparency, Reliability, and Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <Building2 className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">10K+</div>
            <div className="text-gray-600">Properties Listed</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">50K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
} 
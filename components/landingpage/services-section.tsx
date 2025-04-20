"use client"
import { Building2, Users, LineChart, CreditCard, FileText, BarChart3, Home, Settings } from "lucide-react"

const services = [
  {
    icon: <Building2 className="h-8 w-8 text-red-600" />,
    title: "Room Management",
    description: "Efficiently manage your property listings, track occupancy, and handle maintenance requests all in one place."
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Client Management",
    description: "Streamline tenant onboarding, communication, and document management with our comprehensive client portal."
  },
  {
    icon: <LineChart className="h-8 w-8 text-red-600" />,
    title: "Finance Tracking",
    description: "Monitor rent payments, expenses, and generate financial reports with our advanced tracking system."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-red-600" />,
    title: "Payment Processing",
    description: "Secure online payment processing with multiple payment methods and automated reminders."
  },
  {
    icon: <FileText className="h-8 w-8 text-red-600" />,
    title: "Document Management",
    description: "Store and manage all property-related documents, contracts, and agreements securely in the cloud."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-red-600" />,
    title: "Analytics Dashboard",
    description: "Get insights into property performance, occupancy rates, and financial metrics with real-time analytics."
  },
  {
    icon: <Home className="h-8 w-8 text-red-600" />,
    title: "Property Listing",
    description: "Showcase your properties with high-quality images, virtual tours, and detailed descriptions."
  },
  {
    icon: <Settings className="h-8 w-8 text-red-600" />,
    title: "Maintenance Management",
    description: "Track and manage maintenance requests, schedule repairs, and keep your properties in top condition."
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-red-600">Property Management</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your properties efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
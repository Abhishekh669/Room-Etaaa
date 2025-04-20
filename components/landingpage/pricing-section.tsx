"use client"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "रु 999",
    period: "per month",
    description: "Perfect for individual property owners",
    features: [
      "Up to 5 property listings",
      "Basic tenant management",
      "Email support",
      "Basic analytics",
      "Document storage (1GB)"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "रु 2,499",
    period: "per month",
    description: "Ideal for small property management companies",
    features: [
      "Up to 20 property listings",
      "Advanced tenant management",
      "Priority support",
      "Advanced analytics",
      "Document storage (5GB)",
      "Payment processing",
      "Maintenance tracking"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "रु 4,999",
    period: "per month",
    description: "For large property management firms",
    features: [
      "Unlimited property listings",
      "Full tenant management suite",
      "24/7 dedicated support",
      "Custom analytics dashboard",
      "Unlimited document storage",
      "Advanced payment processing",
      "Maintenance management",
      "API access",
      "Custom integrations"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing plans to suit your property management needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'transform scale-105 shadow-xl border-2 border-red-600' 
                  : 'border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-sm font-semibold py-2 text-center">
                  <Star className="h-4 w-4 inline-block mr-1" />
                  Most Popular
                </div>
              )}
              <div className={`p-6 md:p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register">
                  <Button 
                    className={`w-full py-4 md:py-6 text-base md:text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom plan? <Link href="/contact" className="text-red-600 hover:underline font-semibold">Contact us</Link>
          </p>
        </div>
      </div>
    </section>
  )
} 
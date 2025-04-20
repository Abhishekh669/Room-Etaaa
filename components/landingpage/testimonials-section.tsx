"use client"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sujan Shrestha",
    role: "Student",
    image: "https://ui-avatars.com/api/?name=Sujan+Shrestha&background=random",
    content: "Found my perfect room in Thamel within a day! The platform is so easy to use and the landlords are responsive.",
    rating: 5
  },
  {
    name: "Priya Gurung",
    role: "Working Professional",
    image: "https://ui-avatars.com/api/?name=Priya+Gurung&background=random",
    content: "The location-based search helped me find a room close to my office. Saved me so much time and hassle!",
    rating: 5
  },
  {
    name: "Rajesh Thapa",
    role: "Business Owner",
    image: "https://ui-avatars.com/api/?name=Rajesh+Thapa&background=random",
    content: "As a property owner, I've found great tenants through RoomEtaaa. The verification process gives me peace of mind.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-red-600">Users</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
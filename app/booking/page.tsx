"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "regular",
    participants: "1",
    specialRequests: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // For demo purposes, we'll just show a success message
    setIsSubmitted(true)
  }

  // Available time slots
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]

  // Service types with prices
  const services = [
    { id: "regular", name: "Regular Abhishekam", price: "£51" },
    { id: "special", name: "Special Abhishekam", price: "£101" },
    { id: "grand", name: "Grand Abhishekam", price: "£251" },
    { id: "maha", name: "Maha Abhishekam", price: "£501" },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-primary-gold/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-primary-gold/30">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-primary-green mb-4">Booking Confirmed!</h2>
              <p className="text-gray-700 mb-6">
                Thank you for booking an Abhishekam at Wales Hanuman Temple. We have received your request and will send
                you a confirmation email shortly.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-primary-green mb-4">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-500">Name</p>
                    <p className="font-medium">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Service</p>
                    <p className="font-medium">{services.find((service) => service.id === formData.service)?.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium">{formData.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium">{formData.time}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Return to Home
                </Link>
                <Link
                  href="/contact"
                  className="border border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary-gold/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-green mb-6 text-center">Abhishekam Booking</h1>
          <p className="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Book your Abhishekam service at Wales Hanuman Temple. Please fill out the form below to schedule your
            preferred date and time.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-primary-gold/30">
                <h2 className="text-xl font-semibold text-primary-green mb-6 border-b border-primary-gold/30 pb-2">
                  Booking Information
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Participants *
                      </label>
                      <select
                        id="participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Person" : "People"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Abhishekam Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      >
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name} - {service.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      ></textarea>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <button
                      type="submit"
                      className="w-full bg-primary-saffron hover:bg-primary-saffron/90 text-white py-3 rounded-md font-medium transition-colors"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-primary-gold/30 sticky top-24">
                <h2 className="text-xl font-semibold text-primary-green mb-6 border-b border-primary-gold/30 pb-2">
                  Abhishekam Details
                </h2>
                <div className="space-y-4 mb-6">
                  {services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center">
                      <span className="text-gray-700">{service.name}</span>
                      <span className="font-semibold text-primary-green">{service.price}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary-gold/10 p-4 rounded-md mb-6">
                  <h3 className="font-semibold text-primary-green mb-2">Important Information</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Please arrive 15 minutes before your scheduled time</li>
                    <li>• Wear traditional attire if possible</li>
                    <li>• Payment can be made online or at the temple</li>
                    <li>• Cancellations should be made 24 hours in advance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-green mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    If you have any questions or need assistance with your booking, please contact us.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-primary-green/10 hover:bg-primary-green/20 text-primary-green py-2 rounded-md font-medium transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

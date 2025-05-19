"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-green">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/hindu-temple-ornate-pattern.png" alt="Temple Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer any questions you may have about our temple, services, or events. Reach out to us and
            we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Our Location</h3>
              <p className="text-gray-700">123 Temple Street, Cardiff, Wales, UK CF10 1AA</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Phone</h3>
              <p className="text-gray-700">+44 29 1234 5678</p>
              <p className="text-gray-700">+44 29 8765 4321 (Temple Office)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Email</h3>
              <p className="text-gray-700">info@waleshanuman.org</p>
              <p className="text-gray-700">priest@waleshanuman.org</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-primary-gold/30">
              <h2 className="text-2xl font-bold mb-6 text-primary-green">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="text-center py-8">
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
                  <h3 className="text-xl font-semibold text-primary-green mb-2">Thank You!</h3>
                  <p className="text-gray-700">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-saffron hover:bg-primary-saffron/90 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Temple Hours & Map */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-gold/30">
                <h3 className="text-xl font-semibold mb-4 text-primary-green flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary-saffron" /> Temple Hours
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span>9:00 AM - 12:00 PM, 5:00 PM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Saturday - Sunday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Special Festivals:</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-gold/30">
                <h3 className="text-xl font-semibold mb-4 text-primary-green">Find Us</h3>
                <div className="h-64 w-full bg-gray-200 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5463476715426!2d-3.1788!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb8742c46f5%3A0xc620b871e5d19efa!2sCardiff%20CF10%201AA%2C%20UK!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-green">What are the temple visiting hours?</h3>
              <p className="text-gray-700">
                The temple is open Monday to Friday from 9:00 AM to 12:00 PM and 5:00 PM to 8:00 PM. On weekends, we're
                open from 8:00 AM to 8:00 PM. During special festivals, the temple may have extended hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-green">How can I book a special pooja?</h3>
              <p className="text-gray-700">
                You can book special poojas through our online booking system on the Abhishekam Booking page, by calling
                the temple office, or by visiting the temple in person. We recommend booking at least 3-7 days in
                advance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-green">
                Is there parking available at the temple?
              </h3>
              <p className="text-gray-700">
                Yes, we have a dedicated parking area for devotees. During festivals and special events, we may have
                overflow parking arrangements. Please follow the guidance of our volunteers for parking during busy
                times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-green">How can I volunteer at the temple?</h3>
              <p className="text-gray-700">
                We welcome volunteers for various activities. Please visit our Support the Temple page or contact the
                temple office to learn about current volunteering opportunities and how you can contribute your time and
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

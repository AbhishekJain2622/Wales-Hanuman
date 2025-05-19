import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function Home() {
  // Mock data for news and announcements
  const news = [
    {
      id: 1,
      title: "Hanuman Jayanti Celebrations",
      date: "April 23, 2025",
      excerpt: "Join us for the grand celebration of Hanuman Jayanti with special poojas and prasadam.",
    },
    {
      id: 2,
      title: "New Temple Hall Construction",
      date: "March 15, 2025",
      excerpt: "Construction of our new prayer hall has begun. Donations welcome to support this initiative.",
    },
    {
      id: 3,
      title: "Monthly Sundarkand Path",
      date: "First Sunday of every month",
      excerpt: "Join us for the monthly Sundarkand Path followed by Mahaprasad.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hindu-temple-hanuman.png"
            alt="Wales Hanuman Temple"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-gold drop-shadow-lg">
            Welcome to Wales Hanuman Temple
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            A sacred space dedicated to Lord Hanuman, offering spiritual guidance and community service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/visit"
              className="bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/booking"
              className="bg-white hover:bg-white/90 text-primary-green px-6 py-3 rounded-md font-medium transition-colors"
            >
              Book Abhishekam
            </Link>
          </div>
        </div>
      </section>

      {/* About Lord Hanuman Section */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-gold/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-primary-green">About Lord Hanuman</h2>
              <p className="text-gray-700 mb-4">
                Lord Hanuman, the monkey god, is one of the most celebrated and worshipped figures in Hindu mythology.
                Known for his unwavering devotion to Lord Rama, incredible strength, and selfless service, Hanuman is
                the symbol of devotion, strength, and perseverance.
              </p>
              <p className="text-gray-700 mb-6">
                At Wales Hanuman Temple, we honor and celebrate the divine qualities of Lord Hanuman, offering a place
                for devotees to connect with his energy and seek his blessings for courage, strength, and protection.
              </p>
              <Link
                href="/about/hanuman"
                className="inline-flex items-center text-primary-green hover:text-primary-saffron transition-colors font-medium"
              >
                Learn more about Lord Hanuman
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-8 border-primary-gold/30">
                <Image src="/lord-hanuman-statue.png" alt="Lord Hanuman" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Times Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-gold">Temple Opening Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-saffron flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Weekdays
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Morning:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening:</span>
                  <span>5:00 PM - 8:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-saffron flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Weekends
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Morning:</span>
                  <span>8:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening:</span>
                  <span>4:00 PM - 8:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-saffron flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Aarti Timings
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Morning:</span>
                  <span>10:30 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening:</span>
                  <span>7:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-saffron flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Special Days
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Festivals:</span>
                  <span>6:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Hanuman Jayanti:</span>
                  <span>5:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/visit/timings"
              className="inline-flex items-center bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Complete Schedule
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News and Announcements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Latest News & Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div
                key={item.id}
                className="border border-primary-gold/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary-green">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-primary-saffron hover:text-primary-green transition-colors font-medium"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-primary-gold/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Our Location</h3>
              <p className="text-gray-700">123 Temple Street, Cardiff, Wales, UK CF10 1AA</p>
              <Link
                href="/visit/directions"
                className="mt-4 text-primary-saffron hover:text-primary-green transition-colors font-medium"
              >
                Get Directions
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Phone</h3>
              <p className="text-gray-700">+44 29 1234 5678</p>
              <p className="text-gray-700">+44 29 8765 4321 (Temple Office)</p>
              <Link
                href="tel:+442912345678"
                className="mt-4 text-primary-saffron hover:text-primary-green transition-colors font-medium"
              >
                Call Now
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary-green/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-green">Email</h3>
              <p className="text-gray-700">info@waleshanuman.org</p>
              <p className="text-gray-700">priest@waleshanuman.org</p>
              <Link
                href="/contact"
                className="mt-4 text-primary-saffron hover:text-primary-green transition-colors font-medium"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-gold">Join Our Spiritual Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a part of our temple community and participate in spiritual activities, volunteer opportunities, and
            cultural celebrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Support the Temple
            </Link>
            <Link
              href="/events"
              className="bg-white hover:bg-white/90 text-primary-green px-6 py-3 rounded-md font-medium transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

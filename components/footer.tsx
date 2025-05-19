import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-green text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image src="/logo.png" alt="Wales Hanuman Temple Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold">Wales Hanuman Temple</h3>
            </div>
            <p className="text-white/80 mb-4">
              Dedicated to Lord Hanuman, serving the spiritual needs of the community in Wales with devotion and
              commitment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary-saffron transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-primary-saffron transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-primary-saffron transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-gold/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-primary-saffron transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-primary-saffron transition-colors">
                  Temple Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-primary-saffron transition-colors">
                  Festivals & Events
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/80 hover:text-primary-saffron transition-colors">
                  Abhishekam Booking
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white/80 hover:text-primary-saffron transition-colors">
                  Support the Temple
                </Link>
              </li>
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-gold/30 pb-2">Temple Timings</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/80">Monday - Friday:</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80"></span>
                <span>5:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Saturday - Sunday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Special Festivals:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-gold/30 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary-saffron shrink-0 mt-0.5" />
                <span>123 Temple Street, Cardiff, Wales, UK CF10 1AA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-saffron shrink-0" />
                <span>+44 29 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-saffron shrink-0" />
                <span>info@waleshanuman.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-gold/30 mt-8 pt-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Wales Hanuman Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsPage() {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Hanuman Jayanti Celebrations",
      date: "April 23, 2025",
      time: "6:00 AM - 9:00 PM",
      location: "Wales Hanuman Temple - Cardiff",
      image: "/event-hanuman-jayanti.png",
      description:
        "Join us for the grand celebration of Hanuman Jayanti, the birth anniversary of Lord Hanuman. The day will include special abhishekam, Sundarkand path, bhajans, cultural performances, and mahaprasad.",
    },
    {
      id: 2,
      title: "Monthly Sundarkand Path",
      date: "First Sunday of every month",
      time: "10:00 AM - 12:00 PM",
      location: "All Temple Locations",
      image: "/event-sundarkand.png",
      description:
        "Join us for the monthly recitation of Sundarkand, a chapter from the Ramayana that highlights Lord Hanuman's journey to Lanka. The session will be followed by aarti and prasad distribution.",
    },
    {
      id: 3,
      title: "Diwali Festival of Lights",
      date: "November 12, 2025",
      time: "5:00 PM - 10:00 PM",
      location: "Wales Hanuman Temple - Cardiff",
      image: "/event-diwali.png",
      description:
        "Celebrate Diwali, the festival of lights, with special prayers, lamp lighting ceremony, cultural performances, and fireworks display. Traditional sweets and snacks will be served.",
    },
    {
      id: 4,
      title: "Ram Navami Celebrations",
      date: "March 30, 2025",
      time: "8:00 AM - 8:00 PM",
      location: "Wales Hanuman Temple - Swansea",
      image: "/event-ram-navami.png",
      description:
        "Celebrate the birth of Lord Rama with special poojas, bhajans, and cultural programs. The event will include a special discourse on the life and teachings of Lord Rama.",
    },
  ]

  // Sample data for festival calendar
  const festivalCalendar = [
    { name: "Makar Sankranti", date: "January 14, 2025" },
    { name: "Maha Shivaratri", date: "February 26, 2025" },
    { name: "Holi", date: "March 14, 2025" },
    { name: "Ram Navami", date: "March 30, 2025" },
    { name: "Hanuman Jayanti", date: "April 23, 2025" },
    { name: "Akshaya Tritiya", date: "May 10, 2025" },
    { name: "Guru Purnima", date: "July 21, 2025" },
    { name: "Janmashtami", date: "August 15, 2025" },
    { name: "Ganesh Chaturthi", date: "September 3, 2025" },
    { name: "Navaratri", date: "October 3-11, 2025" },
    { name: "Dussehra", date: "October 12, 2025" },
    { name: "Diwali", date: "November 12, 2025" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-green">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/hindu-temple-ornate-pattern.png" alt="Temple Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">Festivals & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in celebrating Hindu festivals and special events throughout the year. Experience the rich cultural
            traditions and spiritual practices.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-primary-gold/30 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary-green">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-2 text-primary-saffron" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-2 text-primary-saffron" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-2 text-primary-saffron" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-primary-saffron hover:text-primary-green transition-colors font-medium"
                  >
                    Event Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/events/calendar"
              className="inline-flex items-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Full Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Calendar Section */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">2025 Festival Calendar</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-primary-gold/30">
            <div className="p-6 bg-primary-green text-white">
              <h3 className="text-xl font-semibold">Hindu Festival Dates</h3>
              <p>Mark your calendar for these important festivals celebrated at our temples</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {festivalCalendar.map((festival, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-primary-green">{festival.name}</span>
                    <span className="text-gray-700">{festival.date}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-700 text-sm">
                * Festival dates are based on the Hindu lunar calendar and may vary slightly. Please check with the
                temple for exact timings of ceremonies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abhishekam Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-green">Book an Abhishekam</h2>
              <p className="text-gray-700 mb-4">
                Abhishekam is a sacred ritual of bathing the deity with various substances like milk, yogurt, honey,
                ghee, and water while chanting mantras. This powerful ceremony is believed to cleanse one's karma and
                bring blessings.
              </p>
              <p className="text-gray-700 mb-6">
                At Wales Hanuman Temple, we offer various types of abhishekam services that you can book for yourself,
                your family, or special occasions. Our priests will perform the ritual with devotion and according to
                traditional practices.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Regular Abhishekam</span>
                  <span className="font-semibold text-primary-green">£51</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Special Abhishekam</span>
                  <span className="font-semibold text-primary-green">£101</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Grand Abhishekam</span>
                  <span className="font-semibold text-primary-green">£251</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Maha Abhishekam</span>
                  <span className="font-semibold text-primary-green">£501</span>
                </div>
              </div>
              <Link
                href="/events/booking"
                className="inline-flex items-center bg-primary-saffron text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-primary-saffron/90"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative h-96 w-full max-w-md rounded-lg overflow-hidden shadow-xl">
                <Image src="/abhishekam-ceremony.png" alt="Abhishekam Ceremony" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-gold">Stay Updated with Temple Events</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates about upcoming festivals, events, and temple activities.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow focus:outline-none text-gray-800"
              />
              <button className="bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

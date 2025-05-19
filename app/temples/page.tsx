import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TemplesPage() {
  // Sample data for the temples
  const temples = [
    {
      id: 1,
      name: "Wales Hanuman Temple - Cardiff",
      image: "/temple-cardiff.png",
      description:
        "Our main temple located in Cardiff, dedicated to Lord Hanuman. The temple features traditional South Indian architecture with intricate carvings and a beautiful sanctum sanctorum.",
      address: "123 Temple Street, Cardiff, Wales, UK CF10 1AA",
      timings: "9:00 AM - 12:00 PM, 5:00 PM - 8:00 PM (Mon-Fri); 8:00 AM - 8:00 PM (Sat-Sun)",
      specialFeatures: [
        "Main Hanuman Sanctum",
        "Meditation Hall",
        "Community Kitchen",
        "Cultural Center",
        "Library of Spiritual Texts",
      ],
    },
    {
      id: 2,
      name: "Wales Hanuman Temple - Swansea",
      image: "/temple-swansea.png",
      description:
        "Our Swansea branch serves the spiritual needs of devotees in West Wales. This temple is known for its peaceful atmosphere and regular bhajan sessions.",
      address: "45 Divine Road, Swansea, Wales, UK SA1 2BC",
      timings: "9:00 AM - 12:00 PM, 5:00 PM - 7:30 PM (Mon-Fri); 8:00 AM - 7:00 PM (Sat-Sun)",
      specialFeatures: ["Hanuman Sanctum", "Prayer Hall", "Community Space", "Children's Activity Center"],
    },
    {
      id: 3,
      name: "Wales Hanuman Temple - Newport",
      image: "/temple-newport.png",
      description:
        "Our newest temple in Newport brings spiritual guidance to East Wales. This modern facility combines traditional design elements with contemporary amenities.",
      address: "78 Spiritual Avenue, Newport, Wales, UK NP10 3DE",
      timings: "10:00 AM - 12:00 PM, 5:00 PM - 7:00 PM (Mon-Fri); 9:00 AM - 7:00 PM (Sat-Sun)",
      specialFeatures: ["Hanuman Sanctum", "Multi-purpose Hall", "Garden", "Priest Quarters"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-green">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/hindu-temple-ornate-pattern.png" alt="Temple Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">Our Temples</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our network of temples across Wales, each serving as a spiritual haven for devotees of Lord
            Hanuman.
          </p>
        </div>
      </section>

      {/* Temples Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {temples.map((temple, index) => (
              <div
                key={temple.id}
                className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                    <Image src={temple.image || "/placeholder.svg"} alt={temple.name} fill className="object-cover" />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="text-3xl font-bold mb-4 text-primary-green">{temple.name}</h2>
                  <p className="text-gray-700 mb-4">{temple.description}</p>
                  <div className="bg-primary-gold/10 p-4 rounded-md mb-6">
                    <h3 className="font-semibold text-primary-green mb-2">Temple Information</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Address:</span> {temple.address}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Timings:</span> {temple.timings}
                    </p>
                  </div>
                  <h3 className="font-semibold text-primary-green mb-2">Special Features</h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {temple.specialFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-saffron mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/temples/${temple.id}`}
                    className="inline-flex items-center bg-primary-saffron text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-primary-saffron/90"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Plan Your Visit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-green">What to Expect</h3>
              <p className="text-gray-700 mb-4">
                Our temples are sacred spaces where devotees can connect with Lord Hanuman through prayer, meditation,
                and rituals. Visitors can expect a peaceful atmosphere, traditional ceremonies, and a warm welcome from
                our temple community.
              </p>
              <Link
                href="/about/visit"
                className="text-primary-saffron hover:text-primary-green transition-colors font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-green">Temple Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-saffron mt-2 mr-2"></span>
                  <span>Remove shoes before entering the temple</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-saffron mt-2 mr-2"></span>
                  <span>Dress modestly and respectfully</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-saffron mt-2 mr-2"></span>
                  <span>Maintain silence near the sanctum</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-saffron mt-2 mr-2"></span>
                  <span>Photography may be restricted in certain areas</span>
                </li>
              </ul>
              <Link
                href="/about/visit/guidelines"
                className="text-primary-saffron hover:text-primary-green transition-colors font-medium inline-flex items-center mt-4"
              >
                View All Guidelines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-green">Special Services</h3>
              <p className="text-gray-700 mb-4">
                Our temples offer various special services including personal poojas, abhishekams, and spiritual
                counseling. These services can be arranged by contacting the temple office or booking online.
              </p>
              <Link
                href="/events/booking"
                className="text-primary-saffron hover:text-primary-green transition-colors font-medium inline-flex items-center"
              >
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-gold">Join Our Temple Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a part of our spiritual family and participate in temple activities, volunteer opportunities, and
            cultural celebrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/support"
              className="bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Support Our Temples
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-white/90 text-primary-green px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

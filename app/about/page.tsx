import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-green">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/hindu-temple-ornate-pattern.png" alt="Temple Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">About Wales Hanuman Temple</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to Lord Hanuman and serving the spiritual needs of the community in Wales with devotion and
            commitment.
          </p>
        </div>
      </section>

      {/* About Lord Hanuman Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative h-96 w-96 rounded-full overflow-hidden border-8 border-primary-gold/30">
                <Image src="/detailed-hanuman-statue.png" alt="Lord Hanuman" fill className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-green">About Lord Hanuman</h2>
              <p className="text-gray-700 mb-4">
                Lord Hanuman, the monkey god, is one of the most celebrated and worshipped figures in Hindu mythology.
                Known for his unwavering devotion to Lord Rama, incredible strength, and selfless service, Hanuman is
                the symbol of devotion, strength, and perseverance.
              </p>
              <p className="text-gray-700 mb-4">
                Born to Anjana and Kesari, Hanuman is also called Anjaneya (son of Anjana) and Kesari Nandan (son of
                Kesari). As a child, mistaking the sun for a ripe fruit, he leapt to catch it. Indra, the king of gods,
                struck him with a thunderbolt, injuring his chin and giving him the name 'Hanuman' (hanu means jaw or
                chin).
              </p>
              <p className="text-gray-700 mb-4">
                Hanuman's greatest feat was during the war between Lord Rama and Ravana. When Lakshmana was severely
                injured, Hanuman flew to the Himalayas to fetch the life-saving herb, Sanjeevani. Unable to identify the
                herb, he lifted the entire mountain and brought it back, saving Lakshmana's life.
              </p>
              <Link
                href="/about/hanuman"
                className="inline-flex items-center bg-primary-saffron text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-primary-saffron/90"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Swami Section */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-primary-green">About Our Swami</h2>
              <p className="text-gray-700 mb-4">
                Swami Hanumananda Ji has dedicated his life to spiritual practices and the teachings of Lord Hanuman.
                With over 30 years of experience in Vedic traditions, he brings profound wisdom and guidance to our
                temple community.
              </p>
              <p className="text-gray-700 mb-4">
                Born in a traditional Brahmin family in India, Swami Ji received his formal education in Sanskrit and
                Vedic scriptures from a young age. He later studied under renowned spiritual masters in Rishikesh and
                Haridwar, deepening his understanding of Hindu philosophy and practices.
              </p>
              <p className="text-gray-700 mb-4">
                Since establishing the Wales Hanuman Temple in 2005, Swami Ji has been instrumental in creating a
                vibrant spiritual community, organizing religious ceremonies, and providing spiritual counseling to
                devotees from all walks of life.
              </p>
              <Link
                href="/about/swami"
                className="inline-flex items-center bg-primary-saffron text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-primary-saffron/90"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-96 w-80 rounded-lg overflow-hidden shadow-xl">
                <Image src="/hindu-swami-orange-robes.png" alt="Swami Hanumananda Ji" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-primary-gold/30">
              <h3 className="text-2xl font-semibold mb-4 text-primary-green">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                The mission of Wales Hanuman Temple is to preserve and promote Hindu spiritual traditions, particularly
                the devotion to Lord Hanuman, while serving the community through spiritual guidance, education, and
                charitable activities.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Provide a sacred space for worship and spiritual practices</li>
                <li>Offer religious services and ceremonies according to Hindu traditions</li>
                <li>Educate the community about Hindu philosophy, values, and culture</li>
                <li>Support charitable initiatives and community service projects</li>
                <li>Foster a sense of community and belonging among devotees</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-primary-gold/30">
              <h3 className="text-2xl font-semibold mb-4 text-primary-green">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                We envision Wales Hanuman Temple as a vibrant spiritual center that serves as a beacon of Hindu
                traditions in Wales, promoting spiritual growth, cultural understanding, and community harmony.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Become a leading center for Hindu spiritual practices in Wales</li>
                <li>Expand our facilities to accommodate growing community needs</li>
                <li>Establish educational programs for children and adults</li>
                <li>Develop interfaith initiatives to promote cultural understanding</li>
                <li>Create sustainable community service programs to help those in need</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about/mission"
              className="inline-flex items-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

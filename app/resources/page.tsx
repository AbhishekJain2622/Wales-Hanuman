import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, BookOpen, FileText, Video } from "lucide-react"

export default function ResourcesPage() {
  // Sample data for articles
  const featuredArticles = [
    {
      id: 1,
      title: "The Significance of Hanuman in Hindu Mythology",
      excerpt:
        "Explore the importance of Lord Hanuman in Hindu mythology and his role as the perfect devotee of Lord Rama.",
      category: "Mythology",
      date: "March 15, 2025",
      image: "/article-hanuman-mythology.png",
    },
    {
      id: 2,
      title: "Understanding the Symbolism in Hanuman Chalisa",
      excerpt: "Delve into the deep spiritual meanings and symbolism contained within the verses of Hanuman Chalisa.",
      category: "Scriptures",
      date: "February 28, 2025",
      image: "/article-hanuman-chalisa.png",
    },
    {
      id: 3,
      title: "The Practice of Bhakti Yoga: Devotion as a Path to Liberation",
      excerpt: "Learn about Bhakti Yoga, the path of devotion, and how it can lead to spiritual growth and liberation.",
      category: "Spiritual Practices",
      date: "January 20, 2025",
      image: "/article-bhakti-yoga.png",
    },
  ]

  // Sample data for teachings
  const teachings = [
    {
      id: 1,
      title: "The Five Qualities of Lord Hanuman",
      author: "Swami Hanumananda Ji",
      type: "Video",
      duration: "45 minutes",
      image: "/teaching-hanuman-qualities.png",
    },
    {
      id: 2,
      title: "Sundarkand: A Spiritual Journey",
      author: "Swami Hanumananda Ji",
      type: "Audio",
      duration: "1 hour 20 minutes",
      image: "/teaching-sundarkand.png",
    },
    {
      id: 3,
      title: "Devotion in Daily Life",
      author: "Swami Hanumananda Ji",
      type: "Text",
      duration: "15 min read",
      image: "/teaching-devotion.png",
    },
  ]

  // Sample data for resource categories
  const resourceCategories = [
    { name: "Mythology", count: 12 },
    { name: "Scriptures", count: 8 },
    { name: "Spiritual Practices", count: 15 },
    { name: "Festivals", count: 10 },
    { name: "Rituals", count: 7 },
    { name: "Philosophy", count: 9 },
    { name: "Devotional Music", count: 6 },
    { name: "Temple History", count: 4 },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-green">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/hindu-temple-ornate-pattern.png" alt="Temple Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-gold">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of articles, teachings, and resources to deepen your spiritual knowledge and
            understanding.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, teachings, and resources..."
                className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-primary-gold/30 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary-saffron">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-green">{article.title}</h3>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/resources/articles/${article.id}`}
                    className="inline-flex items-center text-primary-saffron hover:text-primary-green transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resources/articles"
              className="inline-flex items-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Teachings Section */}
      <section className="py-16 bg-primary-gold/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Spiritual Teachings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teachings.map((teaching) => (
              <div
                key={teaching.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-primary-gold/30 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={teaching.image || "/placeholder.svg"}
                    alt={teaching.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    {teaching.type === "Video" && <Video className="h-12 w-12 text-white" />}
                    {teaching.type === "Audio" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 2.828a9 9 0 010-12.728"
                        />
                      </svg>
                    )}
                    {teaching.type === "Text" && <BookOpen className="h-12 w-12 text-white" />}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-primary-saffron">{teaching.type}</span>
                    <span className="text-sm text-gray-500">{teaching.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-green">{teaching.title}</h3>
                  <p className="text-gray-700 mb-4">By {teaching.author}</p>
                  <Link
                    href={`/resources/teachings/${teaching.id}`}
                    className="inline-flex items-center text-primary-saffron hover:text-primary-green transition-colors font-medium"
                  >
                    Access Teaching
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resources/teachings"
              className="inline-flex items-center border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Teachings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-green">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resourceCategories.map((category, index) => (
              <Link
                key={index}
                href={`/resources/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white p-6 rounded-lg shadow-md border border-primary-gold/30 hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary-green">{category.name}</h3>
                <p className="text-gray-700">{category.count} resources</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources Section */}
      <section className="py-16 bg-primary-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-gold">Download Resources</h2>
              <p className="text-xl mb-6">
                Access our collection of downloadable resources including prayer guides, mantras, and spiritual texts.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary-saffron" />
                  <span>Hanuman Chalisa with Translation (PDF)</span>
                </li>
                <li className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary-saffron" />
                  <span>Guide to Daily Prayers (PDF)</span>
                </li>
                <li className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary-saffron" />
                  <span>Temple Calendar 2025 (PDF)</span>
                </li>
                <li className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary-saffron" />
                  <span>Introduction to Hindu Rituals (PDF)</span>
                </li>
              </ul>
              <Link
                href="/resources/downloads"
                className="inline-flex items-center bg-primary-saffron hover:bg-primary-saffron/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View All Downloads
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative h-96 w-full max-w-md rounded-lg overflow-hidden">
                <Image src="/resources-illustration.png" alt="Resources" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

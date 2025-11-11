import ScrollToTop from '../_Components/ScrollToTop';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { getEvents, getCultureData, getWorkspaceImages } from '@/lib/getEventsData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Life @ Techmapperz | Company Culture & Events | Techmapperz",
  description: "Discover the vibrant culture at Techmapperz. Explore our team events, workplace environment, and what makes our company a great place to work.",
  keywords: ['company culture', 'team events', 'workplace', 'career', 'life at techmapperz'],
  openGraph: {
    title: "Life @ Techmapperz | Company Culture & Events",
    description: "Discover the vibrant culture at Techmapperz and what makes our company special.",
    type: 'website',
    siteName: 'Techmapperz',
  },
  alternates: {
    canonical: `${BASE_URL}/events`,
  },
};

export const revalidate = 600;

const Events = async () => {
  // Fetch dynamic data from API
  const events = await getEvents(undefined, 'completed');
  const cultureHighlights = await getCultureData();
  const workspaceImages = await getWorkspaceImages();

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-gradient-to-b from-[#181818] to-[#1a1a1a] min-h-screen">
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center overflow-hidden">
        <Image src="/lifeatTechmapperz/img_8.webp" alt="Life at Techmapperz background" fill priority className="object-cover" sizes="100vw" />
        <div className='absolute inset-0 w-full h-full bg-black/70'></div>
        <div className='relative z-10 text-center space-y-6'>
          <h1 className='text-6xl max-sm:text-4xl text-white font-bold tracking-tight'>
            Life @ Techmapperz
          </h1>
          <p className='text-xl max-sm:text-lg text-gray-200 mt-4 px-4 md:px-8 md:w-[70%] mx-auto leading-relaxed'>
            Discover our vibrant culture, exciting events, and what makes Techmapperz a great place to work
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/career">
              <button className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2 text-white">
                Join Our Team
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 px-4 md:px-16 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Our Culture</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At Techmapperz, we believe in creating an environment where innovation thrives, 
            people grow, and success is celebrated together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureHighlights.map((highlight) => (
            <div key={highlight._id || highlight.id} className="bg-black/20 backdrop-blur-sm p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-16 max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Recent Events</h2>
          <p className="text-gray-300 text-lg">
            Stay updated with our latest events, celebrations, and team activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .sort((a, b) => {
              // Sort featured events first, then by most recent date
              if (a.featured && !b.featured) return -1;
              if (!a.featured && b.featured) return 1;
              const da = new Date(a.date).getTime();
              const db = new Date(b.date).getTime();
              if (!isNaN(da) && !isNaN(db)) {
                return db - da; // newer first
              }
              return 0;
            })
            .map((event) => (
            <div key={event._id || event.id} className={`${
              event.featured 
                ? 'bg-gradient-to-br from-[#376bab]/20 to-[#d2292b]/20 border-2 border-yellow-400' 
                : 'bg-black/20 border border-gray-700/50'
            } backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group relative`}>
              
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    ⭐ Featured
                  </span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={450}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#376bab] to-[#d2292b] text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{formatDate(event.date)}</div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  event.featured 
                    ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#376bab] group-hover:to-[#d2292b] group-hover:bg-clip-text' 
                    : 'text-white group-hover:text-[#376bab]'
                }`}>
                  {event.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office Gallery Section */}
      <section className="py-16 px-4 md:px-16 bg-black/20">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-4">Our Workspace</h2>
            <p className="text-gray-300 text-lg">
              Take a glimpse into our modern, collaborative workspace designed for creativity and productivity.
            </p>
          </div>

          {/* Bento Box Style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[600px] md:h-[700px]">
            {workspaceImages.map((image) => {
              // Define grid classes based on image type
              const getGridClasses = (type) => {
                switch (type) {
                  case 'featured':
                    return 'col-span-2 row-span-2';
                  case 'tall':
                    return 'col-span-1 row-span-2';
                  case 'wide':
                    return 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1';
                  case 'wide2':
                    return 'col-span-2 row-span-1';
                  case 'square':
                  default:
                    return 'col-span-1 row-span-1';
                }
              };

              return (
                <div key={image._id || image.id} className={`${getGridClasses(image.type)} relative group overflow-hidden rounded-xl`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-all duration-500"
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-[#376bab] to-[#2d5689] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl max-sm:text-2xl font-bold text-white mb-6">
            Ready to Be Part of Our Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join our dynamic team and help us shape the future of technology while enjoying a vibrant work culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career">
              <button className="py-3 px-8 rounded-full bg-white text-[#376bab] font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 justify-center">
                View Open Positions
                <FaArrowRightLong />
              </button>
            </Link>
            <Link href="/contact">
              <button className="py-3 px-8 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#376bab] transition-all duration-300">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 
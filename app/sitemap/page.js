'use client';

import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';
import ScrollToTop from '../_Components/ScrollToTop';


const Sitemap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white scroll-smooth">
      <ScrollToTop />

      {/* Banner Section */}
      <div
        className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/Photos/banner_2.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-900/80" />
        <div className="relative z-10 text-center">
          <h1 className="font-bold text-6xl leading-none tracking-widest mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Sitemap
            </span>
          </h1>
          <p className="font-normal text-xl leading-relaxed tracking-widest">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-300">Sitemap</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 md:p-20 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Home Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Home</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#Our_Services" className="hover:text-blue-400 transition-colors">Our Services</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#some_of_our_works" className="hover:text-blue-400 transition-colors">Some Of Our Works</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#technology" className="hover:text-blue-400 transition-colors">Technology</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#Industry_Expertise" className="hover:text-blue-400 transition-colors">Industry Expertise</Link>
              </li>

              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#partners" className="hover:text-blue-400 transition-colors">Why Choose Us</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#blog" className="hover:text-blue-400 transition-colors">Blogs</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/#testimonials" className="hover:text-blue-400 transition-colors">Testimonial</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/about">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  About us</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Techmapperz</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#mission&Vision" className="hover:text-blue-400 transition-colors">Our Mission & Vision</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#Process" className="hover:text-blue-400 transition-colors">Our Process</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#how-we-work" className="hover:text-blue-400 transition-colors">How Do We Work</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#Agile_Methodology" className="hover:text-blue-400 transition-colors">Agile Methodology</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#Office_Life" className="hover:text-blue-400 transition-colors">Life @ Techmapperz</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/about#values" className="hover:text-blue-400 transition-colors">Company Values</Link>
              </li>
            </ul>
          </div>

          {/* GIS Services Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/service">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  Geospatial Services</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/gis/gisservice" className="hover:text-blue-400 transition-colors">GIS Services</Link>
              </li>
              <li className="pl-4">
                <ul className="space-y-2 border-l-2 border-blue-500/50 pl-4">
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/gisservice/gismapping" className="hover:text-blue-400 transition-colors">GIS Mapping</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/gisservice/datadigitization" className="hover:text-blue-400 transition-colors">Data Digitization</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/gisservice/gisconsulting" className="hover:text-blue-400 transition-colors">GIS Consulting</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/gisservice/webgisdevelopment" className="hover:text-blue-400 transition-colors">Web GIS Development</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/gisservice/gissurveying" className="hover:text-blue-400 transition-colors">GIS Surveying</Link>
                  </li>

                </ul>
              </li>
              {/* <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/gis/webgis" className="hover:text-blue-400 transition-colors">Web GIS Services</Link>
              </li> */}
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/gis/droneservice" className="hover:text-blue-400 transition-colors">Drone Services</Link>
              </li>
              <li className="pl-4">
                <ul className="space-y-2 border-l-2 border-blue-500/50 pl-4">
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/droneservice/dronesurveyandmapping" className="hover:text-blue-400 transition-colors">Drone Survey and Mapping</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/droneservice/inspectionandanalysis" className="hover:text-blue-400 transition-colors">Inspection and Analysis</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/service/gis/droneservice/dronedataprocessing" className="hover:text-blue-400 transition-colors">Drone Data Processing</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/gis/photogrammetry" className="hover:text-blue-400 transition-colors">Photogrammetry Services</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/gis/remotesensing" className="hover:text-blue-400 transition-colors">Remote Sensing</Link>
              </li> */}
            </ul>
          </div>

          {/* IT Services Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/service">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  IT Services</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/it/mobiledevelopment" className="hover:text-blue-400 transition-colors">Mobile App Development</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/it/webdevelopment" className="hover:text-blue-400 transition-colors">Website Development</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/it/crmservice" className="hover:text-blue-400 transition-colors">CRM Software solution</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/service/it/itconsultingservice" className="hover:text-blue-400 transition-colors">IT Consultancy</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/blog">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  Resources</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/blog" className="hover:text-blue-400 transition-colors">Blogs</Link>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/portfolios" className="hover:text-blue-400 transition-colors">Portfolio</Link>
              </li>
            </ul>
          </div>

          {/* Industry Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/industry">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Industries</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-500/50 space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/e-commerce" className="text-gray-300 hover:text-blue-400 transition-colors">E-Commerce</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/education-e-learning" className="text-gray-300 hover:text-blue-400 transition-colors">Education & E-Learning</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/government-public-sector" className="text-gray-300 hover:text-blue-400 transition-colors">Government & Public Sector</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/healthcare" className="text-gray-300 hover:text-blue-400 transition-colors">Healthcare</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="industry/logistics-supply-chain" className="text-gray-300 hover:text-blue-400 transition-colors">Logistics & Supply Chain</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/manufacturing" className="text-gray-300 hover:text-blue-400 transition-colors">Manufacturing</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/retail" className="text-gray-300 hover:text-blue-400 transition-colors">Retail</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/industry/travel-hospitality" className="text-gray-300 hover:text-blue-400 transition-colors">Travel & Hospitality</Link>
              </li>
            </ul>
          </div>

          {/* Portfolio Section */}
          {/* <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/portfolios">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  Portfolio</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/portfolios/it" className="hover:text-blue-400 transition-colors">IT Case Studies</Link>
              </li>
              <li className="pl-4">
                <ul className="space-y-2 border-l-2 border-blue-500/50 pl-4">
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/crm" className="hover:text-blue-400 transition-colors">CRM Solutions</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/cocreatelabs" className="hover:text-blue-400 transition-colors">Co-Create Labs</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/fabcon" className="hover:text-blue-400 transition-colors">Fabcon</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/manusherghorbari" className="hover:text-blue-400 transition-colors">Manusher Ghorbari</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/premierautosource" className="hover:text-blue-400 transition-colors">Premier Auto Source</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/shrc" className="hover:text-blue-400 transition-colors">SHRC</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/welho" className="hover:text-blue-400 transition-colors">Welho</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/whitespreadfoods" className="hover:text-blue-400 transition-colors">Whitespread Foods</Link>
                  </li>
                </ul>
              </li>
              <li className="hover:translate-x-2 transition-transform">
                <Link href="/portfolios/gis" className="hover:text-blue-400 transition-colors">GIS Case Studies</Link>
              </li>
              <li className="pl-4">
                <ul className="space-y-2 border-l-2 border-blue-500/50 pl-4">
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/city_mapping" className="hover:text-blue-400 transition-colors">City Mapping</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/industrial_mapping" className="hover:text-blue-400 transition-colors">Industrial Mapping</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/landcover_mapping" className="hover:text-blue-400 transition-colors">Landcover Mapping</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform">
                    <Link href="/portfolios/site_mapping" className="hover:text-blue-400 transition-colors">Site Mapping</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}

          {/* Career Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/career">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Career</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-500/50 space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/career" className="text-gray-300 hover:text-blue-400 transition-colors">Current Openings</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/career#culture" className="text-gray-300 hover:text-blue-400 transition-colors">Our Culture</Link>
              </li>
            </ul>
          </div>

          {/* Blog Section */}
          {/* <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/blog">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Blog</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-500/50 space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">All Articles</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/blog?page=1" className="text-gray-300 hover:text-blue-400 transition-colors">Latest Posts</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/blog#search" className="text-gray-300 hover:text-blue-400 transition-colors">Search Articles</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/blog#recent" className="text-gray-300 hover:text-blue-400 transition-colors">Recent Posts</Link>
              </li>
            </ul>
          </div> */}

          {/* Help & Support Section */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/help">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Help & Support</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-500/50 space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help#getting-started" className="text-gray-300 hover:text-blue-400 transition-colors">Getting Started</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help#faqs" className="text-gray-300 hover:text-blue-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help#technical-support" className="text-gray-300 hover:text-blue-400 transition-colors">Technical Support</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help#privacy-security" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy and Security</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Information</Link>
              </li>
            </ul>
          </div>

          {/* Other Important Links */}
          <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/contact">
              <div className="flex items-center space-x-4">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft className="text-white" />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  <span className="text-white">Important Links</span>
                </h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-500/50 space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help</Link>
              </li>
            </ul>
          </div>

          {/* Technology Section */}
          {/* <div className="group space-y-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
            <Link href="/technology">
              <div className="flex items-center space-x-4 group">
                <div className="text-2xl bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <AiOutlineLeft />
                </div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg group-hover:scale-105 transition-transform">
                  Technologies</h2>
              </div>
            </Link>
            <ul className="pl-4 border-l-4 border-blue-600 space-y-3">
              <li className="font-semibold">Frontend</li>
              <li className="pl-4">
                <ul className="space-y-2">
                  <li><Link href="/technology/react">React</Link></li>
                  <li><Link href="/technology/nextjs">Next.js</Link></li>
                  <li><Link href="/technology/angular">Angular</Link></li>
                  <li><Link href="/technology/vuejs">Vue.js</Link></li>
                  <li><Link href="/technology/html5">HTML5</Link></li>
                  <li><Link href="/technology/css3">CSS3</Link></li>
                  <li><Link href="/technology/tailwindcss">TailwindCSS</Link></li>
                </ul>
              </li>
              <li className="font-semibold">Backend</li>
              <li className="pl-4">
                <ul className="space-y-2">
                  <li><Link href="/technology/nodejs">Node.js</Link></li>
                  <li><Link href="/technology/python">Python</Link></li>
                  <li><Link href="/technology/java">Java</Link></li>
                  <li><Link href="/technology/php">PHP</Link></li>
                  <li><Link href="/technology/dotnet">.NET</Link></li>
                </ul>
              </li>
              <li className="font-semibold">Databases</li>
              <li className="pl-4">
                <ul className="space-y-2">
                  <li><Link href="/technology/mongodb">MongoDB</Link></li>
                  <li><Link href="/technology/postgresql">PostgreSQL</Link></li>
                  <li><Link href="/technology/mysql">MySQL</Link></li>
                  <li><Link href="/technology/elasticsearch">Elasticsearch</Link></li>
                </ul>
              </li>
              <li className="font-semibold">DevOps & Cloud</li>
              <li className="pl-4">
                <ul className="space-y-2">
                  <li><Link href="/technology/docker">Docker</Link></li>
                  <li><Link href="/technology/kubernetes">Kubernetes</Link></li>
                  <li><Link href="/technology/aws">AWS</Link></li>
                  <li><Link href="/technology/git">Git</Link></li>
                </ul>
              </li>
            </ul>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Sitemap;



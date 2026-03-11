import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function News() {
  const news = [
    {
      title: 'Peace and Nation Building Initiative',
      date: 'March 24, 2020',
      category: 'Peace',
      image: 'https://picsum.photos/seed/peace/800/600',
    },
    {
      title: 'Washington DC Advocacy Visit',
      date: 'June 2018',
      category: 'Advocacy',
      image: 'https://picsum.photos/seed/advocacy/800/600',
    },
    {
      title: 'Communities Richer in Diversity',
      date: 'March 24, 2020',
      category: 'Interfaith',
      image: 'https://picsum.photos/seed/diversity/800/600',
    },
    {
      title: 'Africa Regional Forum',
      date: 'September 21, 2020',
      category: 'Events',
      image: 'https://picsum.photos/seed/forum/800/600',
    },
    {
      title: 'Youth Leadership Training',
      date: 'November 15, 2021',
      category: 'Youth',
      image: 'https://picsum.photos/seed/youth/800/600',
    },
    {
      title: 'Climate Action Summit',
      date: 'August 10, 2022',
      category: 'Environment',
      image: 'https://picsum.photos/seed/climate/800/600',
    },
  ];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section id="news" className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Communications</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              News & Updates
            </p>
            <p className="mt-4 text-xl text-slate-500">
              Take a look at our blog posts and see our activity around the Continent as well as globally.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View all news <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-8 touch-pan-y py-4">
              {news.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] pl-4 sm:pl-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        {item.date}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 flex-grow">
                        {item.title}
                      </h3>
                      <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                        Read article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View all news <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* About Resources Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-900 rounded-3xl overflow-hidden shadow-xl relative"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/library/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative px-8 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for official documents?</h3>
              <p className="text-blue-200 text-lg">
                Explore our comprehensive collection of toolkits, prayer cycles, and strategic plans in the Resources section.
              </p>
            </div>
            <a 
              href="#resources" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-lg"
            >
              About Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

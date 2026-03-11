import React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    name: 'The Karibu Foundation',
    description: 'RESISTING AND REBUILDING',
    logo: 'https://logo.clearbit.com/karibu.no',
    link: 'https://www.karibu.no/',
  },
  {
    name: 'African Council of Religious Leaders',
    description: 'ACRL-RfP | Religions for Peace',
    logo: 'https://logo.clearbit.com/acrl-rfp.org',
    link: 'https://acrl-rfp.org/',
  },
  {
    name: 'Faith to Action Network',
    description: 'Promoting family health and well-being',
    logo: 'https://logo.clearbit.com/faithtoactionetwork.org',
    link: 'https://www.faithtoactionetwork.org/',
  },
  {
    name: 'All Africa Conference of Churches',
    description: 'AACC',
    logo: 'https://logo.clearbit.com/aacc-ceta.org',
    link: 'https://aacc-ceta.org/',
  },
  {
    name: 'The Episcopal Church',
    description: 'Global Anglican Communion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Episcopal_Church_shield.svg/512px-Episcopal_Church_shield.svg.png',
    link: 'https://www.episcopalchurch.org/',
  },
  {
    name: 'The St. Augustine Foundation',
    description: 'Supporting theological education',
    logo: 'https://logo.clearbit.com/staugustinesfoundation.org',
    link: 'https://staugustinesfoundation.org/',
  },
  {
    name: 'The Anglican Church of Canada',
    description: 'Partner in mission',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Anglican_Church_of_Canada_logo.svg/512px-Anglican_Church_of_Canada_logo.svg.png',
    link: 'https://www.anglican.ca/',
  },
  {
    name: 'The Scottish Episcopal Church',
    description: 'Evangelical Truth and Apostolic Order',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Scottish_Episcopal_Church_logo.svg/512px-Scottish_Episcopal_Church_logo.svg.png',
    link: 'https://www.scotland.anglican.org/',
  }
];

export default function Partners() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  return (
    <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Our Network</h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Partners
          </p>
          <p className="mt-4 text-xl text-slate-600">
            We are very grateful and feel honored to all our partners for being with us.
          </p>
        </div>

        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y py-4">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] pl-4"
                >
                  <motion.a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block h-full bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-xl transition-all duration-300 group relative flex flex-col items-center"
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-blue-500" />
                    </div>
                    
                    <div className="w-28 h-28 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 overflow-hidden border border-slate-100 p-3">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="w-full h-full object-contain mix-blend-multiply"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=f8fafc&color=2563eb&size=128&font-size=0.33`;
                          e.currentTarget.classList.remove('mix-blend-multiply');
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">{partner.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{partner.description}</p>
                  </motion.a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, TrendingUp, Users, Leaf, Navigation, X } from 'lucide-react';

export default function FocusAreas() {
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null);

  const areas = [
    {
      title: 'Peace and Nation Building',
      description: 'Fostering reconciliation, conflict resolution, and active participation in national development across the continent.',
      details: 'Our Peace and Nation Building initiative focuses on equipping local church leaders with mediation and conflict resolution skills. We facilitate community dialogues, support post-conflict reconciliation efforts, and advocate for policies that promote social cohesion and democratic participation across African nations.',
      icon: Shield,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Economic Empowerment',
      description: 'Promoting sustainable livelihoods, entrepreneurship, and economic resilience within communities.',
      details: 'We believe in empowering communities to achieve economic independence. This program provides micro-finance opportunities, vocational training for youth and women, and supports agricultural cooperatives. By fostering entrepreneurship, we aim to build resilient local economies that can withstand global challenges.',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Church Life & Interfaith Relations',
      description: 'Strengthening Anglican identity while building bridges of understanding with other faiths.',
      details: 'This focus area nurtures the spiritual growth of our congregations while actively engaging in interfaith dialogue. We organize joint community service projects with other religious groups, host theological exchanges, and work together to address common social issues, promoting a culture of peace and mutual respect.',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Environmental Stewardship',
      description: 'Advocating for creation care, climate justice, and food security in vulnerable regions.',
      details: 'Recognizing the urgent threat of climate change, we mobilize our network for environmental conservation. Initiatives include tree planting campaigns, promoting sustainable farming practices, and advocating for climate justice at regional and international forums to protect vulnerable communities from ecological degradation.',
      icon: Leaf,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Safe Migration & Human Trafficking',
      description: 'Addressing emerging issues, protecting the vulnerable, and advocating for safe movement.',
      details: 'We are committed to protecting the rights and dignity of migrants and refugees. Our work involves raising awareness about the dangers of human trafficking, providing safe havens and legal support for victims, and advocating for humane migration policies that respect the fundamental human rights of all people on the move.',
      icon: Navigation,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
  ];

  return (
    <section id="work" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Our Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Thematic Focus Areas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We are dedicated to building the capacity of the Anglican Churches in Africa to understand better the issues of mission and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col"
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-xl ${area.bg} mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                <area.icon className={`h-8 w-8 ${area.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{area.description}</p>
              <button 
                onClick={() => setSelectedArea(area)}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 self-start mt-auto"
              >
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
            onClick={() => setSelectedArea(null)}
          >
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 border-b border-slate-100 flex items-start justify-between flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${selectedArea.bg} ${selectedArea.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <selectedArea.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] sm:text-xs font-bold ${selectedArea.color} uppercase tracking-wider`}>Focus Area</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 line-clamp-2">{selectedArea.title}</h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArea(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6 bg-slate-50/50 overflow-y-auto flex-1">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Overview</h4>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  {selectedArea.description}
                </p>
                
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Our Approach</h4>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {selectedArea.details}
                </p>
              </div>
              
              <div className="px-4 sm:px-6 py-4 border-t border-slate-100 bg-white flex justify-end flex-shrink-0">
                <button 
                  onClick={() => setSelectedArea(null)}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 outline-none"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

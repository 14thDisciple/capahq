import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, TrendingUp, Users, Leaf, Navigation, X } from 'lucide-react';

export default function FocusAreas() {
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null);

  const areas = [
    {
      title: 'Peace and Nation Building',
      description: 'Fostering reconciliation, conflict resolution, and active participation in national development across the continent.',
      fullDescription: 'Our Peace and Nation Building initiative focuses on healing communities torn apart by conflict. We train local leaders in mediation, support grassroots reconciliation efforts, and advocate for policies that promote social cohesion and justice. By empowering individuals to become peacemakers, we aim to build resilient societies where every citizen can thrive in safety and harmony.',
      icon: Shield,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Economic Empowerment',
      description: 'Promoting sustainable livelihoods, entrepreneurship, and economic resilience within communities.',
      fullDescription: 'Economic Empowerment is central to our mission of lifting communities out of poverty. We provide micro-grants, vocational training, and mentorship to aspiring entrepreneurs, with a special focus on women and youth. Our programs are designed to create sustainable income streams, improve financial literacy, and foster economic independence, enabling families to build a better future.',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Church Life & Interfaith Relations',
      description: 'Strengthening Anglican identity while building bridges of understanding with other faiths.',
      fullDescription: 'We believe that faith should be a unifying force, not a source of division. Our Church Life & Interfaith Relations program works to deepen the spiritual life of our congregations while actively engaging in dialogue and collaborative projects with other religious communities. Through shared initiatives, we promote mutual respect, combat religious extremism, and work together for the common good.',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Environmental Stewardship',
      description: 'Advocating for creation care, climate justice, and food security in vulnerable regions.',
      fullDescription: 'Recognizing the urgent threat of climate change, our Environmental Stewardship program advocates for sustainable practices and policies. We work with communities to implement climate-smart agriculture, promote reforestation, and improve access to clean water. By educating and mobilizing local populations, we strive to protect our natural resources and ensure food security for future generations.',
      icon: Leaf,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Safe Migration & Human Trafficking',
      description: 'Addressing emerging issues, protecting the vulnerable, and advocating for safe movement.',
      fullDescription: 'The crisis of unsafe migration and human trafficking requires a coordinated and compassionate response. We provide support and sanctuary for victims, raise awareness about the dangers of irregular migration, and advocate for the rights of migrants and refugees. Our goal is to address the root causes of forced displacement and ensure that all people can move safely and with dignity.',
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

      {/* Focus Area Details Modal */}
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
              className="relative w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 border-b border-slate-100 flex items-start justify-between flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${selectedArea.bg} ${selectedArea.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <selectedArea.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{selectedArea.title}</h3>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArea(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 sm:p-6 sm:p-8 overflow-y-auto flex-1 min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {selectedArea.fullDescription}
                </p>
              </div>
              
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-slate-100 bg-slate-50 flex justify-end flex-shrink-0">
                <button 
                  onClick={() => setSelectedArea(null)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
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

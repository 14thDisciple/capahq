import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://picsum.photos/seed/africa-community/1920/1080?blur=2",
    badge: "Instrument of Anglican Communion in Africa",
    title: "To celebrate life and address challenges through the Anglican Church in Africa.",
    description: "We provide holistic ministry to fulfill God's promise of abundant life, drawing all people into fellowship with complementary gifts, experiences, and skills."
  },
  {
    image: "https://picsum.photos/seed/church-worship/1920/1080?blur=2",
    badge: "Faith & Fellowship",
    title: "Building Stronger Communities Through Faith and Action.",
    description: "Empowering local parishes to serve their communities, fostering peace, and promoting sustainable development across the continent."
  },
  {
    image: "https://picsum.photos/seed/african-youth/1920/1080?blur=2",
    badge: "Youth & Future",
    title: "Equipping the Next Generation of Leaders.",
    description: "Investing in education, leadership training, and spiritual growth to ensure a vibrant future for the church and society."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-slate-900 h-[650px] sm:h-[700px] lg:h-[800px] flex items-center pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-500/30 mb-6">
                {slides[currentSlide].badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
                >
                  Our Work
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

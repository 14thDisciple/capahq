import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Members', href: '#members' },
    { 
      name: 'Resources', 
      href: '#resources',
      dropdown: [
        { name: 'Anglican Communion', url: 'https://www.anglicancommunion.org/' },
        { name: 'Anglican Alliance', url: 'https://anglicanalliance.org/' },
        { name: 'All Africa Conference of Churches', url: 'https://aacc-ceta.org/' },
        { name: 'World Council of Churches', url: 'https://www.oikoumene.org/' },
        { name: 'Compass Rose Society', url: 'https://www.compassrosesociety.org/' },
        { name: 'Lambeth Conference', url: 'https://www.lambethconference.org/' }
      ]
    },
    { name: 'Communications', href: '#news' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-blue-700 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-slate-900">CAPA</span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider hidden sm:block">Council of Anglican Provinces of Africa</span>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1 py-2 whitespace-nowrap"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </a>
                
                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-slate-50 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">External Partners</span>
                      </div>
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        >
                          <span className="truncate pr-2">{item.name}</span>
                          <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-50" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a
              href="#donate"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap"
            >
              Donate
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 flex-1"
                      onClick={() => !link.dropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 text-slate-500 hover:text-blue-700 hover:bg-slate-50 rounded-md"
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mx-2 mt-1"
                      >
                        <div className="py-2">
                          <div className="px-4 py-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">External Partners</span>
                          </div>
                          {link.dropdown.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between pl-4 pr-3 py-2.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-100 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="truncate pr-2">{item.name}</span>
                              <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 opacity-50" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a
                href="#donate"
                className="block w-full text-center mt-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

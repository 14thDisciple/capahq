import React, { useState } from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              {!logoError ? (
                <img 
                  src="/capa-logo.png" 
                  alt="CAPA Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Globe className="h-8 w-8 text-blue-400 flex-shrink-0" />
              )}
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">CAPA</span>
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider hidden sm:block">Council of Anglican Provinces of Africa</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              An Instrument of Anglican Communion in Africa, dedicated to celebrating life and addressing challenges through holistic ministry.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-sm">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Our Work</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Peace & Nation Building</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Economic Empowerment</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Church Life & Interfaith</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Environmental Stewardship</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Safe Migration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Member Provinces</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Resources</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                <span className="text-sm">+254 (0) 20 272 2222</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 shrink-0" />
                <a href="mailto:info@capa-hq.org" className="text-sm hover:text-white transition-colors">info@capa-hq.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Council of Anglican Provinces of Africa. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

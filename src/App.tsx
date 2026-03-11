import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Members from './components/Members';
import Resources from './components/Resources';
import News from './components/News';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Members />
        <Resources />
        <News />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-700">
      <Toaster position="top-center" expand={true} richColors />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
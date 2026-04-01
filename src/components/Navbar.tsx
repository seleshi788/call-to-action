import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const TelegramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={cn("lucide lucide-send", className)}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const SOLA_LOGO = "https://storage.googleapis.com/dala-prod-public-storage/attachments/94a868f7-0e35-49fd-80e7-5564b010995a/1775026081824_SOLA.jpg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const telegramUrl = "https://t.me/selatg";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-lg border-none group-hover:scale-110 transition-transform duration-500 ring-2 ring-blue-50 group-hover:ring-blue-200">
            <img 
              src={SOLA_LOGO} 
              alt="Sola Graphics Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-extrabold text-blue-600 tracking-tighter transition-colors group-hover:text-blue-700">SOLA GRAPHICS</span>
            <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wider group-hover:text-gray-900 transition-colors">ሰላ ግራፊክስ</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="text-gray-700 hover:text-blue-600 font-bold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 pl-4 border-l border-gray-200"
          >
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all hover:scale-110 active:scale-95"
              title="Telegram"
            >
              <TelegramIcon size={24} />
            </a>
            <a
              href="tel:0912331412"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-100"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-all active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-white border border-gray-100 mt-4 overflow-hidden shadow-2xl rounded-3xl mx-2"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-bold py-4 px-5 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 text-blue-600 px-5 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:bg-blue-100 active:scale-95 transition-all"
                >
                  <TelegramIcon size={22} />
                  Telegram
                </a>
                <a
                  href="tel:0912331412"
                  className="bg-blue-600 text-white px-5 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100"
                >
                  <Phone size={22} />
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
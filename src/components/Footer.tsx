import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUp } from 'lucide-react';

const TelegramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Footer = () => {
  const telegramUrl = "https://t.me/selatg";

  return (
    <footer className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="text-3xl font-black text-blue-600 tracking-tighter">SOLA GRAPHICS</div>
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <div className="p-2 bg-blue-50 rounded-lg">
                <MapPin size={16} className="text-blue-600" />
              </div>
              <span>Dejen, Ethiopia</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-8 items-center">
              {[
                { name: 'Telegram', icon: TelegramIcon, href: telegramUrl },
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' }
              ].map((link, idx) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 font-bold group"
                >
                  {link.icon && <link.icon size={20} className="group-hover:scale-110 transition-transform" />}
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Sola Graphics & Design. All rights reserved.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-400 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-200 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
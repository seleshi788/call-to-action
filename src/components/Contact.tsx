import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Copy } from 'lucide-react';
import { toast } from 'sonner';
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
    className={className}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Contact = () => {
  const phoneNumber = "0912331412";
  const emailAddress = "seleshitesfa9@gmail.com";
  const locationText = "Dejen, Ethiopia";
  const telegramHandle = "@selatg";
  const telegramUrl = "https://t.me/selatg";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Your message has been sent.');
    (e.target as HTMLFormElement).reset();
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-blue-500/10"
        >
          {/* Decorative Background */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl" 
          />

          <div className="relative z-10 grid lg:grid-cols-2">
            {/* Left Side: Info */}
            <div className="p-12 lg:p-20 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Let's Get in <br />Touch Today</h2>
                <p className="text-blue-100 text-xl mb-12 leading-relaxed font-medium">
                  Have a project in mind or just want to say hello? I'm always open to discussing new ideas and opportunities.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  { icon: Phone, label: "Phone Number", value: phoneNumber, action: () => copyToClipboard(phoneNumber, "Phone number"), href: `tel:${phoneNumber}` },
                  { icon: TelegramIcon, label: "Telegram", value: telegramHandle, action: () => copyToClipboard(telegramUrl, "Telegram link"), href: telegramUrl },
                  { icon: Mail, label: "Email Address", value: emailAddress, action: () => copyToClipboard(emailAddress, "Email address"), href: `mailto:${emailAddress}` },
                  { icon: MapPin, label: "Location", value: locationText, action: () => copyToClipboard(locationText, "Location") }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <a
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 shadow-lg"
                    >
                      <item.icon size={28} />
                    </a>
                    <div className="flex-1">
                      <p className="text-blue-200 text-sm font-black uppercase tracking-widest mb-1">{item.label}</p>
                      <div className="flex items-center gap-3">
                        <p className="text-2xl font-bold group-hover:text-blue-50 transition-colors">{item.value}</p>
                        <button 
                          onClick={item.action}
                          className="p-2.5 hover:bg-white/10 rounded-xl transition-all active:scale-90 focus:outline-none focus:ring-2 focus:ring-white/20"
                          title={`Copy ${item.label}`}
                        >
                          <Copy size={18} className="text-blue-200" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-12 lg:p-20"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {['Full Name', 'Email Address'].map((label, idx) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">{label}</label>
                    <input
                      type={label.includes('Email') ? 'email' : 'text'}
                      required
                      className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all duration-300 placeholder:text-gray-400 font-medium"
                      placeholder={label === 'Full Name' ? 'John Doe' : 'john@example.com'}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all duration-300 resize-none placeholder:text-gray-400 font-medium"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-blue-200 tracking-widest uppercase text-sm"
                >
                  <Send size={22} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const SOLA_PHOTO = "https://storage.googleapis.com/dala-prod-public-storage/attachments/94a868f7-0e35-49fd-80e7-5564b010995a/1775026081824_SOLA.jpg";

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Done', value: '1.2k+' },
    { label: 'Happy Clients', value: '500+' },
    { label: 'Creative Experts', value: '15+' },
  ];

  const highlights = [
    'Advanced Printing Technology',
    'Custom Creative Design Solutions',
    'Fast Turnaround Time',
    'Exceptional Customer Service',
    'High-Quality Materials Only'
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-blue-50 border-8 border-white"
            >
              <img 
                src={SOLA_PHOTO} 
                alt="Sola Graphics Studio" 
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-10 -right-6 w-72 bg-blue-600 p-8 rounded-[2rem] shadow-2xl hidden sm:block border-4 border-white"
            >
              <p className="text-white text-xl font-medium italic mb-3">"Quality is not an act, it is a habit."</p>\
              <div className="h-1.5 w-16 bg-white/30 mb-5"></div>
              <p className="text-white font-black uppercase tracking-[0.2em] text-xs">Sola Graphics Team</p>
            </motion.div>
            {/* Background elements to emphasize "full margin" feel */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-50 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Excellence in Design and <br className="hidden md:block" /> Printing Since 2014
              </h2>
            </div>
            
            <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium">
              At Sola Graphics and Design, we believe that great design has the power to transform businesses. We combine technical expertise with creative passion to deliver results that exceed expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-blue-600/10 p-2 rounded-xl group-hover:bg-blue-600 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-800 font-bold text-lg group-hover:text-blue-600 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <p className="text-4xl font-black text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest leading-none">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
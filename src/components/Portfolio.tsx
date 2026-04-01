import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  { id: 1, category: 'Branding', title: 'Coffee Shop Identity', image: 'https://images.unsplash.com/photo-1521133306232-d01ba9673954?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, category: 'Printing', title: 'Corporate Brochure', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, category: 'Design', title: 'Mobile App UI/UX', image: 'https://images.unsplash.com/photo-1581291518066-8e268f5751d8?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, category: 'Branding', title: 'Luxury Hotel Logo', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, category: 'Printing', title: 'Event Roll-up Banner', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, category: 'Design', title: 'Product Label Design', image: 'https://images.unsplash.com/photo-1583241475880-083f82856001?q=80&w=1961&auto=format&fit=crop' },
];

const categories = ['All', 'Branding', 'Printing', 'Design'];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Creative Portfolio</h2>
            <p className="text-slate-600 max-w-xl text-lg leading-relaxed">
              Explore our latest works and see how we help brands communicate their value through design excellence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer bg-white"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex flex-col"
                  >
                    <p className="text-blue-400 text-sm font-black uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-white text-3xl font-bold mb-4">{project.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 font-semibold group/btn">
                      <span>View Details</span>
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group px-12 py-5 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 rounded-2xl font-bold transition-all flex items-center gap-3 mx-auto active:scale-95 shadow-lg shadow-transparent hover:shadow-blue-50">
            Load More Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
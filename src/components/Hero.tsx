import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const SOLA_PHOTO = "https://storage.googleapis.com/dala-prod-public-storage/attachments/94a868f7-0e35-49fd-80e7-5564b010995a/1775026081824_SOLA.jpg";

export const Hero = () => {
  const phoneNumber = "0912331412";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success('Phone number copied to clipboard!');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a4e2cfbb-f955-4f57-8cb3-ac3bca3b5f33/hero-bg-d90c8f73-1774976144663.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Available for New Projects
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
          >
            SOLA GRAPHICS <br />
            <span className="text-blue-600">ሰላ ግራፊክስ</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-10 max-w-lg">
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
              Quality Design and Products
            </p>
            <p className="text-xl text-blue-600 font-medium">
              ጥራት ያላቸው ዲዛይኖች እና ምርቶች
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-100 group"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              {phoneNumber}
            </a>
            <button
              onClick={handleCopy}
              className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/30 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare size={24} />
              Copy Contact
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl bg-blue-50 border-4 border-white"
          >
            <img
              src={SOLA_PHOTO}
              alt="SOLA GRAPHICS Profile"
              className="w-full aspect-[4/5] md:aspect-square object-cover"
            />
          </motion.div>

          {/* Decorative shapes with animations */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full -z-10" 
          />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 w-56 h-56 bg-blue-50 rounded-full -z-10" 
          />
          
          {/* Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="absolute -bottom-6 right-6 bg-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-blue-50"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              10+
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 leading-none">Years of</p>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Flag, CreditCard, Image as ImageIcon, FileText, Printer, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'ብሮሹሮች (Brochures)',
    description: 'ጥራት ያላቸው እና ምርትዎን ወይም አገልግሎትዎን በሚገባ የሚያስተዋውቁ፣ ማራኪ ዲዛይን ያላቸው ብሮሹሮችን እናዘጋጃለን።',
    icon: BookOpen,
    color: 'bg-blue-600',
  },
  {
    title: 'ባነሮች (Banners)',
    description: 'ለተለያዩ ዝግጅቶች፣ ለንግድ ማስታወቂያዎች እና ለቤት ውጭ አገልግሎት የሚውሉ ትላልቅ እና ጥራት ያላቸው ባነሮች።',
    icon: Flag,
    color: 'bg-indigo-600',
  },
  {
    title: 'ቪዚቲንግ ካርዶች (Visiting Cards)',
    description: 'የእርስዎን እና የድርጅትዎን ማንነት የሚገልጹ፣ ዘመናዊ እና ውብ የሆኑ የንግድ (ቪዚቲንግ) ካርዶች።',
    icon: CreditCard,
    color: 'bg-cyan-600',
  },
  {
    title: 'ፖስተሮች (Posters)',
    description: 'ለቤት ውስጥ ማስጌጫ፣ ለቢሮ ወይም ለተለያዩ ማስታወቂያዎች የሚሆኑ ከፍተኛ ጥራት ያላቸው ፖስተሮች።',
    icon: ImageIcon,
    color: 'bg-sky-600',
  },
  {
    title: 'በራሪ ወረቀቶች (Flyers)',
    description: 'መረጃዎችን ለብዙኃኑ በተሳለጠ መንገድ ለማድረስ የሚረዱ ቀለል ያሉ እና ማራኪ በራሪ ወረቀቶች።',
    icon: FileText,
    color: 'bg-blue-500',
  },
  {
    title: 'መጻሕፍት እና መጽሔቶች',
    description: 'የመጻሕፍት፣ የመጽሔቶች እና የጋዜጦች የውስጥ ገጽ ዲዛይን እንዲሁም የሽፋን ሕትመት ሥራዎች።',
    icon: Printer,
    color: 'bg-indigo-500',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            የምንሰጣቸው አገልግሎቶች
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            ሶላ ግራፊክስ እና ዲዛይን ጥራታቸውን የጠበቁ የተለያዩ የሕትመት እና የዲዛይን አገልግሎቶችን በተመጣጣኝ ዋጋ ያቀርባል።
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-0" />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100`}
                >
                  <service.icon size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span>ተጨማሪ መረጃ</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
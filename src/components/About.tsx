import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaClock, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: <FaCheckCircle className="text-3xl text-gold" />,
    title: "Accuracy & Detail",
    description: "Meticulous attention to every entry ensures zero errors in your tax filings."
  },
  {
    icon: <FaShieldAlt className="text-3xl text-gold" />,
    title: "Confidential Handling",
    description: "Your financial data is treated with the highest level of security and privacy."
  },
  {
    icon: <FaClock className="text-3xl text-gold" />,
    title: "Fast Turnaround",
    description: "We respect your time. Efficient processing to meet all SARS deadlines."
  },
  {
    icon: <FaUserTie className="text-3xl text-gold" />,
    title: "Professional Delivery",
    description: "Expert advice delivered with corporate excellence and integrity."
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-gold" />
              <h2 className="text-gold text-xs uppercase tracking-[0.4em] font-bold">The TPL Standard</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              A Legacy of <span className="text-gold italic font-playfair">Precision & Trust</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-lato font-light">
              TPL SERVICES Tax Advisory represents the pinnacle of tax consultancy in Durban. 
              We don't just file returns; we engineer financial peace of mind through rigorous 
              compliance and strategic foresight.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-lato font-light">
              Our bespoke approach ensures that every individual and corporate entity we represent 
              benefits from the highest level of professional excellence and regulatory expertise.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-gold/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
               {/* Decorative elements */}
               <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/30" />
               <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/30" />
               <div className="text-center relative z-10">
                  <span className="text-[180px] font-black text-gold/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">TPL</span>
                  <p className="text-3xl md:text-4xl italic font-playfair text-white leading-relaxed">"Where Compliance meets Corporate Excellence."</p>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "rgba(201,166,70,0.02)" }}
              className="p-10 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl transition-all duration-500 hover:border-gold/30"
            >
              <div className="mb-8 text-gold drop-shadow-[0_0_10px_rgba(201,166,70,0.3)]">{pillar.icon}</div>
              <h4 className="text-xl font-black text-white mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-gray-400 font-lato text-sm leading-relaxed font-light">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link to="/catalog">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 border border-gold/30 text-gold rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Explore Our Full Catalog
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

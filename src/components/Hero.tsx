import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold opacity-10"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{
              y: [null, "-20%", "120%"],
              opacity: [0, 0.1, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
            }}
          />
        ))}
      </div>

      {/* Luxury Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-6 py-2 border border-gold/20 rounded-full text-gold text-xs uppercase tracking-[0.4em] mb-8 bg-gold/5 backdrop-blur-sm"
          >
            Premier Tax Advisory
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white tracking-tight leading-[1.1]">
            Experience <br />
            <span className="gold-text-gradient italic font-playfair">Financial Clarity</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-lato leading-relaxed font-light">
            TPL SERVICES delivers bespoke tax solutions with corporate excellence. 
            We navigate the complexities of SARS so you can focus on your legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,166,70,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-black font-black rounded-full transition-all w-full sm:w-auto text-sm uppercase tracking-widest shadow-xl"
              >
                Secure Consultation
              </motion.div>
            </Link>
            <motion.a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(201,166,70,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-gold/30 text-gold font-bold rounded-full transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-sm uppercase tracking-widest backdrop-blur-sm"
            >
              <FaWhatsapp className="text-xl" />
              Private Advisory
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Shimmer */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;

import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const Catalog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] mb-6 bg-gold/5 backdrop-blur-sm">
            <span className="w-1 h-1 bg-gold rounded-full animate-pulse" />
            Official Service Catalog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Our Professional <br />
            <span className="gold-text-gradient italic font-playfair">Tax Solutions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-lato text-lg font-light leading-relaxed">
            Meticulously crafted services for high-net-worth individuals and corporate entities, 
            ensuring absolute compliance and financial efficiency.
          </p>
        </motion.div>

        {/* Catalog Section */}
        <Services />

        {/* Premium Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-zinc-900/30 border border-gold/10 rounded-3xl backdrop-blur-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Need a Bespoke Solution?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 font-lato font-light">
            Our experts are ready to tailor our services to your unique financial requirements. 
            Experience the TPL standard of excellence today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-4 bg-gold text-black font-black rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform">
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Catalog;

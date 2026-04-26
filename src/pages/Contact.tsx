import React from 'react';
import ContactComponent from '../components/Contact';
import { motion } from 'framer-motion';

import { FaShieldAlt, FaLock } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-1.5 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.4em] mb-8 bg-gold/5 backdrop-blur-sm">
            <FaLock className="text-[8px]" />
            Secure Consultation Channel
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Secure Your <br />
            <span className="gold-text-gradient italic font-playfair">Compliance</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-lato text-lg font-light leading-relaxed">
            Connect with Durban's premier tax advisory. Your information is handled with 
            absolute discretion and professional integrity.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <ContactComponent />
        </div>

        {/* Security Assurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-4 text-gray-500"
        >
          <div className="flex items-center gap-4">
            <FaShieldAlt className="text-gold/40 text-2xl" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold">End-to-End Encrypted Advisory</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-50">TPL SERVICES © 2026 • All Rights Reserved</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

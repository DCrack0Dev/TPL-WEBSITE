import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Begin Your <span className="text-gold italic font-playfair">Consultation</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto font-lato text-lg font-light leading-relaxed">
              Discretion and professionalism are at the core of our practice. 
              Connect with us to secure your financial compliance today.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-12 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-10 tracking-tight">Private Channels</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0 shadow-[0_0_15px_rgba(201,166,70,0.1)]">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Corporate Office</h4>
                    <p className="text-gray-400 font-lato font-light">Durban, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0 shadow-[0_0_15px_rgba(201,166,70,0.1)]">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Secure Email</h4>
                    <p className="text-gray-400 font-lato font-light">advisory@tplservices.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold flex-shrink-0 shadow-[0_0_15px_rgba(201,166,70,0.1)]">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Direct Line</h4>
                    <p className="text-gray-400 font-lato font-light">+27 00 000 0000</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <motion.a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(37,211,102,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-4 w-full py-5 bg-[#25D366] text-white font-black rounded-2xl hover:opacity-90 transition-all uppercase tracking-widest text-sm"
                >
                  <FaWhatsapp className="text-2xl" />
                  Private WhatsApp Advisory
                </motion.a>
              </div>
            </div>

            <div className="p-8 bg-gold/5 border border-gold/20 rounded-3xl flex items-center justify-between backdrop-blur-sm">
              <div>
                <p className="text-gold font-black uppercase tracking-widest text-xs mb-1">First Consultation</p>
                <p className="text-white text-lg font-playfair italic">Complimentary Session</p>
              </div>
              <div className="px-6 py-2 bg-gold text-black text-xs font-black rounded-full uppercase tracking-widest shadow-lg">
                Reserved
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-zinc-900 border border-zinc-800/50 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all font-lato font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all font-lato font-light"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Service Required</label>
                <select className="w-full bg-black border border-zinc-800 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all font-lato font-light appearance-none">
                  <option>Individual Tax Return</option>
                  <option>Corporate Tax Compliance</option>
                  <option>VAT & Payroll Services</option>
                  <option>SARS Dispute Resolution</option>
                  <option>Other Advisory</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.2em] text-gray-500 font-black ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-6 py-4 text-white focus:border-gold outline-none transition-all font-lato font-light resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201,166,70,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-black font-black rounded-xl transition-all uppercase tracking-[0.2em] text-sm shadow-xl"
              >
                Send Secure Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

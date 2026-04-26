import React from 'react';
import Logo from './Logo';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900/50 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <Logo className="h-12 mb-8" />
            </Link>
            <p className="text-gray-500 max-w-sm mb-10 font-lato font-light leading-relaxed">
              TPL SERVICES Tax Advisory provides premier tax solutions with a commitment to precision, confidentiality, and corporate excellence. Durban's trusted partner in financial compliance.
            </p>
            <div className="flex gap-6">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3, color: "#C9A646" }}
                  className="w-12 h-12 bg-zinc-900/50 rounded-2xl flex items-center justify-center text-gray-400 border border-zinc-800/50 transition-all hover:border-gold/30 shadow-lg"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="space-y-5">
              <li><Link to="/" className="text-gray-500 hover:text-gold transition-colors font-lato font-light text-sm uppercase tracking-widest">Home</Link></li>
              <li><Link to="/catalog" className="text-gray-500 hover:text-gold transition-colors font-lato font-light text-sm uppercase tracking-widest">Service Catalog</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gold transition-colors font-lato font-light text-sm uppercase tracking-widest">Secure Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Contact Info</h4>
            <ul className="space-y-5 font-lato text-gray-500 font-light text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Durban, South Africa
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                advisory@tplservices.co.za
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                +27 00 000 0000
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Mon - Fri: 08:00 - 17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} TPL SERVICES Tax Advisory. Precision. Compliance. Peace of Mind.
          </p>
          <div className="flex gap-10 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

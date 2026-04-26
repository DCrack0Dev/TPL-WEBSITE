import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoice, FaBuilding, FaCalculator, FaRegCheckCircle, FaSearchDollar, FaUsers } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CatalogPDF from './CatalogPDF';

const services = [
  {
    name: "Individual Tax Returns",
    description: "Personal income tax filing for employees and freelancers.",
    price: "R500",
    icon: <FaFileInvoice />
  },
  {
    name: "Provisional Tax (IRP6)",
    description: "Bi-annual tax estimates and submissions for earners.",
    price: "R750",
    icon: <FaCalculator />
  },
  {
    name: "Company Tax Returns (ITR14)",
    description: "Annual financial statement and tax filing for businesses.",
    price: "R1,500",
    icon: <FaBuilding />
  },
  {
    name: "VAT Registration",
    description: "New VAT registration with SARS for eligible businesses.",
    price: "R800",
    icon: <FaRegCheckCircle />
  },
  {
    name: "VAT Returns",
    description: "Accurate preparation and submission of VAT201 returns.",
    price: "R600",
    icon: <FaFileInvoice />
  },
  {
    name: "Tax Clearance Certificate",
    description: "Application for Tax Compliance Status (TCS) pins.",
    price: "R400",
    icon: <FaRegCheckCircle />
  },
  {
    name: "SARS Queries & Disputes",
    description: "Professional handling of audits and objections.",
    price: "R1,000",
    icon: <FaSearchDollar />
  },
  {
    name: "Payroll Tax (PAYE/UIF)",
    description: "Monthly payroll tax calculations and submissions.",
    price: "R700",
    icon: <FaUsers />
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] mb-4 bg-gold/5">
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">First Consultation <span className="text-gold italic font-playfair">FREE</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto font-lato text-lg font-light leading-relaxed">
              Our expert advisory services are tailored to your unique financial profile. 
              We provide the precision and confidentiality that premium clients expect.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(201,166,70,0.5)" }}
              className="group p-10 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="text-4xl text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight">{service.name}</h3>
              <p className="text-gray-400 font-lato text-sm mb-8 flex-grow leading-relaxed font-light">{service.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-gold/50 uppercase tracking-widest font-bold">From</span>
                <div className="text-3xl font-black text-gold font-playfair tracking-tighter">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 border border-gold/20 rounded-2xl bg-zinc-900/30 backdrop-blur-md"
          >
            <PDFDownloadLink 
              document={<CatalogPDF />} 
              fileName="TPL_Services_Catalog.pdf"
              className="flex items-center gap-4 px-10 py-5 bg-gold text-black font-black rounded-xl hover:bg-gold-light transition-all text-sm uppercase tracking-[0.2em]"
            >
              {({ loading }) => (
                loading ? 'Generating Catalog...' : 'Download Full Catalog'
              )}
            </PDFDownloadLink>
          </motion.div>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
            All prices are exclusive of 15% VAT
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

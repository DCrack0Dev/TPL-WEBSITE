import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register standard fonts or reliable Google Font links
// Using cdnjs as a more reliable source for font files
Font.register({
  family: 'Playfair Display',
  src: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K3dQ3V_2-V-S_C_2mZ6X7n.ttf'
});

Font.register({
  family: 'Lato',
  src: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wWw.ttf'
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#000000',
    padding: 40,
    fontFamily: 'Helvetica', // Fallback to standard font
    color: '#FFFFFF',
  },
  header: {
    marginBottom: 40,
    borderBottom: 2,
    borderBottomColor: '#C9A646',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoSection: {
    flexDirection: 'column',
  },
  logoText: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#FFFFFF',
  },
  logoAccent: {
    color: '#C9A646',
  },
  tagline: {
    fontSize: 10,
    color: '#D4B76B',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#C9A646',
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  serviceCard: {
    width: '47%',
    backgroundColor: '#111111',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  serviceName: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#C9A646',
    marginBottom: 8,
  },
  serviceDesc: {
    fontSize: 10,
    color: '#AAAAAA',
    marginBottom: 10,
    lineHeight: 1.4,
  },
  price: {
    fontSize: 16,
    color: '#D4B76B',
    fontFamily: 'Helvetica-Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: 1,
    borderTopColor: '#333333',
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 9,
    color: '#666666',
  },
  contactInfo: {
    fontSize: 9,
    color: '#C9A646',
  }
});

const services = [
  { name: "Individual Tax Returns", desc: "Personal income tax filing for employees and freelancers.", price: "R500" },
  { name: "Provisional Tax (IRP6)", desc: "Bi-annual tax estimates and submissions for earners.", price: "R750" },
  { name: "Company Tax Returns (ITR14)", desc: "Annual financial statement and tax filing for businesses.", price: "R1,500" },
  { name: "VAT Registration", desc: "New VAT registration with SARS for eligible businesses.", price: "R800" },
  { name: "VAT Returns", desc: "Accurate preparation and submission of VAT201 returns.", price: "R600" },
  { name: "Tax Clearance Certificate", desc: "Application for Tax Compliance Status (TCS) pins.", price: "R400" },
  { name: "SARS Queries & Disputes", desc: "Professional handling of audits and objections.", price: "R1,000" },
  { name: "Payroll Tax (PAYE/UIF)", desc: "Monthly payroll tax calculations and submissions.", price: "R700" }
];

const CatalogPDF: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoSection}>
          <Text style={styles.logoText}>TPL <Text style={styles.logoAccent}>SERVICES</Text></Text>
          <Text style={styles.tagline}>Tax Advisory</Text>
        </View>
        <View style={{ textAlign: 'right' }}>
          <Text style={{ fontSize: 10, color: '#D4B76B' }}>First Consultation FREE</Text>
          <Text style={{ fontSize: 8, color: '#666666', marginTop: 2 }}>Precision. Compliance. Peace of Mind.</Text>
        </View>
      </View>

      <Text style={styles.title}>Services Catalog</Text>

      <View style={styles.serviceGrid}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDesc}>{service.desc}</Text>
            <Text style={styles.price}>{service.price}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 TPL SERVICES Tax Advisory. Durban, South Africa.</Text>
        <View style={{ textAlign: 'right' }}>
          <Text style={styles.contactInfo}>your@email.com | +27 00 000 0000</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default CatalogPDF;

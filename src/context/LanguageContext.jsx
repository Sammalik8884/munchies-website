import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About Us',
      distribution: 'Distribution',
      products: 'Our Products',
      brands: 'Brands',
      careers: 'Careers',
      contact: 'Contact Us',
    },
    hero: {
      line1: 'DISTRIBUTING',
      line2: 'BRANDS.',
      line3: 'CREATING',
      line4: 'HAPPINESS.',
      subtitle: 'Munchies is a leading distribution company in Pakistan and now a proud producer of delicious confectionery.',
      cta1: 'Our Products',
      cta2: 'Distribution Network',
    },
    stats: {
      brands: 'Partner Brands',
      outlets: 'Retail Outlets',
      coverage: 'Half of Lahore Covered',
      trust: 'Years of Trust',
    },
    products: {
      label: 'OUR CONFECTIONERY',
      title: 'Delicious Moments, Made by Munchies',
      viewDetails: 'View Details',
      viewAll: 'View All Products',
    },
    partnerBrands: {
      label: 'OUR PARTNER BRANDS',
      more: '& Many More',
      distributor: 'Proud Distributors of Leading Brands',
      explore: 'Explore Distribution',
    },
    anniversary: {
      celebrating: 'CELEBRATING',
      years: '2+',
      title: 'YEARS OF GROWTH & TRUST',
      subtitle: 'Thank you to our partners, retailers and team for being a part of our journey.',
      journey: 'Our Journey',
    },
    why: {
      title: 'Why Choose Munchies?',
      items: [
        { title: 'Strong Distribution Network', desc: 'Covering half of Lahore with 5000+ retail outlets.' },
        { title: 'Quality You Can Trust', desc: 'We deliver only the best quality products.' },
        { title: 'On-Time Delivery', desc: 'Reliable logistics & timely deliveries, every time.' },
        { title: 'Growing Together', desc: 'We grow with our partners and communities.' },
      ],
    },
    footer: {
      tagline: 'Distributing the finest brands and creating our own legacy of happiness in every bite.',
      quickLinks: 'Quick Links',
      ourProducts: 'Our Products',
      ourNetwork: 'Our Network',
      contactInfo: 'Contact Info',
      copyright: '© 2024 Munchies. All Rights Reserved.',
      designed: 'Designed with',
      inPakistan: 'in Pakistan',
      address: 'Lahore, Pakistan',
      phone: '+92 335 1497701',
      whatsapp: '+92 335 1497701',
      email: 'Munchiespk24@gmail.com',

      hours: 'Mon–Sat: 9:00 AM – 6:00 PM',
    },
    about: {
      label: 'ABOUT MUNCHIES',
      title: 'From a Vision to a Growing Legacy',
      subtitle: 'Munchies began with a simple vision – to deliver quality products and build strong relationships. Today, we are one of the fastest growing distribution companies in Pakistan and proud producers of our own confectionery.',
      mission: { title: 'Our Mission', desc: 'To deliver happiness through quality products and excellent service.' },
      vision: { title: 'Our Vision', desc: 'To become a leading FMCG and distribution company improving lives.' },
      values: { title: 'Our Values', desc: 'Integrity, Quality, Teamwork and Customer Satisfaction are at our core.' },
      commitment: { title: 'Our Commitment', desc: 'We are committed to excellence in everything we do.' },
    },
    distribution: {
      label: 'DISTRIBUTION',
      title: 'Strong Network, Wide Reach',
      subtitle: 'We distribute leading national brands across a wide network covering half of Lahore with over 5000+ retail outlets.',
      mapLabel: '½ of Lahore Covered',
      pinLabel: 'LAHORE',
      stats: [
        { number: '5000+', label: 'Retail Outlets' },
        { number: '50+', label: 'Partner Brands' },
        { number: 'Fast & Reliable', label: 'Delivery' },
      ],
    },
    products_page: {
      label: 'OUR CONFECTIONERY',
      title: 'Made with passion. Loved by all.',
      subtitle: 'Munchies is now creating its own range of delicious confectionery to add sweetness to every moment.',
      filters: ['All Products', 'Chocolate', 'Wafer', 'Candy', 'Cereal & Bars', 'Cones'],
      viewMore: 'View More Products',
      badges: ['Premium Quality Ingredients', 'Hygienic Production Standards', 'Great Taste In Every Bite', 'Loved by Everyone'],
    },
    brands_page: {
      label: 'OUR PARTNER BRANDS',
      title: 'Partnering with the best to bring the best.',
      stats: [
        { number: '50+', label: 'Partner Brands' },
        { number: '5000+', label: 'Retail Outlets' },
        { number: 'Strong', label: 'Relationships' },
        { number: 'Nationwide', label: 'Presence' },
      ],
    },
    careers_page: {
      label: 'CAREERS',
      title: 'Grow with Munchies',
      subtitle: 'We are always looking for passionate and talented individuals to join our team and grow together.',
      values: [
        { title: 'Career Growth Opportunities', desc: 'Clear growth paths and promotions.' },
        { title: 'Positive Work Environment', desc: 'A healthy, supportive workplace.' },
        { title: 'Training & Development', desc: 'Continuous learning and skill building.' },
        { title: 'Be a Part of Winning Team', desc: "Join Pakistan's fastest growing snack brand." },
      ],
      ctaTitle: 'Check our open positions and be a part of our journey.',
      ctaBtn1: 'Our Journey',
      ctaBtn2: 'View Open Positions',
    },
    contact_page: {
      label: 'CONTACT US',
      title: "We'd love to hear from you.",
      address: { label: 'Head Office', value: 'Lahore, Pakistan' },
      phone: { label: 'Phone / WhatsApp', value: '+92 335 1497701' },
      email: { label: 'Email', value: 'Munchiespk24@gmail.com' },

      hours: { label: 'Business Hours', value: 'Monday – Saturday\n9:00 AM – 6:00 PM' },
      form: {
        title: 'Send us a Message',
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        message: 'Your Message',
        submit: 'Send Message',
        success: '✅ Message sent successfully! We\'ll get back to you soon.',
      },
    },
  },
  ur: {
    dir: 'rtl',
    nav: {
      home: 'ہوم',
      about: 'ہمارے بارے میں',
      distribution: 'تقسیم',
      products: 'ہمارے مصنوعات',
      brands: 'برانڈز',
      careers: 'کیریئر',
      contact: 'رابطہ کریں',
    },
    hero: {
      line1: 'برانڈز کی',
      line2: 'تقسیم،',
      line3: 'خوشیاں',
      line4: 'بناتے ہیں۔',
      subtitle: 'منچیز پاکستان کی ایک معروف تقسیم کمپنی ہے اور اب لذیذ مٹھائیوں کی ایک فخرمند پروڈیوسر بھی ہے۔',
      cta1: 'ہمارے مصنوعات',
      cta2: 'تقسیم نیٹ ورک',
    },
    stats: {
      brands: 'پارٹنر برانڈز',
      outlets: 'ریٹیل آؤٹ لیٹس',
      coverage: 'لاہور کا آدھا حصہ',
      trust: 'اعتماد کے سال',
    },
    products: {
      label: 'ہماری مٹھائیاں',
      title: 'خوشگوار لمحات، منچیز کے ساتھ',
      viewDetails: 'تفصیلات دیکھیں',
      viewAll: 'تمام مصنوعات دیکھیں',
    },
    partnerBrands: {
      label: 'ہمارے پارٹنر برانڈز',
      more: 'اور بھی بہت کچھ',
      distributor: 'معروف برانڈز کے فخرمند ڈسٹری بیوٹرز',
      explore: 'تقسیم دیکھیں',
    },
    anniversary: {
      celebrating: 'جشن منا رہے ہیں',
      years: '+۲',
      title: 'ترقی اور اعتماد کے سال',
      subtitle: 'اپنے شراکت داروں، خوردہ فروشوں اور ٹیم کا شکریہ۔',
      journey: 'ہمارا سفر',
    },
    why: {
      title: 'منچیز کیوں منتخب کریں؟',
      items: [
        { title: 'مضبوط تقسیم نیٹ ورک', desc: 'لاہور کے آدھے حصے میں 5000+ آؤٹ لیٹس۔' },
        { title: 'معیار پر بھروسہ', desc: 'ہم صرف بہترین معیار کی مصنوعات فراہم کرتے ہیں۔' },
        { title: 'بروقت ترسیل', desc: 'قابل اعتماد لاجسٹکس اور بروقت ترسیل۔' },
        { title: 'مل کر بڑھنا', desc: 'ہم اپنے شراکت داروں کے ساتھ بڑھتے ہیں۔' },
      ],
    },
    footer: {
      tagline: 'بہترین برانڈز کی تقسیم اور ہر لقمے میں خوشیاں۔',
      quickLinks: 'فوری لنکس',
      ourProducts: 'ہمارے مصنوعات',
      ourNetwork: 'ہمارا نیٹ ورک',
      contactInfo: 'رابطہ معلومات',
      copyright: '© 2024 منچیز۔ جملہ حقوق محفوظ ہیں۔',
      designed: 'ڈیزائن کیا گیا',
      inPakistan: 'پاکستان میں',
      address: '23-AM، فیروزپور روڈ، لاہور، پاکستان',
      phone: '+92 335 1497701',
      whatsapp: '+92 335 1497701',
      email: 'Munchiespk24@gmail.com',

      hours: 'پیر–ہفتہ: صبح 9 بجے – شام 6 بجے',
    },
    about: {
      label: 'منچیز کے بارے میں',
      title: 'ایک وژن سے بڑھتی میراث تک',
      subtitle: 'منچیز نے ایک سادہ وژن کے ساتھ آغاز کیا – معیاری مصنوعات فراہم کرنا اور مضبوط تعلقات بنانا۔',
      mission: { title: 'ہمارا مشن', desc: 'معیاری مصنوعات اور بہترین خدمات کے ذریعے خوشیاں پہنچانا۔' },
      vision: { title: 'ہمارا وژن', desc: 'ایک معروف FMCG اور تقسیم کمپنی بننا۔' },
      values: { title: 'ہماری اقدار', desc: 'دیانتداری، معیار، ٹیم ورک اور گاہک کی اطمینان۔' },
      commitment: { title: 'ہمارا عزم', desc: 'ہر کام میں بہترین نتائج کے لیے پرعزم۔' },
    },
    distribution: {
      label: 'تقسیم',
      title: 'مضبوط نیٹ ورک، وسیع رسائی',
      subtitle: 'ہم لاہور کے آدھے حصے میں 5000+ ریٹیل آؤٹ لیٹس کے ساتھ ملکی برانڈز تقسیم کرتے ہیں۔',
      mapLabel: 'لاہور کا آدھا حصہ',
      pinLabel: 'لاہور',
      stats: [
        { number: '+5000', label: 'ریٹیل آؤٹ لیٹس' },
        { number: '+50', label: 'پارٹنر برانڈز' },
        { number: 'تیز اور قابل اعتماد', label: 'ترسیل' },
      ],
    },
    products_page: {
      label: 'ہماری مٹھائیاں',
      title: 'جذبے سے بنائی، سب کو پسند۔',
      subtitle: 'منچیز اب اپنی لذیذ مٹھائیوں کی ایک رینج بنا رہی ہے۔',
      filters: ['تمام مصنوعات', 'چاکلیٹ', 'ویفر', 'کینڈی', 'سیریل اور بارز', 'کونز'],
      viewMore: 'مزید مصنوعات دیکھیں',
      badges: ['اعلیٰ معیار کے اجزاء', 'صحت مند پیداوار', 'ہر لقمے میں بہترین ذائقہ', 'سب کا پسندیدہ'],
    },
    brands_page: {
      label: 'ہمارے پارٹنر برانڈز',
      title: 'بہترین برانڈز کے ساتھ شراکت۔',
      stats: [
        { number: '+50', label: 'پارٹنر برانڈز' },
        { number: '+5000', label: 'ریٹیل آؤٹ لیٹس' },
        { number: 'مضبوط', label: 'تعلقات' },
        { number: 'ملک گیر', label: 'موجودگی' },
      ],
    },
    careers_page: {
      label: 'کیریئر',
      title: 'منچیز کے ساتھ ترقی کریں',
      subtitle: 'ہم ہمیشہ پرجوش اور باصلاحیت افراد کی تلاش میں ہیں۔',
      values: [
        { title: 'کیریئر گروتھ', desc: 'واضح ترقی کے مواقع۔' },
        { title: 'مثبت کام کا ماحول', desc: 'صحت مند اور معاون ورک پلیس۔' },
        { title: 'تربیت اور ترقی', desc: 'مسلسل سیکھنا اور مہارت۔' },
        { title: 'جیتنی ٹیم کا حصہ بنیں', desc: 'پاکستان کے تیزترین بڑھتے برانڈ میں شامل ہوں۔' },
      ],
      ctaTitle: 'ہمارے سفر کا حصہ بنیں۔',
      ctaBtn1: 'ہمارا سفر',
      ctaBtn2: 'آسامیاں دیکھیں',
    },
    contact_page: {
      label: 'رابطہ کریں',
      title: 'ہم آپ سے سننا چاہتے ہیں۔',
      address: { label: 'ہیڈ آفس', value: '23-AM، فیروزپور روڈ، لاہور، پاکستان' },
      phone: { label: 'فون / واٹس ایپ', value: '+92 335 1497701' },
      email: { label: 'ای میل', value: 'Munchiespk24@gmail.com' },

      hours: { label: 'کاروباری اوقات', value: 'پیر – ہفتہ\nصبح 9 بجے – شام 6 بجے' },
      form: {
        title: 'ہمیں پیغام بھیجیں',
        name: 'آپ کا نام',
        email: 'آپ کی ای میل',
        phone: 'آپ کا فون',
        message: 'آپ کا پیغام',
        submit: 'پیغام بھیجیں',
        success: '✅ پیغام کامیابی سے بھیج دیا گیا!',
      },
    },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div dir={t.dir} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

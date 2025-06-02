
import type { Tool, CategoryInfo, BlogArticle, QuickTopic } from '@/types';

export const mockCategories: CategoryInfo[] = [
  { id: 'basic', name: 'เครื่องมือพื้นฐาน', image: 'https://placehold.co/300x200.png?text=Basic+Tools', aiHint: 'tools hammer' },
  { id: 'construction', name: 'เครื่องมือก่อสร้าง / งานคอนกรีต', image: 'https://placehold.co/300x200.png?text=Concrete+Tools', aiHint: 'concrete mixer' },
  { id: 'measuring', name: 'เครื่องมือวัดและทดสอบ', image: 'https://placehold.co/300x200.png?text=Measuring+Tools', aiHint: 'tape measure' },
  { id: 'home-repair', name: 'เครื่องมือซ่อมแซมบ้าน', image: 'https://placehold.co/300x200.png?text=Home+Repair', aiHint: 'toolbox wrench' },
  { id: 'electrical-general', name: 'Electrical Tools', image: 'https://placehold.co/300x200.png?text=Electrical+Tools', aiHint: 'multimeter pliers' },
  { id: 'electrical-system', name: 'Electrical System Tools', image: 'https://placehold.co/300x200.png?text=Electrical+System', aiHint: 'circuit breaker' },
  { id: 'accessories', name: 'Accessories / Safety Equipment', image: 'https://placehold.co/300x200.png?text=Safety+Gear', aiHint: 'safety goggles' },
  { id: 'gardening', name: 'Gardening Tools', image: 'https://placehold.co/300x200.png?text=Gardening+Tools', aiHint: 'shovel rake' },
];

export const mockTools: Tool[] = [
  {
    id: '1',
    name: 'สว่านไฟฟ้าสำหรับงานหนัก XR-5000',
    image: 'https://placehold.co/400x400.png?text=Electric+Drill',
    aiHint: 'electric drill',
    stock: 3,
    lowStockThreshold: 5,
    priceBuy: 3500,
    priceRent: 500,
    categories: ['basic', 'electrical-general', 'home-repair'],
    descriptionShort: 'สว่านทรงพลังสำหรับทุกความต้องการในบ้านและงานมืออาชีพ มาพร้อมอุปกรณ์เสริมหลากหลาย',
    descriptionFull: 'The XR-5000 is a versatile and robust electric drill designed for a wide range of applications. Whether you are a DIY enthusiast or a professional contractor, this drill offers the power and precision you need. Features variable speed control, a comfortable grip, and a durable chuck.',
    rating: 4.5,
    sku: 'HD-ED-XR5000',
    weight: '2.5 kg',
    packagingDimensions: '30cm x 20cm x 10cm',
    brand: 'PowerTool Pro',
    power: '750W',
    cordLength: '3m',
    warranty: '2 years',
    rotationSpeed: '0-3000 RPM',
    features: ['Variable speed control', 'Keyless chuck', 'Ergonomic handle', 'LED work light'],
    specs: {
      Voltage: '220-240V',
      Frequency: '50Hz',
      'Chuck Capacity': '1.5-13mm',
      'Max Drilling (Wood)': '30mm',
      'Max Drilling (Steel)': '13mm',
      'Max Drilling (Masonry)': '16mm',
    },
    howToUseSteps: [
      { id: 'step1', title: 'ความปลอดภัยต้องมาก่อน', mediaUrl: 'https://placehold.co/600x400.png?text=Safety+First', description: 'สวมแว่นตานิรภัยและถุงมือเสมอก่อนใช้งานสว่าน', aiHint: 'safety equipment' },
      { id: 'step2', title: 'ใส่ดอกสว่าน', mediaUrl: 'https://placehold.co/600x400.png?text=Insert+Bit', description: 'ตรวจสอบให้แน่ใจว่าไม่ได้เสียบปลั๊กสว่าน เปิดหัวจับ ใส่ดอกสว่านที่ต้องการ แล้วขันหัวจับให้แน่น', aiHint: 'drill bit' },
      { id: 'step3', title: 'ตั้งค่าความเร็ว', mediaUrl: 'https://placehold.co/600x400.png?text=Set+Speed', description: 'เลือกความเร็วที่เหมาะสมกับวัสดุของคุณ ใช้ความเร็วต่ำสำหรับโลหะ ความเร็วสูงสำหรับไม้', aiHint: 'speed control' },
      { id: 'step4', title: 'การเจาะ', mediaUrl: 'https://placehold.co/600x400.png?text=Drilling', description: 'จับสว่านให้มั่นคงด้วยมือทั้งสองข้าง ออกแรงกดอย่างสม่ำเสมอและเริ่มเจาะ', aiHint: 'drilling wood' },
    ]
  },
  {
    id: '2',
    name: 'ชุดระดับเลเซอร์ระดับมืออาชีพ',
    image: 'https://placehold.co/400x400.png?text=Laser+Level',
    aiHint: 'laser level',
    stock: 8,
    lowStockThreshold: 3,
    priceBuy: 2200,
    priceRent: 300,
    categories: ['measuring', 'home-repair'],
    descriptionShort: 'ได้แนวระดับที่สมบูรณ์แบบด้วยระดับเลเซอร์เกรดมืออาชีพ เหมาะสำหรับการแขวนรูปภาพ ติดตั้งชั้นวาง และอื่นๆ',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Compact Circular Saw CS-150',
    image: 'https://placehold.co/400x400.png?text=Circular+Saw',
    aiHint: 'circular saw',
    stock: 5,
    priceRent: 600,
    categories: ['construction', 'electrical-general', 'home-repair'],
    descriptionShort: 'เลื่อยวงเดือนน้ำหนักเบาแต่ทรงพลังสำหรับการตัดไม้และพลาสติกที่แม่นยำ',
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Industrial Wet/Dry Vacuum Cleaner',
    image: 'https://placehold.co/400x400.png?text=Vacuum+Cleaner',
    aiHint: 'vacuum cleaner',
    stock: 2,
    lowStockThreshold: 2,
    priceRent: 750,
 priceBuy: 4800,
    categories: ['home-repair', 'accessories'],
    descriptionShort: 'High-capacity vacuum for cleaning up workshops, garages, and renovation sites.',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Basic Hand Tool Set (25 Pieces)',
    image: 'https://placehold.co/400x400.png?text=Hand+Tool+Set',
    aiHint: 'tool set',
    stock: 15,
    priceBuy: 1200,
    priceRent: 150, // Price is per set per rental period (e.g., day)
    categories: ['basic', 'home-repair', 'accessories'],
    descriptionShort: 'Essential hand tools for everyday repairs and DIY projects. Includes hammer, screwdrivers, pliers, and more.',
    rating: 4.0,
  },
  {
    id: '6',
    name: 'Concrete Mixer CM-50L',
    image: 'https://placehold.co/400x400.png?text=Concrete+Mixer',
    aiHint: 'concrete mixer',
    stock: 4,
    priceRent: 1200, // Price per day
    categories: ['construction'],
    descriptionShort: 'เครื่องผสมคอนกรีตความจุ 50 ลิตร สำหรับโครงการขนาดเล็กถึงขนาดกลาง',
    rating: 4.3,
  },
];

export const mockQuickTopics: QuickTopic[] = [ // เพิ่มหัวข้อด่วน
  { 
    id: '1', 
    text: 'Planning to renovate? These tools might suit you.', 
    link: '/equipment?category=home-repair',
    image: 'https://placehold.co/400x200.png?text=Home+Renovation',
    aiHint: 'home renovation'
  },
  { 
 id: '2',
    text: 'งานคอนกรีตต้องใช้เครื่องมืออะไรบ้าง? คู่มือฉบับสมบูรณ์',
    link: '/blog/guide-concrete-tools', // ลิงก์ไปยังบทความแนะนำ
    image: 'https://placehold.co/400x200.png?text=Concrete+Work+Guide',
    aiHint: 'concrete tools'
  },
  { 
    id: '3', // เพิ่มหัวข้อการสร้างดาดฟ้า
    text: 'สิ่งจำเป็นในการสร้างดาดฟ้าสำหรับโครงการภายนอกครั้งต่อไปของคุณ',
    link: '/blog/deck-building-guide', // ลิงก์ไปยังบทความแนะนำ
    image: 'https://placehold.co/400x200.png?text=Deck+Building', // ภาพประกอบ
    aiHint: 'deck construction'
  },
  {
    id: '4', 
    text: 'Get started with basic tools: A must-have list for beginners.', 
    link: '/equipment?category=basic',
    image: 'https://placehold.co/400x200.png?text=Basic+Tool+List',
    aiHint: 'basic tools'
  },
];

export const mockBlogArticles: BlogArticle[] = [
  {
    slug: 'guide-concrete-tools', // รหัสบทความ (ใช้ใน URL)
    title: 'สุดยอดคู่มือเครื่องมืองานคอนกรีต', // ชื่อบทความ
    subtitle: 'ทุกสิ่งที่คุณต้องรู้สำหรับโครงการคอนกรีตครั้งต่อไปของคุณ', // คำบรรยายย่อ
    excerpt: 'การทำงานกับคอนกรีตต้องใช้เครื่องมือเฉพาะสำหรับการผสม การเท และการตกแต่ง คู่มือนี้ครอบคลุมสิ่งจำเป็น...', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Concrete+Guide',
    aiHint: 'concrete tools',
    difficulty: 'Medium',
    duration: '2-3 hours read/prep',
    cost: 'Varies',
    content: `
      <h2 id="intro">บทนำสู่งานคอนกรีต</h2>
      <p>งานคอนกรีตอาจท้าทายแต่ก็คุ้มค่า การมีเครื่องมือที่เหมาะสมเป็นสิ่งสำคัญสำหรับความสำเร็จ</p>
      <img src="https://placehold.co/600x300.png?text=Pouring+Concrete" alt="Concrete work in progress" data-ai-hint="concrete pouring"/>
      <h3 id="mixing">1. เครื่องมือผสม</h3>
      <p>เครื่องผสมคอนกรีตคุณภาพดีช่วยประหยัดเวลาและแรงงานได้มาก สำหรับงานขนาดเล็ก รถเข็นและพลั่วอาจเพียงพอ</p>
      <h3 id="pouring">2. เครื่องมือสำหรับเทและเกลี่ย</h3>
      <p>ใช้พลั่ว คราด และเกรียงเกลี่ยคอนกรีตเพื่อกระจายคอนกรีตให้สม่ำเสมอ</p>
      <h3 id="finishing">3. เครื่องมือตกแต่งผิว</h3>
      <p>เกรียงฉาบ, เกรียงขัด, และเกรียงทำขอบ เป็นสิ่งจำเป็นสำหรับการตกแต่งผิวที่เรียบเนียนและเป็นมืออาชีพ</p>
      <h3 id="safety">4. อุปกรณ์ความปลอดภัย</h3>
      <p>อย่าลืมให้ความสำคัญกับความปลอดภัยเสมอโดยการสวมอุปกรณ์ที่เหมาะสม เช่น ถุงมือ รองเท้าบู๊ต และอุปกรณ์ป้องกันดวงตา</p>
    `,
 relatedProducts: mockTools.filter(tool => tool.categories.includes('construction')).slice(0, 3), // สินค้าที่เกี่ยวข้อง
    toc: [
      { id: 'intro', title: 'บทนำ', level: 2 }, // สารบัญ
      { id: 'mixing', title: 'เครื่องมือผสม', level: 3 },
      { id: 'pouring', title: 'การเทและเกลี่ย', level: 3 },
      { id: 'finishing', title: 'เครื่องมือตกแต่งผิว', level: 3 },
      { id: 'safety', title: 'อุปกรณ์ความปลอดภัย', level: 3 },
    ],
    date: '2023-10-26',
  },
  {
    slug: 'deck-building-guide', // รหัสบทความ
    title: 'วิธีสร้างดาดฟ้า: คู่มือสำหรับผู้เริ่มต้น', // ชื่อบทความ
    excerpt: 'เรียนรู้พื้นฐานการสร้างดาดฟ้า ตั้งแต่การวางแผนจนถึงการตกแต่งขั้นสุดท้าย เรามีรายการเครื่องมือที่คุณจะต้องใช้', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Deck+Building+Guide',
    aiHint: 'wood deck',
    difficulty: 'Hard',
    duration: 'โครงการสุดสัปดาห์',
    cost: '฿10,000 - ฿50,000+',
    date: '2023-11-05',
  },
  {
    slug: 'basic-home-repairs', // รหัสบทความ
    title: '5 อันดับงานซ่อมแซมบ้านพื้นฐานที่คุณทำเองได้', // ชื่อบทความ
    excerpt: 'ประหยัดเงินและรู้สึกดีกับตัวเองด้วยการซ่อมแซมบ้านง่ายๆ ด้วยเครื่องมือพื้นฐาน', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Home+Repairs',
    aiHint: 'home repair',
    difficulty: 'Easy',
    duration: '1-2 ชั่วโมงต่อการซ่อม',
    cost: 'ต่ำ',
    date: '2023-09-15',
  },
  {
    slug: 'painting-like-a-pro', // รหัสบทความ
    title: 'เทคนิคการทาสีเพื่อให้ได้งานระดับมืออาชีพ', // ชื่อบทความ
    excerpt: 'เรียนรู้เทคนิคง่ายๆ เพื่อให้โครงการทาสีครั้งต่อไปของคุณดูเหมือนทำโดยมืออาชีพ', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Pro+Painting',
    aiHint: 'painting wall',
    difficulty: 'Easy',
    duration: '3-4 ชั่วโมง',
    cost: 'ต่ำ',
    date: '2023-11-10',
  },
  {
    slug: 'choosing-right-ladder', // รหัสบทความ
    title: 'การเลือกบันไดที่เหมาะสมกับงาน', // ชื่อบทความ
    excerpt: 'ความปลอดภัยต้องมาก่อน! คู่มือนี้ช่วยคุณเลือกบันไดที่เหมาะสมสำหรับงานต่างๆ รอบบ้าน', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Right+Ladder',
    aiHint: 'ladder safety',
    difficulty: 'Easy',
    duration: 'อ่าน 30 นาที',
    cost: 'หลากหลาย',
    date: '2023-10-01',
  },
  {
    slug: 'garden-tool-maintenance', // รหัสบทความ
    title: 'การบำรุงรักษาเครื่องมือทำสวนที่จำเป็น', // ชื่อบทความ
    excerpt: 'ดูแลเครื่องมือทำสวนของคุณให้อยู่ในสภาพดีเยี่ยมด้วยเคล็ดลับการบำรุงรักษาง่ายๆ เพื่ออายุการใช้งานที่ยาวนานและประสิทธิภาพที่ดี', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Garden+Tool+Care',
    aiHint: 'gardening tools',
    difficulty: 'Easy',
    duration: '1 hour',
    cost: 'Very Low',
    date: '2023-09-20',
  },
  {
    slug: 'installing-shelves-101', // รหัสบทความ
    title: 'การติดตั้งชั้นวาง 101: คู่มือทีละขั้นตอน', // ชื่อบทความ
    excerpt: 'เพิ่มพื้นที่จัดเก็บและสไตล์ให้กับบ้านของคุณด้วยการเรียนรู้วิธีติดตั้งชั้นวางติดผนังอย่างถูกต้อง เหมาะสำหรับผู้เริ่มต้น!', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Install+Shelves',
    aiHint: 'wall shelves',
    difficulty: 'Easy',
    duration: '2 hours',
    cost: 'ต่ำ',
    date: '2023-11-15',
  },
  {
    slug: 'unclogging-drain-basics', // รหัสบทความ
    title: 'DIY แก้ท่อระบายน้ำอุดตัน: วิธีแก้ไขง่ายๆ ก่อนเรียกช่างประปา', // ชื่อบทความ
    excerpt: 'เรียนรู้เทคนิคพื้นฐานในการแก้ท่อระบายน้ำในครัวเรือนที่อุดตันโดยใช้เครื่องมือและวิธีการง่ายๆ', // สรุปย่อ
    thumbnail: 'https://placehold.co/400x250.png?text=Unclog+Drain',
    aiHint: 'drain pipe',
    difficulty: 'Easy',
    duration: '1 hour',
    cost: 'ต่ำมาก',
    date: '2023-11-20',
  },
  {
    slug: 'hanging-pictures-perfectly',
    title: 'How to Hang Pictures Perfectly Every Time',
    excerpt: 'A simple guide to ensure your photos and artwork are hung straight and securely.',
    thumbnail: 'https://placehold.co/400x250.png?text=Hang+Pictures',
    aiHint: 'picture frame wall',
    difficulty: 'Easy',
    duration: '30 minutes',
    cost: 'ต่ำมาก',
    date: '2023-11-25',
  }
];

export const beginnerAdviceArticles: BlogArticle[] = mockBlogArticles.filter(article => article.difficulty === 'Easy');

export const getToolById = (id: string): Tool | undefined => mockTools.find(tool => tool.id === id);
export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined => mockBlogArticles.find(article => article.slug === slug);

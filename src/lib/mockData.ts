import type { Tool, CategoryInfo, BlogArticle, QuickTopic } from "@/types";

export const mockCategories: CategoryInfo[] = [
  {
    id: "basic",
    name: "เครื่องมือพื้นฐาน",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-BASIC-HOME-TOOLKIT-2048px-0082-1024x686.jpg",
    aiHint: "tools hammer",
  },
  {
    id: "construction",
    name: "เครื่องมือก่อสร้าง / งานคอนกรีต",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_vR0vGzYYbaGO369DlW-zFL1V3qWKAtYIw&s",
    aiHint: "concrete mixer",
  },
  {
    id: "measuring",
    name: "เครื่องมือวัดและทดสอบ",
    image:
      "https://cdn.thewirecutter.com/wp-content/uploads/2018/10/basic-toolkit-lowres-0070.jpg?auto=webp&quality=60&width=570",
    aiHint: "tape measure",
  },
  {
    id: "home-repair",
    name: "เครื่องมือซ่อมแซมบ้าน",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSQqg_hdujhhK8rwishAfkWXq4uoAzOw_RQ&s",
    aiHint: "toolbox wrench",
  },
  {
    id: "electrical-general",
    name: "Electrical Tools",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/09/soldering-irons-2048px-5640.jpeg?auto=webp&quality=75&width=1024",
    aiHint: "multimeter pliers",
  },
  {
    id: "electrical-system",
    name: "Electrical System Tools",
    image:
      "https://www.iconfasteners.ie/wp-content/uploads/2023/10/Construction-Safety-Equipment.jpg",
    aiHint: "circuit breaker",
  },
  {
    id: "accessories",
    name: "Accessories / Safety Equipment",
    image:
      "https://images-cdn.ubuy.co.in/6694a9771f7c6d40e92c2119-ejwqwqe-5-piece-garden-tools-gardening.jpg",
    aiHint: "safety goggles",
  },
  {
    id: "gardening",
    name: "Gardening Tools",
    image:
      "https://cdn.mscdirect.com/global/images/ProductImages/6010082AB-21.jpg",
    aiHint: "shovel rake",
  },
];

export const mockTools: Tool[] = [
  {
    id: "1",
    name: "สว่านไฟฟ้าสำหรับงานหนัก XR-5000",
    image:
      "https://cdn.mscdirect.com/global/images/ProductImages/6010082AB-21.jpg",
    aiHint: "electric drill",
    stock: 3,
    lowStockThreshold: 5,
    priceBuy: 3500,
    priceRent: 500,
    categories: ["basic", "electrical-general", "home-repair"],
    descriptionShort:
      "สว่านทรงพลังสำหรับทุกความต้องการในบ้านและงานมืออาชีพ มาพร้อมอุปกรณ์เสริมหลากหลาย",
    descriptionFull:
      "The XR-5000 is a versatile and robust electric drill designed for a wide range of applications. Whether you are a DIY enthusiast or a professional contractor, this drill offers the power and precision you need. Features variable speed control, a comfortable grip, and a durable chuck.",
    rating: 4.5,
    sku: "HD-ED-XR5000",
    weight: "2.5 kg",
    packagingDimensions: "30cm x 20cm x 10cm",
    brand: "PowerTool Pro",
    power: "750W",
    cordLength: "3m",
    warranty: "2 years",
    rotationSpeed: "0-3000 RPM",
    features: [
      "Variable speed control",
      "Keyless chuck",
      "Ergonomic handle",
      "LED work light",
    ],
    specs: {
      Voltage: "220-240V",
      Frequency: "50Hz",
      "Chuck Capacity": "1.5-13mm",
      "Max Drilling (Wood)": "30mm",
      "Max Drilling (Steel)": "13mm",
      "Max Drilling (Masonry)": "16mm",
    },
    howToUseSteps: [
      {
        id: "step1",
        title: "ความปลอดภัยต้องมาก่อน",
        mediaUrl: "https://placehold.co/600x400.png?text=Safety+First",
        description: "สวมแว่นตานิรภัยและถุงมือเสมอก่อนใช้งานสว่าน",
        aiHint: "safety equipment",
      },
      {
        id: "step2",
        title: "ใส่ดอกสว่าน",
        mediaUrl: "https://placehold.co/600x400.png?text=Insert+Bit",
        description:
          "ตรวจสอบให้แน่ใจว่าไม่ได้เสียบปลั๊กสว่าน เปิดหัวจับ ใส่ดอกสว่านที่ต้องการ แล้วขันหัวจับให้แน่น",
        aiHint: "drill bit",
      },
      {
        id: "step3",
        title: "ตั้งค่าความเร็ว",
        mediaUrl: "https://placehold.co/600x400.png?text=Set+Speed",
        description:
          "เลือกความเร็วที่เหมาะสมกับวัสดุของคุณ ใช้ความเร็วต่ำสำหรับโลหะ ความเร็วสูงสำหรับไม้",
        aiHint: "speed control",
      },
      {
        id: "step4",
        title: "การเจาะ",
        mediaUrl: "https://placehold.co/600x400.png?text=Drilling",
        description:
          "จับสว่านให้มั่นคงด้วยมือทั้งสองข้าง ออกแรงกดอย่างสม่ำเสมอและเริ่มเจาะ",
        aiHint: "drilling wood",
      },
    ],
  },
  {
    id: "2",
    name: "ชุดระดับเลเซอร์ระดับมืออาชีพ",
    image:
      "https://m.media-amazon.com/images/I/71zR26KYFiL._AC_UF350,350_QL80_.jpg",
    aiHint: "laser level",
    stock: 8,
    lowStockThreshold: 3,
    priceBuy: 2200,
    priceRent: 300,
    categories: ["measuring", "home-repair"],
    descriptionShort:
      "ได้แนวระดับที่สมบูรณ์แบบด้วยระดับเลเซอร์เกรดมืออาชีพ เหมาะสำหรับการแขวนรูปภาพ ติดตั้งชั้นวาง และอื่นๆ",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Compact Circular Saw CS-150",
    image: "https://m.media-amazon.com/images/I/71zR26KYFiL._AC_UF350,350_QL80_.jpg",
    aiHint: "circular saw",
    stock: 5,
    priceRent: 600,
    categories: ["construction", "electrical-general", "home-repair"],
    descriptionShort:
      "เลื่อยวงเดือนน้ำหนักเบาแต่ทรงพลังสำหรับการตัดไม้และพลาสติกที่แม่นยำ",
    rating: 4.2,
  },
  {
    id: "4",
    name: "Industrial Wet/Dry Vacuum Cleaner",
    image: "https://cdnimg.webstaurantstore.com/images/products/large/568037/2105351.jpg",
    aiHint: "vacuum cleaner",
    stock: 2,
    lowStockThreshold: 2,
    priceRent: 750,
    priceBuy: 4800,
    categories: ["home-repair", "accessories"],
    descriptionShort:
      "High-capacity vacuum for cleaning up workshops, garages, and renovation sites.",
    rating: 4.6,
  },
];

export const mockQuickTopics: QuickTopic[] = [
  // เพิ่มหัวข้อด่วน
  {
    id: "1",
    text: "Planning to renovate? These tools might suit you.",
    link: "/equipment?category=home-repair",
    image:
      "https://media.discordapp.net/attachments/1373320579754627234/1378944080947445801/1.png?ex=683e7140&is=683d1fc0&hm=3e48b0315d9d8bc959fa0f3c7b72265e74c0fd6a4a4c472405d52fc596b4b382&=&format=webp&quality=lossless&width=1479&height=833",
    aiHint: "home renovation",
  },
  {
    id: "2",
    text: "งานคอนกรีตต้องใช้เครื่องมืออะไรบ้าง? คู่มือฉบับสมบูรณ์",
    link: "/blog/guide-concrete-tools", // ลิงก์ไปยังบทความแนะนำ
    image:
      "https://media.discordapp.net/attachments/1373320579754627234/1378944081300033567/2.png?ex=683e7140&is=683d1fc0&hm=144ed1fa0d4e850bf6cce67125795b765b8a6fce35212d8ea37dff8b363f560e&=&format=webp&quality=lossless&width=1479&height=833",
    aiHint: "concrete tools",
  },
  {
    id: "3", // เพิ่มหัวข้อการสร้างดาดฟ้า
    text: "สิ่งจำเป็นในการสร้างดาดฟ้าสำหรับโครงการภายนอกครั้งต่อไปของคุณ",
    link: "/blog/deck-building-guide", // ลิงก์ไปยังบทความแนะนำ
    image:
      "https://media.discordapp.net/attachments/1373320579754627234/1378944081694294237/3.png?ex=683e7140&is=683d1fc0&hm=7d586dead5a9a75637a7182f44189f145aeb581aea6215504c1f42d7a7cd9a63&=&format=webp&quality=lossless&width=1479&height=833", // ภาพประกอบ
    aiHint: "deck construction",
  },
  {
    id: "4",
    text: "Get started with basic tools: A must-have list for beginners.",
    link: "/equipment?category=basic",
    image:
      "https://media.discordapp.net/attachments/1373320579754627234/1378944082084102174/4.png?ex=683e7140&is=683d1fc0&hm=b89ada48c3eee178fdaf9151dbd0f954f82a1355b37048ae430bbe90257a2320&=&format=webp&quality=lossless&width=1479&height=833",
    aiHint: "basic tools",
  },
];

export const mockBlogArticles: BlogArticle[] = [
  {
    slug: "guide-concrete-tools", // รหัสบทความ (ใช้ใน URL)
    title: "สุดยอดคู่มือเครื่องมืองานคอนกรีต", // ชื่อบทความ
    subtitle: "ทุกสิ่งที่คุณต้องรู้สำหรับโครงการคอนกรีตครั้งต่อไปของคุณ", // คำบรรยายย่อ
    excerpt:
      "การทำงานกับคอนกรีตต้องใช้เครื่องมือเฉพาะสำหรับการผสม การเท และการตกแต่ง คู่มือนี้ครอบคลุมสิ่งจำเป็น...", // สรุปย่อ
    thumbnail: "https://images-ext-1.discordapp.net/external/lDez8zF30Mc56V8zonVcmJ92U-RYcvPl3c9MYW_q8cQ/https/ahaslides.com/wp-content/uploads/2023/07/SEO3797-thumb.webp?format=webp&width=1418&height=744",
    aiHint: "concrete tools",
    difficulty: "Medium",
    duration: "2-3 hours read/prep",
    cost: "Varies",
    content: `
      <h2 id="intro">บทนำสู่งานคอนกรีต</h2>
      <p>งานคอนกรีตอาจท้าทายแต่ก็คุ้มค่า การมีเครื่องมือที่เหมาะสมเป็นสิ่งสำคัญสำหรับความสำเร็จ</p>
      <img src="https://images-ext-1.discordapp.net/external/lDez8zF30Mc56V8zonVcmJ92U-RYcvPl3c9MYW_q8cQ/https/ahaslides.com/wp-content/uploads/2023/07/SEO3797-thumb.webp?format=webp&width=1418&height=744" alt="Concrete work in progress" data-ai-hint="concrete pouring"/>
      <h3 id="mixing">1. เครื่องมือผสม</h3>
      <p>เครื่องผสมคอนกรีตคุณภาพดีช่วยประหยัดเวลาและแรงงานได้มาก สำหรับงานขนาดเล็ก รถเข็นและพลั่วอาจเพียงพอ</p>
      <h3 id="pouring">2. เครื่องมือสำหรับเทและเกลี่ย</h3>
      <p>ใช้พลั่ว คราด และเกรียงเกลี่ยคอนกรีตเพื่อกระจายคอนกรีตให้สม่ำเสมอ</p>
      <h3 id="finishing">3. เครื่องมือตกแต่งผิว</h3>
      <p>เกรียงฉาบ, เกรียงขัด, และเกรียงทำขอบ เป็นสิ่งจำเป็นสำหรับการตกแต่งผิวที่เรียบเนียนและเป็นมืออาชีพ</p>
      <h3 id="safety">4. อุปกรณ์ความปลอดภัย</h3>
      <p>อย่าลืมให้ความสำคัญกับความปลอดภัยเสมอโดยการสวมอุปกรณ์ที่เหมาะสม เช่น ถุงมือ รองเท้าบู๊ต และอุปกรณ์ป้องกันดวงตา</p>
    `,
    relatedProducts: mockTools
      .filter((tool) => tool.categories.includes("construction"))
      .slice(0, 3), // สินค้าที่เกี่ยวข้อง
    toc: [
      { id: "intro", title: "บทนำ", level: 2 }, // สารบัญ
      { id: "mixing", title: "เครื่องมือผสม", level: 3 },
      { id: "pouring", title: "การเทและเกลี่ย", level: 3 },
      { id: "finishing", title: "เครื่องมือตกแต่งผิว", level: 3 },
      { id: "safety", title: "อุปกรณ์ความปลอดภัย", level: 3 },
    ],
    date: "2023-10-26",
  },
  {
    slug: "basic-home-repairs", // รหัสบทความ
    title: "5 อันดับงานซ่อมแซมบ้านพื้นฐานที่คุณทำเองได้", // ชื่อบทความ
    excerpt:
      "ประหยัดเงินและรู้สึกดีกับตัวเองด้วยการซ่อมแซมบ้านง่ายๆ ด้วยเครื่องมือพื้นฐาน", // สรุปย่อ
    thumbnail: "https://cdn.mscdirect.com/global/images/ProductImages/6010082AB-21.jpg",
    aiHint: "home repair",
    difficulty: "Easy",
    duration: "1-2 ชั่วโมงต่อการซ่อม",
    cost: "ต่ำ",
    date: "2023-09-15",
  },
  {
    slug: "painting-like-a-pro", // รหัสบทความ
    title: "เทคนิคการทาสีเพื่อให้ได้งานระดับมืออาชีพ", // ชื่อบทความ
    excerpt:
      "เรียนรู้เทคนิคง่ายๆ เพื่อให้โครงการทาสีครั้งต่อไปของคุณดูเหมือนทำโดยมืออาชีพ", // สรุปย่อ
    thumbnail: "https://m.media-amazon.com/images/I/71p3Aa71f6L.jpg",
    aiHint: "painting wall",
    difficulty: "Easy",
    duration: "3-4 ชั่วโมง",
    cost: "ต่ำ",
    date: "2023-11-10",
  },
  {
    slug: "choosing-right-ladder", // รหัสบทความ
    title: "การเลือกบันไดที่เหมาะสมกับงาน", // ชื่อบทความ
    excerpt:
      "ความปลอดภัยต้องมาก่อน! คู่มือนี้ช่วยคุณเลือกบันไดที่เหมาะสมสำหรับงานต่างๆ รอบบ้าน", // สรุปย่อ
    thumbnail: "https://m.media-amazon.com/images/I/71zR26KYFiL._AC_UF350,350_QL80_.jpg",
    aiHint: "ladder safety",
    difficulty: "Easy",
    duration: "อ่าน 30 นาที",
    cost: "หลากหลาย",
    date: "2023-10-01",
  },
  {
    slug: "garden-tool-maintenance", // รหัสบทความ
    title: "การบำรุงรักษาเครื่องมือทำสวนที่จำเป็น", // ชื่อบทความ
    excerpt:
      "ดูแลเครื่องมือทำสวนของคุณให้อยู่ในสภาพดีเยี่ยมด้วยเคล็ดลับการบำรุงรักษาง่ายๆ เพื่ออายุการใช้งานที่ยาวนานและประสิทธิภาพที่ดี", // สรุปย่อ
    thumbnail: "https://cdnimg.webstaurantstore.com/images/products/large/568037/2105351.jpg",
    aiHint: "gardening tools",
    difficulty: "Easy",
    duration: "1 hour",
    cost: "Very Low",
    date: "2023-09-20",
  },
];

export const beginnerAdviceArticles: BlogArticle[] = mockBlogArticles.filter(
  (article) => article.difficulty === "Easy"
);

export const getToolById = (id: string): Tool | undefined =>
  mockTools.find((tool) => tool.id === id);
export const getBlogArticleBySlug = (slug: string): BlogArticle | undefined =>
  mockBlogArticles.find((article) => article.slug === slug);

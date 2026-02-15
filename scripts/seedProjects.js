// Run this script once to seed your projects to Firestore
// Usage: node scripts/seedProjects.js

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs, deleteDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyARtTGBQaz8hhtab6x57ihoxeCBbLh0_w4",
  authDomain: "pukutamwanza.firebaseapp.com",
  projectId: "pukutamwanza",
  storageBucket: "pukutamwanza.firebasestorage.app",
  messagingSenderId: "812558327380",
  appId: "1:812558327380:web:965cfb6353b4c4cb5f57c1",
  measurementId: "G-9K7C1FZK4E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Projects data - edit this array to add/modify projects
// bgColor and textColor use color names: mustard, red, teal, navy, coral, purple, forest, pink, white, black
const projects = [
  {
    order: 1,
    title: "Maptics",
    tagline: "ZAMBIA VISUALIZED",
    description: "3D data visualization of Zambia's key domains",
    story: "Maptics brings Zambia's data to life through stunning 3D renders and animations. Explore economic indicators, political boundaries, and electoral zones with an interactive dashboard that reveals trends over time.",
    category: "DATA VISUALIZATION",
    link: "https://maptics.firebaseapp.com/",
    image: "/maptics.png",
    features: ["3D Renders", "Dashboards", "Geo Data"],
    bgColor: "teal",
    textColor: "black",
  },
  {
    order: 2,
    title: "Ngwee",
    tagline: "REDEFINING MUSIC OWNERSHIP",
    description: "Buy and Sell limited edition music",
    story: "Ngwee is a revolutionary platform that brings the concept of limited edition releases to digital music. Artists can mint exclusive tracks, and fans can own, trade, and collect rare musical pieces.",
    category: "PASSION PROJECT",
    link: "https://ngwee.web.app/",
    image: "/ngwee.png",
    features: ["Limited Editions", "Artist Direct", "Collectibles"],
    bgColor: "mustard",
    textColor: "black",
  },
  {
    order: 3,
    title: "PIA",
    tagline: "AI-POWERED IDENTITY",
    description: "ADK-powered identity management solution",
    story: "Personal Identity Agent leverages the power of AI through ADK to create intelligent identity management solutions for the modern web.",
    category: "AI DEVELOPMENT",
    link: "https://pia-xi.vercel.app/",
    image: "/Personal Identity Agent - ADK.png",
    features: ["AI-Powered", "ADK", "Smart Auth"],
    bgColor: "pink",
    textColor: "white",
  },
  {
    order: 4,
    title: "Git Switcher",
    tagline: "SEAMLESS ACCOUNT MANAGEMENT",
    description: "NPM package for seamless git account management",
    story: "A developer tool that makes switching between multiple Git accounts effortless. Published on NPM for the global developer community.",
    category: "DEVELOPER TOOLS",
    link: "https://www.npmjs.com/package/@variant96/git-account-switcher",
    image: "/git account switcher - npm.png",
    features: ["NPM Package", "CLI Tool", "Multi-Account"],
    bgColor: "mustard",
    textColor: "black",
  },
  {
    order: 5,
    title: "Sellr",
    tagline: "E-COMMERCE WITH PERSONALITY",
    description: "An e-commerce platform with personality",
    story: "Sellr brings character to online shopping. A full-stack e-commerce solution that allows businesses to create unique storefronts that reflect their brand personality.",
    category: "FULL STACK",
    link: "https://sellr-af.web.app/",
    image: "/selr.png",
    features: ["Custom Stores", "Payments", "Analytics"],
    bgColor: "navy",
    textColor: "white",
  },
  {
    order: 6,
    title: "Narative",
    tagline: "CONVERSATIONS TO INSIGHTS",
    description: "Translate conversations into insight",
    story: "Narative transforms raw conversations and data into actionable insights. Powerful analytics and processing tools for understanding customer feedback and communications.",
    category: "DATA PROCESSING",
    link: "https://narative-af.web.app/",
    image: "/narative.png",
    features: ["Analytics", "NLP", "Insights"],
    bgColor: "forest",
    textColor: "white",
  },
  {
    order: 7,
    title: "Academia",
    tagline: "KNOWLEDGE SHARED",
    description: "Stackoverflow inspired Education platform",
    story: "Academia creates a community-driven learning environment where students and educators can share knowledge, ask questions, and grow together.",
    category: "DATA MODELS",
    link: "https://academia-af.web.app/",
    image: "/acadamia.png",
    features: ["Q&A Platform", "Community", "Learning"],
    bgColor: "purple",
    textColor: "white",
  },
  {
    order: 8,
    title: "Kamba",
    tagline: "WHERE LOVE MEETS DIGITAL",
    description: "The premier digital-first wedding experience in Zambia.",
    story: "Kamba reimagines wedding planning for the digital age. From creating beautiful digital invitations to managing RSVPs and sharing memories.",
    category: "WEB DEVELOPMENT",
    link: "https://kamba-5ab4b.web.app/",
    image: "/kamba.png",
    features: ["Digital Invites", "RSVP", "Memories"],
    bgColor: "teal",
    textColor: "black",
  },
  {
    order: 9,
    title: "Slushy",
    tagline: "SELF-CARE MADE SIMPLE",
    description: "Book your next self care appointment easily",
    story: "Slushy transforms how people discover and book self-care services. From salons to spas, the platform offers a seamless booking experience with real-time availability.",
    category: "UI/UX DESIGN",
    link: "https://slushystore.web.app",
    image: "/slushy.png",
    features: ["Easy Booking", "Real-time", "Reviews"],
    bgColor: "red",
    textColor: "white",
  },
  {
    order: 10,
    title: "Digiport",
    tagline: "IDENTITY REIMAGINED",
    description: "Digital passport solution demo",
    story: "Digiport demonstrates the future of digital identity management. A secure, user-friendly approach to passport and identity verification in the digital age.",
    category: "WEB APPLICATION",
    link: "https://digiport-dc.web.app/",
    image: "/Digiport.png",
    features: ["Secure ID", "Verification", "Digital-First"],
    bgColor: "coral",
    textColor: "white",
  },
  {
    order: 11,
    title: "EATI",
    tagline: "ELECTRONIC ACCESS TO INFORMATION",
    description: "Electronic Access to Information",
    story: "EATI (formerly ZANIS) provides electronic access to government information, making public data accessible and transparent for all citizens.",
    category: "GOVERNMENT TECH",
    link: "https://zanis-app.web.app/",
    image: "/zanis.png",
    features: ["Gov Tech", "Public Data", "Transparency"],
    bgColor: "navy",
    textColor: "white",
  },
];

async function seedProjects() {
  console.log("Seeding projects to Firestore...\n");

  for (const project of projects) {
    try {
      const docRef = await addDoc(collection(db, "projects"), project);
      console.log(`Added: ${project.title} (${docRef.id})`);
    } catch (error) {
      console.error(`Failed to add ${project.title}:`, error.message);
    }
  }

  console.log(`\nDone!`);
  process.exit(0);
}

seedProjects().catch((error) => {
  console.error("Error seeding projects:", error);
  process.exit(1);
});

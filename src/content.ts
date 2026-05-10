import { Heart, ShieldCheck, Star, Sun, Anchor, Camera } from 'lucide-react';

export const CONTENT = {
  // 1. CINEMATIC INTRO
  intro: {
    stages: [
      "Today, we pause to celebrate a special man.",
      "A man of value, strength, responsibility, and quiet impact.",
      "A father, a husband, and a life worthy of honour.",
    ],
    mainTitle: "HAPPY BIRTHDAY",
    name: "Engr Efe",
    buttonText: "ENTER THE CELEBRATION"
  },

  // 2. HERO SECTION
  hero: {
    title: "Happy Birthday, ",
    displayName: "Engr Efe",
    subtitle: "“A sincere celebration of a good man, a loving husband, and a father worthy of honour.”",
    smallLine: "May this new chapter bring peace, strength, favour, wisdom, and joy.",
    buttonText: "Read the Birthday Message",
    // Update these URLs with actual image paths
    mainPhotoUrl: "", 
    mainPhotoLabel: "https://res.cloudinary.com/drcroxtgs/image/upload/v1778415039/IMG-20260508-WA0100_wismr0.jpg"
  },

  // 3. MAIN BIRTHDAY MESSAGE (TYPING ANIMATION)
  birthdayMessage: [
    "Dear Engr Efe,",
    "",
    "Today, I celebrate you with sincere respect and honour.",
    "",
    "I may not have known you for many years, but in the time I have spent around your family, one thing is clear: you are a man who carries value, responsibility, and quiet strength.",
    "",
    "You are seen not only as Engr Efe, but as a good father, a loving husband, and a man whose presence brings stability and meaning to his home.",
    "",
    "A good man does not always need many words to be recognized. Sometimes, his life speaks through the way he cares, provides, leads, supports, and stands for the people entrusted to him.",
    "",
    "On this special day, I pray that God blesses you with greater wisdom, sound health, peace of mind, divine favour, open doors, and lasting joy.",
    "",
    "May your home continue to enjoy love, unity, laughter, and blessings. May this new year of your life be more peaceful, more fruitful, and more fulfilling than the years before.",
    "",
    "Happy Birthday, Engr Efe.",
    "",
    "You are honoured.",
    "You are appreciated.",
    "You are celebrated."
  ],

  // 4. CAPTURED MOMENTS (GALLERY)
  gallery: {
    title: "Captured Moments",
    images: [
      { 
        url: "https://res.cloudinary.com/drcroxtgs/image/upload/v1778415039/IMG-20260508-WA0098_sakexd.jpg", // Add actual image URL here
        label: "Supporting Photo 1", 
        title: "" 
      },
      { 
        url: "", // Add actual image URL here
        label: "Supporting Photo 2", 
        title: "Honoured Today" 
      },
      { 
        url: "", // Add actual image URL here
        label: "Main Cover Photo", 
        title: "A Man Worth Celebrating" 
      },
    ]
  },

  // 5. BLESSING CARDS
  blessings: [
    { 
      title: "Peace", 
      icon: Anchor, 
      text: "May your heart and home continue to enjoy peace." 
    },
    { 
      title: "Strength", 
      icon: ShieldCheck, 
      text: "May God give you strength for every responsibility and every new season." 
    },
    { 
      title: "Favour", 
      icon: Star, 
      text: "May doors open for you in beautiful and unexpected ways." 
    },
    { 
      title: "Joy", 
      icon: Sun, 
      text: "May your life and family continue to enjoy laughter, love, and fulfilment." 
    }
  ],

  // 6. FINAL CLOSING
  closing: {
    typingText: "Engr Efe, may this new chapter be brighter, stronger, more peaceful, and more rewarding.",
    mainPraise: "Happy Birthday.",
    subPraise: [
      "Keep leading.",
      "Keep loving.",
      "Keep standing strong."
    ],
    signature: "With honour and sincere celebration.",
    buttonText: "CELEBRATE AGAIN"
  },

  // FOOTER
  footer: "A Sincere Birthday Tribute to Engr Efe"
};

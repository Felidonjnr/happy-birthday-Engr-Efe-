import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Heart, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  RotateCcw,
  Camera,
  Sun,
  Anchor
} from 'lucide-react';

// --- Shared Components ---

const GoldSparkle = () => {
  const triggerConfetti = () => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#F5C542', '#FFFFFF'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#F5C542', '#FFFFFF'] });
    }, 250);
  };

  return { triggerConfetti };
};

// --- Sections ---

const CinematicIntro = ({ onEnter }: { onEnter: () => void }) => {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 3500),
      setTimeout(() => setStage(3), 6000),
      setTimeout(() => setStage(4), 8500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-primary flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.p
              key="text1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-xl md:text-2xl font-serif italic text-accent/80"
            >
              Today, we pause to celebrate a special man.
            </motion.p>
          )}
          {stage === 2 && (
            <motion.p
              key="text2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-xl md:text-2xl font-serif italic text-white/90"
            >
              A man of value, strength, responsibility, and quiet impact.
            </motion.p>
          )}
          {stage === 3 && (
            <motion.p
              key="text3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-xl md:text-2xl font-serif italic text-white/90"
            >
              A father, a husband, and a life worthy of honour.
            </motion.p>
          )}
          {stage >= 4 && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-widest text-accent mb-2">
                HAPPY BIRTHDAY
              </h1>
              <h2 className="text-2xl md:text-4xl font-serif tracking-widest text-white border-y border-accent/20 py-4 inline-block px-8 uppercase">
                Engr Efe
              </h2>
              <div className="pt-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onEnter}
                  className="bg-accent px-10 py-4 text-primary font-bold tracking-[0.2em] rounded-full gold-glow transition-all text-xs"
                >
                  ENTER THE CELEBRATION
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col items-center justify-center bg-secondary relative overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#D4AF37_0%,_transparent_60%)] opacity-10 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-10 max-w-4xl"
      >
        <div className="relative mb-10 inline-block">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-accent/40 p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-full border border-white/10 bg-slate-800 flex items-center justify-center text-accent/20 overflow-hidden relative">
              <Camera size={48} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-6">
                <span className="text-[10px] tracking-[0.3em] font-bold text-white/50">MAIN COVER PHOTO</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6">
          Happy Birthday, <span className="text-accent underline decoration-accent/20 underline-offset-8">Engr Efe</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-serif italic mb-4 max-w-2xl mx-auto leading-relaxed">
          “A sincere celebration of a good man, a loving husband, and a father worthy of honour.”
        </p>
        <p className="text-slate-500 font-medium tracking-wide text-sm md:text-base uppercase">
          May this new chapter bring peace, strength, favour, wisdom, and joy.
        </p>

        <div className="mt-12 flex justify-center">
          <a href="#message" className="px-8 py-4 glass-card border-accent/20 text-accent font-semibold flex items-center gap-2 hover:bg-accent/5 transition-all text-sm uppercase tracking-widest">
            Read the Birthday Message <ChevronRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const TypingMessage = () => {
  const fullMessageLines = [
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
  ];

  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex < fullMessageLines.length) {
      const currentFullLine = fullMessageLines[currentLineIndex];
      
      if (currentCharIndex < currentFullLine.length) {
        const timer = setTimeout(() => {
          setDisplayLines(prev => {
            const next = [...prev];
            if (!next[currentLineIndex]) next[currentLineIndex] = "";
            next[currentLineIndex] = currentFullLine.substring(0, currentCharIndex + 1);
            return next;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 20); // Faster typing for better flow
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, currentFullLine === "" ? 150 : 400); 
        return () => clearTimeout(timer);
      }
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex, currentCharIndex, isTyping]);

  const handleReplay = () => {
    setDisplayLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsTyping(true);
  };

  return (
    <section id="message" className="py-24 bg-primary px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-14 relative shadow-2xl min-h-[500px]">
          <div className="prose prose-invert max-w-none font-serif text-lg md:text-xl leading-relaxed text-slate-200">
            {displayLines.map((line, idx) => (
              <p key={idx} className={`${line === "" ? "h-4" : "mb-4"}`}>
                {line}
                {isTyping && idx === currentLineIndex && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-6 bg-accent/60 ml-1 align-middle"
                  />
                )}
              </p>
            ))}
          </div>

          {!isTyping && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 flex justify-end"
            >
              <button 
                onClick={handleReplay}
                className="flex items-center gap-2 text-accent/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <RotateCcw size={14} /> Replay Message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const CapturedMoments = () => {
  const images = [
    { label: "Supporting Photo 1", title: "A Family Man" },
    { label: "Supporting Photo 2", title: "Honoured Today" },
    { label: "Main Cover Photo", title: "A Man Worth Celebrating" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">Captured Moments</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-white/5 group-hover:border-accent/20 transition-all shadow-xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 bg-gradient-to-br from-slate-800 to-primary">
                  <Camera size={32} className="mb-2 opacity-10" />
                  <span className="font-bold tracking-widest text-[9px] opacity-10 uppercase">{img.label}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm font-bold text-white tracking-wide">{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlessingCards = () => {
  const cards = [
    { title: "Peace", icon: Anchor, text: "May your heart and home continue to enjoy peace." },
    { title: "Strength", icon: ShieldCheck, text: "May God give you strength for every responsibility and every new season." },
    { title: "Favour", icon: Star, text: "May doors open for you in beautiful and unexpected ways." },
    { title: "Joy", icon: Sun, text: "May your life and family continue to enjoy laughter, love, and fulfilment." }
  ];

  return (
    <section className="py-24 bg-primary px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 border-accent/5 hover:border-accent/20 transition-all text-center group"
          >
            <div className="w-10 h-10 mx-auto bg-accent/5 rounded-full flex items-center justify-center text-accent/40 group-hover:text-gold transition-colors mb-6">
              <card.icon size={20} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">{card.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Closing = ({ onReset }: { onReset: () => void }) => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const targetText = "Engr Efe, may this new chapter be brighter, stronger, more peaceful, and more rewarding.";

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent && typedText.length < targetText.length) {
      const timer = setTimeout(() => {
        setTypedText(targetText.substring(0, typedText.length + 1));
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [showContent, typedText]);

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-b from-secondary to-primary relative px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center z-10">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-10"
            >
              <div className="min-h-[4rem]">
                <p className="text-xl md:text-2xl font-serif italic text-accent leading-relaxed">
                  {typedText}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
                className="space-y-4"
              >
                <div className="text-3xl md:text-5xl font-serif font-bold text-white space-y-3">
                  <p>Happy Birthday.</p>
                  <p className="text-2xl md:text-3xl opacity-80">Keep leading.</p>
                  <p className="text-2xl md:text-3xl opacity-80">Keep loving.</p>
                  <p className="text-2xl md:text-3xl opacity-80">Keep standing strong.</p>
                </div>

                <p className="pt-10 text-slate-500 italic text-lg">
                  With honour and sincere celebration.
                </p>
                
                <div className="pt-16">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onReset}
                    className="bg-transparent border border-accent/40 text-accent px-10 py-3.5 rounded-full font-bold tracking-[0.2em] hover:bg-accent hover:text-primary transition-all text-xs"
                  >
                    CELEBRATE AGAIN
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { triggerConfetti } = GoldSparkle();

  const handleEnter = () => {
    setShowIntro(false);
    triggerConfetti();
  };

  const handleReset = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main className="selection:bg-accent/30 selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CinematicIntro onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <TypingMessage />
            <CapturedMoments />
            <BlessingCards />
            <Closing onReset={handleReset} />
            
            <footer className="py-12 bg-primary border-t border-white/5 text-center px-6">
              <p className="text-slate-600 text-[10px] font-bold tracking-[0.4em] uppercase">
                A Sincere Birthday Tribute to Engr Efe
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

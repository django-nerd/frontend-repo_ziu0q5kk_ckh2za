import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Welcome to LilyCare',
    body: 'Pelvic health support designed for you. Gentle, guided, and effective.',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Guided Kegel Exercises',
    body: 'Follow calming sessions tailored from beginner to very advanced.',
    img: 'https://images.unsplash.com/photo-1511660418-9f85bfe547d6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Track & Learn',
    body: 'Log bladder entries, view insights, and read friendly articles.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Stay Motivated',
    body: 'Daily tips, streaks, and badges keep you inspired.',
    img: 'https://images.unsplash.com/photo-1518893060709-7c08b98bd7b2?q=80&w=1200&auto=format&fit=crop',
  },
];

function OnboardingCarousel() {
  const [index, setIndex] = React.useState(0);
  const current = slides[index];

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-[#e6e0f8]">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-80 lg:h-96">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={current.img}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#6f5fb3]/40 to-transparent" />
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#4b3b77]">{current.title}</h3>
            <p className="mt-3 text-[#5f4d95]">{current.body}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button onClick={prev} className="inline-flex items-center gap-1 rounded-xl px-4 py-2 bg-[#f2ecff] text-[#4b3b77] hover:bg-[#e9e1ff] transition-colors">
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#7a6bcc]' : 'bg-[#d9d2f2]'}`} />
              ))}
            </div>
            <button onClick={next} className="inline-flex items-center gap-1 rounded-xl px-4 py-2 bg-[#7a6bcc] text-white hover:bg-[#6d5fbd] transition-colors">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingCarousel;

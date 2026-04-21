'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Globe2, Phone, Mail } from 'lucide-react';

interface Poster {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  ctaText?: string;
  ctaLink?: string;
}

const posters: Poster[] = [
  {
    id: 'azerbaijan',
    title: 'Precision in Azerbaijan',
    description: 'Strategic opportunities in Baku for technical and management professionals. Comprehensive relocation and visa support included.',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&auto=format&fit=crop',
    tags: ['Strategic', 'Baku', 'Management'],
    ctaText: 'Apply Now',
    ctaLink: '/contact',
  },
  {
    id: 'norway',
    title: 'Scandinavian Excellence',
    description: 'High-demand roles in Norways energy and infrastructure sectors. Join a world-class workforce in a premium environment.',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop',
    tags: ['Norway', 'Engineering', 'Infrastructure'],
    ctaText: 'Learn More',
    ctaLink: '/contact',
  },
  {
    id: 'europe',
    title: 'European Pathways',
    description: 'Elite placements across Spain, Croatia, and Italy. We facilitate end-to-end processing for professionals and specialists.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop',
    tags: ['Spain', 'Croatia', 'Italy'],
    ctaText: 'Get Started',
    ctaLink: '/contact',
  },
];

export function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (poster: Poster, index: number) => {
    setSelectedPoster(poster);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedPoster(null);
  };

  const nextPoster = () => {
    const newIndex = (currentIndex + 1) % posters.length;
    setCurrentIndex(newIndex);
    setSelectedPoster(posters[newIndex]);
  };

  const prevPoster = () => {
    const newIndex = (currentIndex - 1 + posters.length) % posters.length;
    setCurrentIndex(newIndex);
    setSelectedPoster(posters[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posters.map((poster, index) => (
          <motion.div
            key={poster.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative cursor-pointer"
            onClick={() => openModal(poster, index)}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-background border border-foreground/10 dark:border-white/5 hover:border-violet-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-violet-500/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={poster.imageUrl}
                  alt={poster.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 dark:from-[#0a0c10] dark:via-[#0a0c10]/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {poster.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-wider rounded-full border border-violet-500/20 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {poster.title}
                    </h3>
                    <p className="text-secondary text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium">
                      {poster.description}
                    </p>
                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-sm font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                      Explore Opportunity <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-background/95 dark:bg-[#0a0c10]/95 backdrop-blur-2xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full bg-background dark:bg-[#111318] rounded-[2.5rem] border border-foreground/10 dark:border-white/10 shadow-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(40px)',
              }}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 bg-foreground/5 dark:bg-white/5 hover:bg-foreground/10 dark:hover:bg-white/10 text-foreground dark:text-white p-3 rounded-full backdrop-blur-md border border-foreground/10 dark:border-white/10 transition-all"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 h-full gap-0">
                <div className="relative aspect-square md:aspect-auto h-full min-h-[400px]">
                  <Image
                    src={selectedPoster.imageUrl}
                    alt={selectedPoster.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background dark:to-[#111318] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-[#111318] to-transparent md:hidden" />
                </div>

                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedPoster.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-black uppercase tracking-tighter text-violet-600 dark:text-white bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/20 dark:border-violet-500/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {selectedPoster.title}
                  </h2>
                  <p className="text-secondary text-lg leading-relaxed mb-10 font-medium">
                    {selectedPoster.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a
                      href={selectedPoster.ctaLink}
                      className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-violet-600/20"
                    >
                      {selectedPoster.ctaText || 'Apply Now'}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-foreground/10 dark:border-white/5">
                    <div>
                      <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                        <Phone size={16} className="text-violet-600 dark:text-violet-500" /> WhatsApp
                      </h4>
                      <p className="text-secondary text-sm font-medium">+60 11-23377911</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                        <Mail size={16} className="text-violet-600 dark:text-violet-500" /> Email
                      </h4>
                      <p className="text-secondary text-sm font-medium">info@rrgemini.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {posters.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 hidden md:flex">
                  <button onClick={prevPoster} className="text-foreground/40 dark:text-white/40 hover:text-foreground dark:hover:text-white transition-colors">
                    <ChevronLeft size={32} />
                  </button>
                  <div className="flex gap-2">
                    {posters.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-violet-600 dark:bg-violet-500 w-8' : 'bg-foreground/10 dark:bg-white/10'} transition-all`} />
                    ))}
                  </div>
                  <button onClick={nextPoster} className="text-foreground/40 dark:text-white/40 hover:text-foreground dark:hover:text-white transition-colors">
                    <ChevronRight size={32} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


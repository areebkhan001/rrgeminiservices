'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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
    title: 'Work Opportunities in Azerbaijan',
    description: 'Join our growing team in Baku, Azerbaijan. Multiple positions available with attractive salary packages and fast-track visa processing.',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&auto=format&fit=crop',
    tags: ['Warehouse', 'Engineering', 'Management'],
    ctaText: 'Apply Now',
    ctaLink: '/contact',
  },
  {
    id: 'norway',
    title: 'Norway Work Permit',
    description: 'Explore career opportunities in Norway across mechanical, electrical, and warehouse sectors. Experience required.',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop',
    tags: ['Norway', 'Work Permit', 'Engineering'],
    ctaText: 'Learn More',
    ctaLink: '/contact',
  },
  {
    id: 'europe',
    title: 'Work Permits: Spain, Croatia & Italy',
    description: 'Apply for work visas in Spain, Croatia, and Italy. We handle pre-execution, visa application, and post-visa processing.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop',
    tags: ['Europe', 'Spain', 'Croatia', 'Italy'],
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={poster.imageUrl}
                  alt={poster.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{poster.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{poster.description}</p>
                    <button
                      onClick={() => openModal(poster, index)}
                      className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      type="button"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {poster.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-medium rounded-full border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Click to expand hint */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click to expand
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                type="button"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              {posters.length > 1 && (
                <>
                  <button
                    onClick={prevPoster}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    type="button"
                    aria-label="Previous poster"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPoster}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    type="button"
                    aria-label="Next poster"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={selectedPoster.imageUrl}
                    alt={selectedPoster.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedPoster.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-indigo-500/10 text-indigo-400 text-sm font-medium rounded-full border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {selectedPoster.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedPoster.description}
                    </p>
                  </div>

                  {selectedPoster.ctaLink && (
                    <div className="mt-8">
                      <a
                        href={selectedPoster.ctaLink}
                        className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-indigo-500/20"
                      >
                        {selectedPoster.ctaText || 'Learn More'}
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}

                  {/* Contact info */}
                  <div className="mt-8 p-6 bg-neutral-800/50 rounded-xl border border-neutral-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex items-center gap-2">
                        <span className="text-indigo-400">📞</span>
                        <a href="tel:+60172391700" className="hover:text-indigo-400 transition-colors">
                          +60 17 239 1700
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-indigo-400">📧</span>
                        <a href="mailto:info@rrgeminiservices.com" className="hover:text-indigo-400 transition-colors">
                          info@rrgeminiservices.com
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-indigo-400">🌐</span>
                        <a href="https://rrgeminiservices.com" className="hover:text-indigo-400 transition-colors">
                          rrgeminiservices.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination indicator */}
              <div className="flex justify-center gap-2 pb-6">
                {posters.map((poster, index) => (
                  <button
                    key={poster.id}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSelectedPoster(posters[index]);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-indigo-500 w-8' : 'bg-neutral-600'
                    }`}
                    type="button"
                    aria-label={`Go to poster ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

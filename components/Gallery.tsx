"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Images, X } from "lucide-react";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Grab the event collection (Future Builders Connect — Bengaluru)
  const event = gallery[0];
  const photos = event?.photos || [];

  const isLightboxOpen = activePhotoIndex !== null;

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev === 0 ? photos.length - 1 : prev - 1) : null
    );
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev === photos.length - 1 ? 0 : prev + 1) : null
    );
  }, [photos.length]);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleClose, handlePrev, handleNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  const currentPhoto = activePhotoIndex !== null ? photos[activePhotoIndex] : null;

  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-28 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Behind The Scenes</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Gallery &amp; <span className="text-gradient-gold">Moments</span>
        </h2>
        <p className="mt-4 text-base text-ink-muted">
          Moments from my experience at the AWS Student Community&apos;s Future Builders Connect program in Bengaluru.
        </p>
      </div>

      {/* Main Single Event Card */}
      {event && (
        <div className="mx-auto mt-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onClick={() => setActivePhotoIndex(0)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-void/90 shadow-glass transition-all duration-500 hover:border-gold/40 hover:shadow-gold-glow/20"
          >
            <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden sm:h-[480px]">
              {/* Ambient backdrop glow from photo */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={event.image}
                  alt=""
                  fill
                  unoptimized
                  className="scale-110 object-cover opacity-20 blur-2xl"
                />
                <div className="absolute inset-0 bg-void/50" />
              </div>

              {/* Representative Event Photo — object-fit: contain (no cropping) */}
              <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6 pb-28 sm:pb-32">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="select-none object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Gradient scrims for readable overlays */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-void via-void/85 to-transparent" />

              {/* Top Badges */}
              <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between sm:inset-x-6 sm:top-6">
                <span className="flex items-center gap-2 rounded-full border border-gold/30 bg-void/80 px-3.5 py-1.5 font-mono text-xs text-gold backdrop-blur-md shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  {event.subtitle || "AWS Event"}
                </span>

                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-void/80 px-3.5 py-1.5 font-mono text-xs font-medium text-ink backdrop-blur-md shadow-lg">
                  <Images size={14} className="text-gold" />
                  {photos.length} photos
                </span>
              </div>

              {/* Mini-collage preview strip in bottom-right corner (visible on sm+) */}
              <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 rounded-2xl border border-white/15 bg-void/85 p-2 backdrop-blur-md shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:flex">
                {photos.slice(1, 4).map((p) => (
                  <div
                    key={p.id}
                    className="relative flex h-14 w-12 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized
                      sizes="48px"
                      className="object-contain p-0.5"
                    />
                  </div>
                ))}
                <div className="grid h-14 w-12 place-items-center rounded-lg border border-gold/30 bg-gold/15 font-mono text-xs font-semibold text-gold">
                  +{photos.length - 4}
                </div>
              </div>

              {/* Bottom Card Content Info */}
              <div className="absolute inset-x-0 bottom-0 z-10 max-w-xl p-6 sm:p-8">
                <p className="mb-1 font-mono text-xs tracking-wider text-gold uppercase">Featured Event</p>
                <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold sm:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-gold group-hover:underline">
                  <Eye size={14} /> Click to view all {photos.length} photos &rarr;
                </div>
              </div>

              {/* Skewed hover shimmer sweep */}
              <div className="pointer-events-none absolute -inset-y-full inset-x-0 -skew-y-6 bg-white/10 opacity-0 transition-all duration-700 group-hover:translate-y-full group-hover:opacity-100 z-10" />
            </div>
          </motion.div>
        </div>
      )}

      {/* Lightbox / Modal Viewer for all 12 photos */}
      <AnimatePresence>
        {isLightboxOpen && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[92vh] max-h-[850px] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-void/90 p-4 shadow-2xl backdrop-blur-2xl sm:p-6"
            >
              {/* Modal Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs font-medium text-gold sm:text-sm">
                    {activePhotoIndex! + 1} of {photos.length}
                  </span>
                  <div>
                    <h4 className="line-clamp-1 font-display text-sm font-semibold text-ink sm:text-base">
                      {currentPhoto.title}
                    </h4>
                    <p className="hidden text-xs text-ink-muted sm:block">
                      {event.title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  aria-label="Close photo viewer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-ink transition-colors hover:bg-white/15"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Photo Display Area */}
              <div className="relative my-3 flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-black/50">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous photo"
                  className="absolute left-2 z-20 rounded-full border border-white/15 bg-void/85 p-2.5 text-ink shadow-xl backdrop-blur-md transition-all hover:bg-gold hover:text-void active:scale-95 sm:left-4 sm:p-3"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Photo with correct aspect ratio (object-fit: contain — complete image, no cropping) */}
                <div className="relative flex h-full w-full items-center justify-center p-2 sm:p-4">
                  <Image
                    key={currentPhoto.id}
                    src={currentPhoto.image}
                    alt={currentPhoto.title}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="select-none object-contain"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next photo"
                  className="absolute right-2 z-20 rounded-full border border-white/15 bg-void/85 p-2.5 text-ink shadow-xl backdrop-blur-md transition-all hover:bg-gold hover:text-void active:scale-95 sm:right-4 sm:p-3"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div className="flex shrink-0 items-center gap-2 overflow-x-auto px-1 py-1">
                {photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(idx)}
                    aria-label={`Jump to photo ${idx + 1}`}
                    className={`relative h-12 w-10 shrink-0 overflow-hidden rounded-lg border transition-all sm:h-14 sm:w-12 ${
                      idx === activePhotoIndex
                        ? "scale-105 border-gold ring-2 ring-gold/50 shadow-gold-glow/40"
                        : "border-white/15 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      unoptimized
                      sizes="48px"
                      className="object-contain p-0.5 bg-black/40"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

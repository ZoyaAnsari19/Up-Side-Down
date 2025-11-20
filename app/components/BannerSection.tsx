"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutoBannerCarousel() {
  const banners = [
    {
      image: "/banner/ups1.png",
      title: "The Upper World: Zombie Battle",
      subtitle: "Futuristic City of Light and Energy",
    },
    {
      image: "/banner/ups2.png",
      title: "The Last Planet",
      subtitle: "Save Planet",
    },
    {
      image: "/banner/ups3.png",
      title: "Team War",
      subtitle: "Survive the Undead Apocalypse",
    },
    {
      image: "/banner/ups4.png",
      title: "One Last Fight",
      subtitle: "Ninja Life in the desert",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, banners.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, banners.length]);

  const goToSlide = (index: any) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen min-h-[250px] max-h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Images */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-[4000ms] ease-out ${
                index === currentIndex ? "scale-105" : "scale-100"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover max-w-full max-h-full select-none"
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </div>
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center px-2 md:px-6 w-full max-w-6xl">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 absolute"
              }`}
            >
              <h1 className="font-extrabold text-white drop-shadow-2xl text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2 md:mb-3 lg:mb-4 leading-tight animate-slideIn pointer-events-auto">
                {banner.title}
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium drop-shadow-lg animate-slideIn delay-200 pointer-events-auto">
                {banner.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-1 xs:left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-7 h-7 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-1 xs:right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-7 h-7 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next slide"
        tabIndex={0}
      >
        <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 xs:gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-6 h-1.5 xs:w-8 xs:h-2 sm:w-10 sm:h-2.5 bg-white"
                : "w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-30 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full pointer-events-none">
          <span className="text-white text-[10px] xs:text-xs sm:text-sm font-medium">Paused</span>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
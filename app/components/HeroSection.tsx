// components/HeroSection.tsx
'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/img/girl.png"
          alt="BATTLEGROUNDS Hero"
          fill
          priority
          className="object-cover object-top"
          quality={95}
        />
        {/* Gradient Overlay - for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Left Side - Content */}
      <div className="relative md:mt-20 z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 md:w-1/2 lg:w-2/5">
        {/* Title */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-4 drop-shadow-2xl">
          Up-Side Down: BATTLEGROUNDS
        </h1>

        {/* Tagline */}
        <div className="mb-6 sm:mb-8">
          <p className="text-blue-400 text-base xs:text-lg sm:text-xl lg:text-2xl font-bold tracking-widest uppercase">
            LAND, LOOT, SURVIVE!
          </p>
          <p className="text-white text-sm xs:text-base sm:text-lg font-medium mt-2">
            Play Up-Side Down: BATTLEGROUNDS for free.
          </p>
        </div>

        {/* Platform Buttons */}
        <div className="flex flex-col gap-3 max-w-sm">
          {[
            { name: 'Steam', icon: 'Steam' },
            { name: 'Epic Games', icon: 'Epic' },
            { name: 'PlayStation', icon: 'PS' },
            { name: 'Xbox', icon: 'Xbox' },
          ].map((platform) => (
            <button
              key={platform.name}
              className="group flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/60 rounded-lg transition-all duration-300 hover:bg-white/20 w-full"
            >
              {/* Icon Placeholder */}
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">{platform.icon}</span>
              </div>
              <span className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">
                {platform.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 md:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
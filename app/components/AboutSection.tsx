"use client";

import React from 'react';
import { Sword, Globe, Zap, Users, Target, Gamepad2 } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Dual World Battles",
      description: "Switch between two realms during fights for tactical advantage."
    },
    {
      icon: <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "3D Realistic Gameplay",
      description: "High-quality visuals and cinematic animations."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multiplayer Mode",
      description: "Play solo, duo, or team battles with players worldwide."
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Smooth Controls & Fast Action",
      description: "Designed for a seamless, lag-free experience."
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Exclusive Battleground Arena",
      description: "All maps and missions are made only for battle enthusiasts."
    }
  ];

  return (
    <section className="relative min-h-screen bg-black py-12 sm:py-20 overflow-hidden" id='about'>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] animate-[grid_20s_linear_infinite]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/20 rounded-full blur-[60px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/20 rounded-full blur-[60px] sm:blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-400/10 border border-purple-400/30 rounded-full mb-4 sm:mb-6">
            <Sword className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-wider">About</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Up Side Down
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
            Up Side Down is a next-generation 3D battlegrounds game website designed exclusively for players who live for action, strategy, and survival. This isn't just another game — it's a complete battleground universe where every fight takes place across two parallel worlds filled with cinematic visuals, futuristic weapons, and intense real-time battles.
          </p>
        </div>

        {/* Two Worlds Section */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            Two Worlds. One War.
          </h3>
          <p className="text-gray-300 text-base sm:text-lg text-center max-w-3xl sm:max-w-4xl mx-auto mb-8 sm:mb-12">
            In Up Side Down, the battlefield is split between two powerful realms —
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Upper World */}
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">The Upper World</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  A bright, futuristic city filled with floating structures and neon energy.
                </p>
              </div>
            </div>

            {/* Down World */}
            <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl hover:border-red-400/50 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-400 rounded-full animate-pulse" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">The Down World</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  A dark, chaotic battleground ruled by destruction and survival.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-base sm:text-lg text-center max-w-3xl sm:max-w-4xl mx-auto mt-6 sm:mt-8">
            Players can shift between worlds during combat, creating dynamic, unpredictable fights that redefine how battlegrounds are played.
          </p>
        </div>

        {/* Built for Battleground Lovers */}
        <div className="mb-12 sm:mb-20 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <Sword className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            Built for Battleground Lovers
          </h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
            This website has been created only for battlegrounds players — no casual games, no distractions. Every mode, every arena, and every update is centered around realistic 3D war gameplay with smooth animation, detailed environments, and intense team fights.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 text-center flex items-center justify-center gap-2 sm:gap-3">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            Key Features
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <div className="text-blue-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We Built Section */}
        <div className="relative">
          <div className="max-w-3xl sm:max-w-4xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-400/30 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
              💥 Why We Built Up Side Down
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-center">
              The main goal behind Up Side Down is simple — <span className="text-blue-400 font-bold">To give gamers one dedicated platform only for battlegrounds.</span> No extra modes, no mini-games — just pure, high-energy, realistic battle experiences.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center">
              This website is made for players who love war-style gameplay, enjoy teamwork, and crave a truly immersive 3D action world.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(30px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
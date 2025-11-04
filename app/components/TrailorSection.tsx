"use client";

import React, { useState } from 'react';
import { Play, Calendar, Info } from 'lucide-react';

export default function LatestGamesSection() {
  const games = [
    {
      id: 1,
      title: 'Grand Theft Auto Online',
      category: 'Games / Grand Theft Auto Online',
      description: 'Explore GTA Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.',
      releaseDate: 'Available Now',
      videoUrl: '/video/trailer.mp4',
      thumbnail: '/img/img1.png',
      platforms: ['PS5', 'PS4', 'Xbox Series X|S', 'Xbox One', 'PC']
    },
    {
      id: 2,
      title: 'Cyberpunk 2077: Phantom Liberty',
      category: 'Games / RPG',
      description: 'Dive into a spy-thriller expansion set in the dangerous district of Dogtown. Experience an all-new story with next-gen graphics.',
      releaseDate: 'Coming Dec 2025',
      videoUrl: '/video/trailer2.mp4',
      thumbnail: '/img/img2.png',
      platforms: ['PS5', 'Xbox Series X|S', 'PC']
    },
    {
      id: 3,
      title: 'Red Dead Redemption 3',
      category: 'Games / Action Adventure',
      description: 'Return to the Wild West in this epic tale of outlaws and redemption. Experience stunning landscapes and immersive gameplay.',
      releaseDate: 'Coming 2026',
      videoUrl: '/video/ups-trailer.mp4',
      thumbnail: '/img/img3.png',
      platforms: ['PS5', 'Xbox Series X|S', 'PC']
    }
  ];

  const [activeGame, setActiveGame] = useState(0);

  return (
    <section className="relative min-h-screen bg-black py-20" id='trailer'>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Latest Games
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover the newest and most exciting games coming soon
          </p>
        </div>

        {/* Main Game Display */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
          {/* Video Trailer Container */}
          <div className="relative w-full aspect-video bg-black">
            <video
              key={games[activeGame].id} // or key={games[activeGame].videoUrl}
              className="w-full h-full object-cover"
              controls
              poster={games[activeGame].thumbnail}
            >
              <source src={games[activeGame].videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Below Video */}
          <div className="p-8 sm:p-10 lg:p-12">
            {/* Category */}
            <p className="text-gray-400 text-sm sm:text-base mb-3 flex items-center gap-2">
              <span>{games[activeGame].category}</span>
            </p>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {games[activeGame].title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              {games[activeGame].description}
            </p>

            {/* Release Date */}
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-6">
              <Calendar className="w-5 h-5" />
              <span>{games[activeGame].releaseDate}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Play className="w-5 h-5 fill-current" />
                Watch Trailer
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Info className="w-5 h-5" />
                Learn More
              </button>
            </div>

            {/* Platform Icons */}
            <div className="flex flex-wrap items-center gap-4">
              {games[activeGame].platforms.map((platform) => (
                <div
                  key={platform}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg"
                >
                  <span className="text-white font-semibold text-sm">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Selector */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(index)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeGame === index
                ? 'border-blue-400 shadow-lg shadow-purple-400/20'
                : 'border-gray-700 hover:border-gray-500'
                }`}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-lg line-clamp-2">
                    {game.title}
                  </h4>
                  <p className="text-blue-400 text-sm font-semibold mt-1">
                    {game.releaseDate}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
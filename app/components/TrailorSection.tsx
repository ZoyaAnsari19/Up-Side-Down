"use client";

import React, { useState } from "react";
import { Play, Calendar, Info } from "lucide-react";

export default function LatestGamesSection() {
  const games = [
    {
      id: 1,
      title: "Grand Theft Auto Online",
      category: "Games / Grand Theft Auto Online",
      description:
        "Explore GTA Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.",
      releaseDate: "Available Now",
      videoUrl: "/video/trailer.mp4",
      thumbnail: "/img/img1.png",
      platforms: ["PS5", "PS4", "Xbox Series X|S", "Xbox One", "PC"],
    },
    {
      id: 2,
      title: "Cyberpunk 2077: Phantom Liberty",
      category: "Games / RPG",
      description:
        "Dive into a spy-thriller expansion set in the dangerous district of Dogtown. Experience an all-new story with next-gen graphics.",
      releaseDate: "Coming Dec 2025",
      videoUrl: "/video/trailer2.mp4",
      thumbnail: "/img/img2.png",
      platforms: ["PS5", "Xbox Series X|S", "PC"],
    },
    {
      id: 3,
      title: "Red Dead Redemption 3",
      category: "Games / Action Adventure",
      description:
        "Return to the Wild West in this epic tale of outlaws and redemption. Experience stunning landscapes and immersive gameplay.",
      releaseDate: "Coming 2026",
      videoUrl: "/video/ups-trailer.mp4",
      thumbnail: "/img/img3.png",
      platforms: ["PS5", "Xbox Series X|S", "PC"],
    },
  ];

  const [activeGame, setActiveGame] = useState(0);

  return (
    <section
      className="relative min-h-screen bg-black py-12 sm:py-20"
      id="trailer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
            Latest Games
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
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
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Category */}
            <p className="text-gray-400 text-sm mb-2 sm:mb-3 flex items-center gap-2">
              <span>{games[activeGame].category}</span>
            </p>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
              {games[activeGame].title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              {games[activeGame].description}
            </p>

            {/* Release Date */}
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-4 sm:mb-6">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{games[activeGame].releaseDate}</span>
            </div>

            {/* Functional "Watch Trailer" Button */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <button
                onClick={() => {
                  const video = document.querySelector("video");
                  if (video) {
                    video.play();
                    video.controls = true; // Ensure controls are visible
                  }
                }}
                className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 
               bg-gradient-to-r from-blue-600 to-purple-600 
               hover:from-blue-700 hover:to-purple-700 
               text-white font-bold rounded-full 
               transition-all duration-300 shadow-lg hover:shadow-xl 
               text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                Watch Trailer
              </button>
            </div>

            {/* Platform Icons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {games[activeGame].platforms.map((platform) => (
                <div
                  key={platform}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg"
                >
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Selector */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {games.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(index)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeGame === index
                  ? "border-blue-400 shadow-lg shadow-purple-400/20"
                  : "border-gray-700 hover:border-gray-500"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-32 xs:h-40 sm:h-48 overflow-hidden">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h4 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                    {game.title}
                  </h4>
                  <p className="text-blue-400 text-xs sm:text-sm font-semibold mt-1">
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

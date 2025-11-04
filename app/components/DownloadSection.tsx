"use client";

import React, { useState, useEffect } from 'react';
import { Download, Monitor, Smartphone, Apple, ArrowRight, Check, Star, Shield, Zap, Cloud, Users, PlayCircle, Settings, HardDrive, Wifi, ChevronRight, Sparkles } from 'lucide-react';

export default function UpsideDownLauncher() {
  const [activeTab, setActiveTab] = useState('windows');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images
  const carouselImages = [
    {
      url: "/add/add1.png",
      title: 'Lady Nova: The Sword Commander',
      tag: 'New Release'
    },
    {
      url: "/add/add2.png",
      title: 'The Mira: The Warrior of Lyra-X Planet',
      tag: 'Trending'
    },
    {
      url: "/add/add3.png",
      title: 'The Gangster: City of Omega Wolf',
      tag: 'Top Rated'
    },
    {
      url: '/add/add4.png',
      title: 'Rico: Battle for Magician ',
      tag: 'Most Popular'
    },
    {
      url: '/add/add5.png',
      title: 'Last Stand: A Real World',
      tag: 'Most Popular'
    }
  ];

  useEffect(() => {
    if (isDownloading && downloadProgress < 100) {
      const timer = setTimeout(() => {
        setDownloadProgress(prev => Math.min(prev + 2, 100));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isDownloading, downloadProgress]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
  };

  const platforms = [
    { id: 'windows', name: 'Windows', icon: Monitor, size: '82.6 MB', version: '2.5.0' },
    { id: 'mac', name: 'macOS', icon: Apple, size: '95.3 MB', version: '2.5.0' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, size: '45.8 MB', version: '2.4.8' }
  ];

  const features = [
    {
      icon: Cloud,
      title: 'Cloud Saves',
      description: 'Sync your game progress across all devices seamlessly'
    },
    {
      icon: Zap,
      title: 'Auto-Updates',
      description: 'Keep your games up-to-date automatically'
    },
    {
      icon: Shield,
      title: 'Secure Downloads',
      description: 'Industry-leading security and virus protection'
    },
    {
      icon: Users,
      title: 'Social Integration',
      description: 'Connect with friends and join the community'
    }
  ];

  const systemReqs = {
    windows: {
      os: 'Windows 10/11 (64-bit)',
      processor: 'Intel Core i3 or AMD equivalent',
      memory: '4 GB RAM',
      storage: '200 MB available space',
      additional: 'Internet connection required'
    },
    mac: {
      os: 'macOS 11.0 or later',
      processor: 'Apple Silicon or Intel processor',
      memory: '4 GB RAM',
      storage: '200 MB available space',
      additional: 'Internet connection required'
    },
    mobile: {
      os: 'iOS 14+ / Android 10+',
      processor: 'ARM-based processor',
      memory: '3 GB RAM',
      storage: '100 MB available space',
      additional: 'Internet connection required'
    }
  };

  const benefits = [
    'Exclusive rewards and in-game bonuses',
    'Early access to new game releases',
    'Seamless library management',
    'Cross-platform game purchases',
    'Achievement tracking and leaderboards',
    'Direct game launching from desktop'
  ];

  const currentPlatform = platforms.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 bg-black to-slate-950 relative overflow-hidden" id='download'>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/40 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-75"></div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-180 shadow-2xl">
                  <Monitor className="w-8 h-8 text-white transform rotate-180" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Up-Side Down Launcher
                </h1>
                <p className="text-xs sm:text-sm text-gray-400">All your games, one place</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-400 font-semibold">v{currentPlatform?.version}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">New Version Available</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Ultimate
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Gaming Hub
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Download the Up-Side Down Launcher to access your complete game library, 
              manage downloads, and stay connected with the gaming community.
            </p>

            {/* Platform Selector */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Select Platform</p>
              <div className="flex flex-wrap gap-3">
                {platforms.map(platform => {
                  const Icon = platform.icon;
                  return (
                    <button
                      key={platform.id}
                      onClick={() => {
                        setActiveTab(platform.id);
                        setIsDownloading(false);
                        setDownloadProgress(0);
                      }}
                      className={`group relative px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                        activeTab === platform.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md scale-105'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <div className="text-left">
                          <div className="text-base font-bold">{platform.name}</div>
                          <div className="text-xs opacity-75">{platform.size}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Download Button */}
            <div className="space-y-4">
              {!isDownloading ? (
                <button
                  onClick={handleDownload}
                  className="group relative w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Download className="w-6 h-6" />
                    <span className="text-lg">Download for {currentPlatform?.name}</span>
                  </div>
                </button>
              ) : (
                <div className="space-y-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300 font-semibold">Downloading...</span>
                    <span className="text-purple-400 font-bold">{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 relative"
                      style={{ width: `${downloadProgress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  {downloadProgress === 100 && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                      <Check className="w-5 h-5" />
                      <span>Download Complete!</span>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center sm:text-left">
                By downloading, you agree to the Terms of Service and Privacy Policy
              </p>
            </div>
          </div>

          {/* Right Content - Featured Games Carousel */}
          <div className="relative h-[600px] lg:h-[800px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Carousel Container */}
              <div className="relative h-full">
                {carouselImages.map((image, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">{image.tag}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                      <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2">
                          <PlayCircle className="w-5 h-5" />
                          Play Now
                        </button>
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white font-semibold transition-all duration-300 border border-white/20">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 group"
                >
                  <ChevronRight className="w-6 h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 group"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Dot Indicators */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentSlide
                          ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
          Powerful Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits & System Requirements */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Requirements */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center">
                <HardDrive className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">System Requirements</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(systemReqs[activeTab as keyof typeof systemReqs]).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-blue-400 uppercase w-24 flex-shrink-0">{key}:</span>
                  <span className="text-sm text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-2xl border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400">
              © 2025 Up-Side Down Games. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
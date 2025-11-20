// components/Header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { toggleMenu } from '../redux/features/uiSlice';
import Link from 'next/link';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { mobileMenuOpen } = useSelector((state: RootState) => state.ui);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Dark Overlay - Click to Close (All Screens) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
          onClick={() => dispatch(toggleMenu())}
        />
      )}

      {/* Sidebar - Slide In/Out (All Screens) */}
      <div
        className={`fixed left-0 top-0 h-full w-64 sm:w-72 md:w-80 bg-black border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 text-xs text-white font-black tracking-wider">
              Up-Side Down
            </div>
            <h1 className="text-white font-black text-lg tracking-wider">
              BATTLEGROUNDS
            </h1>
          </div>
          <button
            onClick={() => dispatch(toggleMenu())}
            className="text-white hover:text-blue-400 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-4">
          {[
            { name: 'GAME INFO', href: '#about' },
            { name: 'NEWS', href: '#trailer' },
            { name: 'STORE', href: '#store' },
            { name: 'CONTACT', href: '#contact' },
            { name: 'DAWNLOAD', href: '#download' },
            { name: 'SUPPORT', href: '#support' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => dispatch(toggleMenu())}
              className="text-white hover:text-blue-400 hover:bg-white/5 font-bold text-sm text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group"
            >
              <span>{item.name}</span>
              <ChevronDown
                size={16}
                className="text-white/50 group-hover:text-blue-400 transition-transform group-hover:rotate-180"
              />
            </Link>
          ))}

        </nav>
      </div>

      {/* Main Header - Solid Black */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-black transition-all duration-300 ${scrolled ? 'shadow-xl' : ''
          }`}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-20">
            {/* Toggle Button - Works on ALL Screens */}
            <button
              onClick={() => dispatch(toggleMenu())}
              className="text-white hover:text-purple-600 transition-colors p-1 z-50"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none max-w-[50%]">
              <div className="flex flex-col items-center space-y-0.5">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 text-[10px] sm:text-xs text-white font-black tracking-wider">
                  Up-Side Down
                </div>
                <h1 className="text-white font-black text-sm sm:text-2xl tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                  BATTLEGROUNDS
                </h1>
              </div>
            </div>

            {/* Play Now */}
            <button onClick={() => {
              const section = document.getElementById("download");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white px-2 sm:px-6 py-1.5 sm:py-2.5 font-black text-xs sm:text-sm tracking-wider transition-all duration-200 shadow-md hover:shadow-lg ml-auto">
              Download
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
"use client";

import React, { useRef, useState } from 'react';


export default function NewsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const featuredNews = {
        id: 1,
        category: 'UP-SIDE DOWN: BATTLEGROUNDS',
        title: 'BGMI: Online Multipayer Game',
        image: '/img/pubg.png',
        date: 'February 9, 2018'
    };

    const sideNews = [
        {
            id: 2,
            category: 'UP-SIDE DOWN: BATTLEGROUNDS',
            title: 'Doomsday: Last Survivors',
            image: '/img/servivors.png',
            date: 'October 28, 2025'
        },
        {
            id: 3,
            category: 'UP-SIDE DOWN: BATTLEGROUNDS',
            title: 'Free Fire Max ',
            image: '/img/freefire.png',
            date: 'December 4, 2017'
        },
        {
            id: 4,
            category: 'UP-SIDE DOWN: BATTLEGROUNDS',
            title: 'Call of Duty: Mobile',
            image: '/img/callofduty.jpg',
            date: 'September 30, 2019'
        },
        {
            id: 5,
            category: 'UP-SIDE DOWN: BATTLEGROUNDS',
            title: 'Shadow Fight 4: Arena',
            image: '/img/shadowfight.jpg',
            date: 'November 3, 2020'
        },
        {
            id: 6,
            category: 'UP-SIDE DOWN: BATTLEGROUNDS',
            title: 'Car Battle: Road Warrior',
            image: '/img/car.png',
            date: 'October 15, 2025'
        }
    ];

    const handleWheel = (e: any) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scrollContainerRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
            scrollContainerRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

      const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.cursor = 'grab';
            }
        }
    };

    return (
        <section className="bg-black py-12 sm:py-16 px-4" id='store'>
            <div className="max-w-7xl mx-auto">
                {/* Section Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Featured News - Large Card */}
                    <div className="lg:col-span-2 group cursor-pointer">
                        <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 opacity-60" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/40 text-4xl xs:text-5xl sm:text-6xl font-bold">BATTLEGROUNDS</span>
                                <img
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-red-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                                    {featuredNews.category}
                                </span>
                                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                                    {featuredNews.title}
                                </h2>
                                <p className="text-gray-300 text-xs sm:text-sm">{featuredNews.date}</p>
                            </div>
                        </div>
                    </div>

                    {/* Side News - Small Cards with Mouse Scroll */}
                    <div 
                        ref={scrollContainerRef}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="lg:space-y-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-4 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scroll-smooth cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {sideNews.map((news, index) => (
                            <div
                                key={news.id}
                                className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors flex-shrink-0 w-64 xs:w-72 sm:w-80 lg:w-auto"
                            >
                                <div className="flex gap-3 sm:gap-4 p-3 sm:p-4">
                                    {/* Thumbnail */}
                                    <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 bg-red-600 text-white text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-1 sm:mb-2">
                                            {news.category}
                                        </span>
                                        <h3 className="text-white text-sm xs:text-base sm:text-sm font-bold mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-gray-400 text-[10px] xs:text-xs sm:text-xs">{news.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
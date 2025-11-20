"use client";

import React, { useState } from 'react';
import { Search, HelpCircle, User, Link2, Trash2, Settings, Gamepad2, Shield, ChevronRight, Clock } from 'lucide-react';

export default function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const supportCategories = [
    {
      id: 'account',
      title: 'Account Support',
      icon: User,
      items: [
        { title: 'Reset My Password', desc: 'Recover your account access' },
        { title: 'Change Account Details', desc: 'Update your profile information' },
        { title: 'Account Linking', desc: 'Connect your gaming platforms' },
        { title: 'Delete Account & Information', desc: 'Remove your data permanently' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Verification',
      icon: Shield,
      items: [
        { title: 'Set Up 2-Step Verification', desc: 'Add extra security to your account' },
        { title: '2-Step Verification Guide', desc: 'Protect your Rockstar Games account' }
      ]
    },
    {
      id: 'game',
      title: 'Game Support',
      icon: Gamepad2,
      items: [
        { title: 'Network Troubleshooter', desc: 'Fix connectivity issues' },
        { title: 'GTA+ Membership Support', desc: 'Manage your subscription' },
        { title: 'Steam Launcher Setup', desc: 'Link your Steam account' },
        { title: 'Xbox Integration', desc: 'Connect your Xbox Gamertag' }
      ]
    }
  ];

  const recentArticles = [
    {
      title: 'System & Account Updates Guide',
      date: 'June 17, 2025',
      category: 'Updates'
    },
    {
      title: 'Account Security Best Practices',
      date: 'January 10, 2025',
      category: 'Security'
    },
    {
      title: 'GTA+ Membership Information',
      date: 'March 4, 2025',
      category: 'GTA V'
    },
    {
      title: 'Xbox PC App GTA+ Subscription',
      date: 'April 15, 2025',
      category: 'GTA+'
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? supportCategories 
    : supportCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id='support'>
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-lg border-b border-white/10 top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Support Center</h1>
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400">Available 24/7 to assist you</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Search */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              How can we help you?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
              Search for articles or browse by category
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles..."
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-xs sm:text-sm md:text-base ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Topics
          </button>
          {supportCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-xs sm:text-sm md:text-base ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Support Categories */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {filteredCategories.map(category => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
                  <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-b border-white/10">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
                    {category.items.map((item, idx) => (
                      <button
                        key={idx}
                        className="w-full group bg-white/5 hover:bg-white/10 rounded-xl p-3 sm:p-4 transition-all text-left border border-transparent hover:border-white/10"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar - Recent Articles */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden sticky top-20 sm:top-24">
              <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-b border-white/10">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Recent Articles</h3>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                {recentArticles.map((article, idx) => (
                  <button
                    key={idx}
                    className="w-full group text-left bg-white/5 hover:bg-white/10 rounded-lg p-2.5 sm:p-3 md:p-4 transition-all border border-transparent hover:border-white/10"
                  >
                    <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                      <span className="text-[10px] xs:text-xs font-semibold text-blue-400 bg-blue-500/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-base font-medium text-white mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-[10px] xs:text-xs text-gray-500">{article.date}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Help Badge - 24/7 Support (Color NOT Changed) */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl border border-green-500/20 p-3 sm:p-4 md:p-6 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">24/7 Support</h4>
              <p className="text-xs sm:text-sm text-gray-300">
                We're available to assist you anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 mt-8 sm:mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            Need more help? Contact our support team
          </p>
        </div>
      </footer>
    </div>
  );
}
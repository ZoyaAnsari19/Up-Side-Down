"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";

export default function AttractiveFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Safety Center", href: "#" },
      { name: "Community Guidelines", href: "#" },
      { name: "Terms of Service", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Events", href: "#" },
      { name: "Documentation", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", label: "Youtube", color: "hover:text-red-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" }
  ];

  return (
    <footer className="w-full relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden" id="contact">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Newsletter */}
        <div className="border-b border-white/10 w-full flex justify-center">
          <div className="w-full max-w-screen-xl mx-auto px-4 py-8 sm:px-6 md:py-12 flex flex-col items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Stay in the Loop
            </h3>
            <form
              className="w-full flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full xs:w-64 sm:w-80 md:w-[320px] px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
              />
              <button className="w-full xs:w-64 sm:w-80 md:w-[320px] px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-4
              lg:grid-cols-5
              gap-8 md:gap-10
              w-full
            "
          >
            {/* Brand/Social */}
            <div className="lg:col-span-2 flex flex-col gap-4 justify-between min-w-[180px]">
              <div className="w-full flex justify-center md:justify-start">
                <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl font-bold">
                  UB
                </span>
                <span className="text-4xl sm:text-3xl md:text-2xl lg:text-xl font-bold mt-3 ml-2 whitespace-nowrap text-ellipsis overflow-hidden">
                  Up-Side Down Battleground
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Immerse yourself in epic gaming experiences. Join millions of players worldwide in the ultimate gaming universe.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>up-side@gameapp.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>San Francisco, CA 94102</span>
                </div>
              </div>
              <div className="flex gap-2 mt-2 justify-start md:justify-start flex-nowrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 whitespace-nowrap bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* Links Blocks */}
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 w-full">
          <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Up-Side Down Battleground. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by passionate gamers</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

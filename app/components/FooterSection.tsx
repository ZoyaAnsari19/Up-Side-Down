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
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* Newsletter */}
       {/* Newsletter Section - Now Fully Functional */}
<div className="border-b border-white/10 w-full flex justify-center">
  <div className="w-full max-w-screen-xl mx-auto px-4 py-6 sm:py-8 md:py-10 flex flex-col items-center gap-4">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
      Stay in the Loop
    </h3>

    <form 
      className="w-full flex flex-col xs:flex-row justify-center items-center gap-3" 
      onSubmit={(e) => {
        e.preventDefault();
        const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
        if (emailInput?.value.trim() && emailInput.value.includes('@')) {
          alert("Thank you for subscribing! We'll keep you updated with the latest news.");
          emailInput.value = '';
        } else {
          alert("Please enter a valid email address.");
        }
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="w-full xs:w-64 md:w-80 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base transition-all"
      />
      <button 
        type="submit"
        className="w-full xs:w-64 md:w-80 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-purple-500/25"
      >
        Subscribe <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  </div>
</div>

        {/* Main Footer Content */}
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand + Contact + Social */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl font-bold">
                  UB
                </div>
                <span className="text-2xl sm:text-3xl font-bold">Up-Side Down Battleground</span>
              </div>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Immerse yourself in epic gaming experiences. Join millions of players worldwide in the ultimate gaming universe.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white"><Mail className="w-4 h-4 text-blue-400" /> up-side@gameapp.com</div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white"><Phone className="w-4 h-4 text-blue-400" /> +1 (555) 123-4567</div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white"><MapPin className="w-4 h-4 text-blue-400" /> San Francisco, CA 94102</div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all ${social.color}`}>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company + Support Side-by-Side (even on mobile) */}
            <div className="flex flex-row gap-10 sm:gap-16">
              {/* Company */}
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors block">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors block">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              © {currentYear} Up-Side Down Battleground. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by passionate gamers
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
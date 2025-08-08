"use client";

import { Search, Play, Eye, Clock, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import { getVideosByCategory, formatViews } from '@/lib/videos';
import { VideoCard } from '@/components/VideoCard';

export default function ComedyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Menu açılınca body scroll'u engelle
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  const categories = [
    { name: "All", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
    { name: "Documentaries", href: "/documentaries" },
    { name: "Anime", href: "/anime" },
    { name: "Comedy", href: "/comedy" },
    { name: "Action", href: "/action" },
    { name: "Drama", href: "/drama" },
    { name: "Horror", href: "/horror" },
    { name: "Sci-Fi", href: "/sci-fi" },
    { name: "Thriller", href: "/thriller" },
    { name: "Romance", href: "/romance" }
  ];

  // Get comedy videos from the video library
  const comedyVideos = getVideosByCategory('comedy');

  return (
    <div className="min-h-screen bg-white md:bg-gray-900 text-gray-900 md:text-white">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu-panel md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-gray-900 text-title">Categories</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-900 hover:bg-gray-100 btn-professional focus-professional"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-0">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="mobile-category-item block focus-professional"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="category-arrow">→</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black border-b border-gray-800 shadow-professional w-full">
        <div className="mobile-header-inner md:max-w-7xl md:mx-auto md:px-4 py-3">
          <div className="flex items-center justify-between relative">
            {/* Mobile Hamburger + Logo */}
            <div className="flex items-center w-full md:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-gray-800 btn-professional focus-professional hamburger-menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-8 w-8" />
              </Button>

              {/* Professional Poneo Logo with Animated P */}
              <Link href="/" className="logo-container">
                <span className="logo-p">P</span>
                <span className="logo-rest">oneo</span>
              </Link>
            </div>

            {/* Desktop Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search comedy videos..."
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-10 text-body focus-professional"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-gray-700 hover:bg-gray-600 btn-professional"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Desktop User Area - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 btn-professional focus-professional">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu - Desktop only */}
      <nav className="hidden md:block bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`text-gray-300 hover:text-white whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-caption font-medium btn-professional focus-professional ${
                  category.name === "Comedy" ? "bg-red-600 text-white" : ""
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-white mb-2">Comedy</h1>
          <p className="text-gray-600 md:text-gray-400">Laugh out loud with hilarious content, witty humor, and comedic masterpieces</p>
        </div>

        <div className="flex gap-8">
          {/* Main Video Grid */}
          <main className="flex-1">
            {/* Reklam Alanı */}
            <div className="mb-8 p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-lg font-bold">😂 COMEDY SPONSORLAR</div>
                <div className="text-sm opacity-90">Komedi İçerikleri Premium Reklam</div>
              </div>
              <div className="mt-2 text-xs opacity-75">Comedy kategorisi reklam entegrasyonu alanı</div>
            </div>

            <div className="video-grid">
              {comedyVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  showCategory={false}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-12 pt-8 border-t border-gray-200 md:border-gray-800">
              <span className="text-gray-600 md:text-gray-400 text-caption">Showing {comedyVideos.length} comedy videos, Page 1</span>
              <div className="flex space-x-2 ml-6">
                <Button variant="outline" size="sm" disabled className="bg-gray-100 md:bg-gray-800 border-gray-300 md:border-gray-700 btn-professional">
                  Previous
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 btn-professional">1</Button>
                <Button variant="outline" size="sm" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 btn-professional">2</Button>
                <Button variant="outline" size="sm" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 btn-professional">3</Button>
                <Button variant="outline" size="sm" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 btn-professional">...</Button>
                <Button variant="outline" size="sm" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 btn-professional">10</Button>
                <Button variant="outline" size="sm" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 btn-professional">
                  Next
                </Button>
              </div>
            </div>
          </main>

          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-72 bg-black rounded-xl p-6 h-fit shadow-professional-lg">
            <h2 className="text-white text-title mb-6">Comedy Subgenres</h2>
            <div className="space-y-3">
              {["Stand-up", "Sketch Comedy", "Sitcom", "Mockumentary", "Parody", "Romantic Comedy", "Dark Comedy", "Slapstick", "Satire", "Improvisational", "Musical Comedy", "Family Comedy"].map((genre) => (
                <a
                  key={genre}
                  href="#"
                  className="block text-gray-300 hover:text-white text-body py-2 transition-colors hover:translate-x-2 duration-300 focus-professional"
                >
                  → {genre}
                </a>
              ))}
            </div>

            {/* Featured Comedy Videos */}
            <div className="mt-10">
              <h3 className="text-white text-title mb-6">Top Comedy</h3>
              <div className="space-y-4">
                {comedyVideos.slice(0, 4).map((video) => (
                  <Link key={`featured-${video.id}`} href={`/video/${video.id}`} className="flex space-x-3 group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-14 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <p className="text-white text-caption font-medium line-clamp-2 group-hover:text-gray-200 transition-colors">{video.title}</p>
                      <p className="text-gray-400 text-label mt-1">{formatViews(video.views)} views</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Comedy Video Archive Dropdown */}
            <div className="mt-10">
              <h3 className="text-white text-title mb-6">Humor Style</h3>
              <select className="w-full bg-gray-800 border border-gray-700 text-white text-body rounded-lg px-4 py-3 focus-professional">
                <option>Family Friendly</option>
                <option>Adult Humor</option>
                <option>Clean Comedy</option>
                <option>Dark Humor</option>
                <option>All Styles</option>
              </select>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-16 shadow-professional">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-wrap justify-between items-center text-gray-400 text-caption">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="hover:text-white transition-colors focus-professional">About</a>
              <a href="#" className="hover:text-white transition-colors focus-professional">Privacy</a>
              <a href="#" className="hover:text-white transition-colors focus-professional">Terms</a>
              <a href="#" className="hover:text-white transition-colors focus-professional">Contact</a>
              <a href="#" className="hover:text-white transition-colors focus-professional">DMCA</a>
            </div>
            <div className="text-caption">
              <p className="content-text">Poneo.com - Premium video streaming platform. All rights reserved.</p>
              <p className="content-text mt-1">Enjoy unlimited access to thousands of videos and movies.</p>
              <p className="content-text mt-2 text-gray-300">🔞 Poneo.com – Ücretsiz HD +18 Video İzleme Platformu. Sansürsüz ve reklamsız porno video platformu. En güncel erotik içerikler; amatör, lezbiyen, grup seks, anal, Türkçe altyazılı gibi kategoriler. Hızlı video oynatıcı ve mobil uyumlu tasarım.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState, useEffect, use } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVideoById, getVideosByCategory, formatViews, formatDate, Video } from '@/lib/videos';
import { VideoCard } from '@/components/VideoCard';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Calendar, Clock, Share2, ThumbsUp, ThumbsDown, Heart, X, Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface VideoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function VideoPage({ params }: VideoPageProps) {
  const resolvedParams = use(params);
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [showAdModal, setShowAdModal] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Reklam entegrasyonu URL'i - Gerçek reklam partneri URL'i buraya eklenecek
  const AD_PARTNER_URL = "https://example.com/premium-ads?ref=poneo&source=age-verification";

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

  useEffect(() => {
    const foundVideo = getVideoById(resolvedParams.id);
    if (!foundVideo) {
      notFound();
      return;
    }

    setVideo(foundVideo);

    // Get all videos and shuffle them randomly
    const allVideos = getVideosByCategory(); // Get all videos without category filter
    const filteredVideos = allVideos.filter((v: Video) => v.id !== foundVideo.id);

    // Shuffle array randomly (Fisher-Yates algorithm)
    const shuffleArray = (array: Video[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const randomVideos = shuffleArray(filteredVideos).slice(0, 10);
    setRelatedVideos(randomVideos);
  }, [resolvedParams.id]);

  // Sayfa açıldığında reklam uyarısı göster
  useEffect(() => {
    setShowAdModal(true);
  }, []);

  // Menu açılınca body scroll'u engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  const handleWatchVideo = () => {
    // Reklam entegrasyonu - Yeni sekmede reklam partner sitesini aç
    window.open(AD_PARTNER_URL, '_blank');

    // Kısa bir gecikme sonrası video izlemeye başla (reklam açılma süresi)
    setTimeout(() => {
      setShowAdModal(false);
      setIsVideoLoaded(true);
    }, 500);
  };

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
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
                    placeholder="Search videos..."
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
                  className="text-gray-300 hover:text-white whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-caption font-medium btn-professional focus-professional"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6 relative">
                {isVideoLoaded ? (
                  <iframe
                    src={`https://iframe.mediadelivery.net/embed/${video.embedId}?autoplay=true&preload=true`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    referrerPolicy="origin-when-cross-origin"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">Video Hazır</h3>
                      <p className="text-gray-400 text-sm mb-4">Video izlemeye başlamak için aşağıdaki butona tıklayın</p>
                      <Button onClick={handleWatchVideo} className="bg-red-600 hover:bg-red-700">
                        Videoyu İzle
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Reklam Alanı - Video Player Altında */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-lg font-bold">📺 REKLAM ALANI</div>
                  <div className="text-sm opacity-90">Premium İçerik Sponsorları</div>
                </div>
                <div className="mt-2 text-xs opacity-75">Bu alan video sayfası reklam entegrasyonu için hazırlanmıştır</div>
              </div>

              {/* Video Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 md:text-white mb-4 leading-tight">
                    {video.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-600 text-white hover:bg-blue-700 capitalize text-sm px-3 py-1"
                    >
                      {video.category.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-4 text-gray-400 md:text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{formatViews(video.views)} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(video.uploadDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Like
                    </Button>
                    <Button variant="outline" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 flex items-center gap-2">
                      <ThumbsDown className="w-4 h-4" />
                      Dislike
                    </Button>
                    <Button variant="outline" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Save
                    </Button>
                    <Button variant="outline" className="border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800 flex items-center gap-2">
                      <Share2 className="w-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <Card className="bg-white md:bg-gray-900 border border-gray-200 md:border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 md:text-white mb-4">Video Açıklaması</h3>
                    <div className="bg-gray-50 md:bg-gray-800 rounded-lg p-4 mb-4">
                      <p className="text-gray-800 md:text-white leading-relaxed text-base font-medium">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 md:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 md:text-gray-400">Category:</span>
                          <p className="text-gray-900 md:text-white capitalize">{video.category.replace('-', ' ')}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 md:text-gray-400">Duration:</span>
                          <p className="text-gray-900 md:text-white">{video.duration}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 md:text-gray-400">Upload Date:</span>
                          <p className="text-gray-900 md:text-white">{formatDate(video.uploadDate)}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments Section */}
                <Card className="bg-white md:bg-gray-900 border border-gray-200 md:border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 md:text-white mb-4">Comments</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-100 md:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            U
                          </div>
                          <div>
                            <p className="text-gray-900 md:text-white font-medium">User123</p>
                            <p className="text-gray-500 md:text-gray-400 text-xs">2 hours ago</p>
                          </div>
                        </div>
                        <p className="text-gray-700 md:text-gray-300">Great video! Really enjoyed watching this content.</p>
                      </div>

                      <div className="bg-gray-100 md:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            V
                          </div>
                          <div>
                            <p className="text-gray-900 md:text-white font-medium">VideoFan</p>
                            <p className="text-gray-500 md:text-gray-400 text-xs">5 hours ago</p>
                          </div>
                        </div>
                        <p className="text-gray-700 md:text-gray-300">Amazing quality and storyline. Looking forward to more content like this!</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200 md:border-gray-700">
                        <p className="text-gray-500 md:text-gray-400 text-center">
                          Sign in to leave a comment and join the discussion.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 md:text-white mb-6">
                  Recommended Videos
                </h3>

                {relatedVideos.length === 0 ? (
                  <p className="text-gray-500 md:text-gray-400">No related videos found.</p>
                ) : (
                  <div className="space-y-4">
                    {/* Horizontal Scrollable Carousel */}
                    <div className="overflow-x-auto pb-4">
                      <div className="flex space-x-4" style={{ width: 'max-content' }}>
                        {relatedVideos.map((relatedVideo: Video) => (
                          <Link
                            key={relatedVideo.id}
                            href={`/video/${relatedVideo.id}`}
                            className="block w-64 flex-shrink-0 group"
                          >
                            <div className="bg-white md:bg-gray-800 border md:border-none border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                              <div className="relative aspect-video bg-gray-200 md:bg-gray-700">
                                <img
                                  src={relatedVideo.thumbnail}
                                  alt={relatedVideo.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                  <div className="bg-blue-600 rounded-full p-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-4 h-4 text-white" fill="white" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute bottom-1 right-1 bg-black/90 text-white text-xs px-1 py-0.5 rounded backdrop-blur-sm">
                                  {relatedVideo.duration}
                                </div>
                              </div>

                              <div className="p-3">
                                <h4 className="text-gray-900 md:text-white font-medium text-sm leading-tight line-clamp-2 group-hover:text-blue-400 md:group-hover:text-blue-400 transition-colors mb-2">
                                  {relatedVideo.title}
                                </h4>
                                <div className="flex items-center text-xs text-gray-500 md:text-gray-400">
                                  <span>{formatViews(relatedVideo.views)} views</span>
                                  <span className="mx-1">•</span>
                                  <span>{formatDate(relatedVideo.uploadDate)}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="text-center">
                      <p className="text-gray-500 md:text-gray-400 text-xs">
                        ← Scroll to see more videos →
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <Link href="/">
                    <Button variant="outline" className="w-full border-gray-300 md:border-gray-700 text-gray-700 md:text-gray-300 hover:bg-gray-100 md:hover:bg-gray-800">
                      View All Videos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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

        {/* Yaş Sınırı Uyarı Modalı - Sayfa Açıldığında */}
        {showAdModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white md:bg-gray-800 rounded-lg max-w-sm w-full p-5">
              <div className="text-center">
                <div className="mx-auto bg-red-600 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <div className="text-white font-bold text-lg">18+</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 md:text-white mb-3">
                  Yaş Sınırı!
                </h3>
                <p className="text-gray-600 md:text-gray-300 mb-5 text-sm leading-relaxed">
                  Bu içerik 18 yaş ve üzeri kullanıcılar için uygundur. Devam etmek için yaşınızı onaylayın.
                </p>
                <Button
                  onClick={handleWatchVideo}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                >
                  18 yaşından büyüğüm
                </Button>
                <p className="text-xs text-gray-500 md:text-gray-400 mt-3">
                  İçeriği görüntüleyerek yaş sınırı kurallarını kabul etmiş olursunuz. Sponsor içerik açılabilir.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

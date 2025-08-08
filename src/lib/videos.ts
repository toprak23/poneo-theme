export type Video = {
  id: string;
  title: string;
  description: string;
  embedId: string;
  category: 'movies' | 'tv-shows' | 'comedy' | 'horror' | 'action' | 'romance';
  duration: string;
  views: number;
  uploadDate: string;
  thumbnail: string;
};

export const videos: Video[] = [
  // Movies - Main Category
  {
    id: '1',
    title: 'The Last Guardian',
    description: 'An epic fantasy adventure about a young warrior who must protect an ancient artifact from dark forces threatening to destroy the world.',
    embedId: 'b236bde30790b0',
    category: 'movies',
    duration: '2h 15m',
    views: 2500000,
    uploadDate: '2024-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&h=450&fit=crop'
  },
  {
    id: '2',
    title: 'Midnight Protocol',
    description: 'A cyberpunk thriller following a hacker who discovers a conspiracy that reaches the highest levels of government and corporate power.',
    embedId: 'a1f2c8d4e5b9f3',
    category: 'movies',
    duration: '1h 58m',
    views: 1800000,
    uploadDate: '2024-01-20',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop'
  },
  {
    id: '13',
    title: 'Quantum Heist',
    description: 'A group of master thieves attempts to steal from a quantum-secured vault using cutting-edge technology and impossible physics.',
    embedId: 'm9n8o7p6q5r4s3',
    category: 'movies',
    duration: '2h 8m',
    views: 3200000,
    uploadDate: '2024-01-25',
    thumbnail: 'https://images.unsplash.com/photo-1489599849619-bf2b41b2cd9a?w=800&h=450&fit=crop'
  },
  {
    id: '14',
    title: 'Desert Storm Rising',
    description: 'In a post-apocalyptic world, survivors must cross dangerous desert territories while being hunted by raiders.',
    embedId: 't7u6v5w4x3y2z1',
    category: 'movies',
    duration: '2h 22m',
    views: 2100000,
    uploadDate: '2024-01-28',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop'
  },
  {
    id: '15',
    title: 'The Secret Garden Mystery',
    description: 'A detective investigates mysterious disappearances connected to an abandoned botanical garden with a dark history.',
    embedId: 'a8b7c6d5e4f3g2',
    category: 'movies',
    duration: '1h 47m',
    views: 1650000,
    uploadDate: '2024-02-02',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop'
  },
  {
    id: '16',
    title: 'Arctic Explorer',
    description: 'An expedition team discovers ancient secrets buried beneath the melting Arctic ice, changing everything we know about history.',
    embedId: 'h1i2j3k4l5m6n7',
    category: 'movies',
    duration: '2h 5m',
    views: 2850000,
    uploadDate: '2024-02-05',
    thumbnail: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&h=450&fit=crop'
  },

  // Romance Movies
  {
    id: '3',
    title: 'Oceanside Dreams',
    description: 'A heartwarming romantic drama about two strangers who meet during a summer vacation and discover an unexpected connection.',
    embedId: 'c9e8f7a6b5d4c2',
    category: 'romance',
    duration: '1h 42m',
    views: 950000,
    uploadDate: '2024-02-01',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop'
  },
  {
    id: '10',
    title: 'Hearts Entwined',
    description: 'A romantic drama series following multiple couples navigating love, heartbreak, and second chances in a bustling city.',
    embedId: 'j6k5l4m3n2o1p9',
    category: 'romance',
    duration: '42m per episode',
    views: 1300000,
    uploadDate: '2024-02-07',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop'
  },
  {
    id: '17',
    title: 'Letters from Tomorrow',
    description: 'A time-traveling love story where messages from the future help two people find each other across different timelines.',
    embedId: 'o8p7q6r5s4t3u2',
    category: 'romance',
    duration: '1h 54m',
    views: 1750000,
    uploadDate: '2024-02-08',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop'
  },

  // Horror Movies
  {
    id: '4',
    title: 'The Haunting of Blackwood Manor',
    description: 'A spine-chilling horror story about a family who inherits an old mansion with a dark and terrifying history.',
    embedId: 'd8b7c6a5e4f3d1',
    category: 'horror',
    duration: '1h 35m',
    views: 1200000,
    uploadDate: '2024-02-05',
    thumbnail: 'https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=800&h=450&fit=crop'
  },
  {
    id: '9',
    title: 'Crimson Valley',
    description: 'A supernatural horror series about a small town where residents start experiencing terrifying phenomena after a mysterious meteor crash.',
    embedId: 'i7j6k5l4m3n2o1',
    category: 'horror',
    duration: '50m per episode',
    views: 1600000,
    uploadDate: '2024-02-03',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop'
  },
  {
    id: '18',
    title: 'Nightmare Hospital',
    description: 'Medical staff at an abandoned hospital discover they are trapped with supernatural entities that feed on fear and pain.',
    embedId: 'v4w3x2y1z9a8b7',
    category: 'horror',
    duration: '1h 28m',
    views: 2200000,
    uploadDate: '2024-02-10',
    thumbnail: 'https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=800&h=450&fit=crop'
  },

  // Comedy
  {
    id: '5',
    title: 'Stand-Up Spectacular',
    description: 'A hilarious comedy special featuring some of the biggest names in stand-up comedy performing their best material.',
    embedId: 'f5e4d3c2b1a9f8',
    category: 'comedy',
    duration: '1h 25m',
    views: 3200000,
    uploadDate: '2024-02-10',
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=450&fit=crop'
  },
  {
    id: '8',
    title: 'The Comedy Corner',
    description: 'A weekly comedy show featuring sketches, stand-up performances, and celebrity interviews with a fresh comedic perspective.',
    embedId: 'h8g7f6e5d4c3b2',
    category: 'comedy',
    duration: '30m per episode',
    views: 2100000,
    uploadDate: '2024-01-22',
    thumbnail: 'https://images.unsplash.com/photo-1599582909742-1d0e1b77b4d6?w=800&h=450&fit=crop'
  },
  {
    id: '19',
    title: 'Office Pranks Gone Wild',
    description: 'A mockumentary following the daily chaos of an office where employees constantly pull elaborate pranks on each other.',
    embedId: 'c6d5e4f3g2h1i9',
    category: 'comedy',
    duration: '1h 15m',
    views: 2850000,
    uploadDate: '2024-02-12',
    thumbnail: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=450&fit=crop'
  },

  // Action Movies
  {
    id: '6',
    title: 'Thunder Strike',
    description: 'An adrenaline-pumping action movie about an elite special forces team on a mission to stop a terrorist organization.',
    embedId: 'e7d6c5b4a3f2e1',
    category: 'action',
    duration: '2h 8m',
    views: 2800000,
    uploadDate: '2024-02-12',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=450&fit=crop'
  },
  {
    id: '11',
    title: 'Phoenix Squad',
    description: 'An action-packed series about an elite military unit taking on dangerous missions around the world to maintain global peace.',
    embedId: 'k5l4m3n2o1p9q8',
    category: 'action',
    duration: '48m per episode',
    views: 3800000,
    uploadDate: '2024-02-14',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop'
  },
  {
    id: '20',
    title: 'Street Fighter Championship',
    description: 'Underground fighters compete in illegal tournaments while evading law enforcement and dangerous crime syndicates.',
    embedId: 'j8k7l6m5n4o3p2',
    category: 'action',
    duration: '1h 52m',
    views: 3500000,
    uploadDate: '2024-02-15',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=450&fit=crop'
  },

  // TV Shows
  {
    id: '7',
    title: 'Chronicles of Tomorrow - Season 1',
    description: 'A sci-fi drama series exploring humanity\'s future through the eyes of time travelers trying to prevent a catastrophic timeline.',
    embedId: 'g9h8i7j6k5l4m3',
    category: 'tv-shows',
    duration: '45m per episode',
    views: 4500000,
    uploadDate: '2024-01-08',
    thumbnail: 'https://images.unsplash.com/photo-1489599849619-bf2b41b2cd9a?w=800&h=450&fit=crop'
  },
  {
    id: '12',
    title: 'Detectives of Downtown',
    description: 'A crime drama series following two detectives as they solve complex cases in the heart of a major metropolitan city.',
    embedId: 'l4m3n2o1p9q8r7',
    category: 'tv-shows',
    duration: '44m per episode',
    views: 2700000,
    uploadDate: '2024-02-16',
    thumbnail: 'https://images.unsplash.com/photo-1489599849619-bf2b41b2cd9a?w=800&h=450&fit=crop'
  },
  {
    id: '21',
    title: 'Medical Mysteries',
    description: 'Doctors at a cutting-edge research hospital face unusual medical cases that challenge everything they know about medicine.',
    embedId: 'q1r2s3t4u5v6w7',
    category: 'tv-shows',
    duration: '50m per episode',
    views: 3100000,
    uploadDate: '2024-02-18',
    thumbnail: 'https://images.unsplash.com/photo-1489599849619-bf2b41b2cd9a?w=800&h=450&fit=crop'
  },
 {
  id: '999',
  title: 'Test Video',
  description: 'Bunny.net test videosu',
  embedId: '478588/c644a53e-2581-4aa3-babb-af8a155ac6b2',
  category: 'movies',
  duration: '5m',
  views: 0,
  uploadDate: '2025-08-08',
  thumbnail: 'https://vz-98744565-2f0.b-cdn.net/c644a53e-2581-4aa3-babb-af8a155ac6b2/thumbnail.jpg'
}
  
];

export function getVideosByCategory(category?: string): Video[] {
  if (!category || category === 'all') {
    return videos.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  }

  return videos
    .filter(video => video.category === category)
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
}

export function getVideoById(id: string): Video | undefined {
  return videos.find(video => video.id === id);
}

export function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`;
  } else if (diffDays <= 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}
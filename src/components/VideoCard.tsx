import { type Video, formatViews, formatDate } from '@/lib/videos';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Calendar, Play } from 'lucide-react';
import Link from 'next/link';

interface VideoCardProps {
  video: Video;
  showCategory?: boolean;
}

export function VideoCard({ video, showCategory = false }: VideoCardProps) {
  return (
    <Link href={`/video/${video.id}`} className="block group">
      <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-2xl">
        <CardContent className="p-0">
          <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-800">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="bg-blue-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
              {video.duration}
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              {showCategory && (
                <Badge
                  variant="secondary"
                  className="bg-blue-600 text-white hover:bg-blue-700 capitalize flex-shrink-0 text-xs"
                >
                  {video.category.replace('-', ' ')}
                </Badge>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {video.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatViews(video.views)} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(video.uploadDate)}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

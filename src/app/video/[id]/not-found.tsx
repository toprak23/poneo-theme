import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, Film, ArrowLeft } from 'lucide-react';

export default function VideoNotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="mx-auto bg-red-600 rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6">
              <Film className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-white mb-2">Video Not Found</CardTitle>
            <p className="text-xl text-gray-300">404</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-400 text-lg">
              Sorry, we couldn't find the video you're looking for.
              It may have been removed, made private, or the link might be incorrect.
            </p>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">What would you like to do?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/" className="block">
                  <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 transition-all duration-200 hover:scale-105">
                    <Home className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white text-sm font-medium">Go Home</div>
                    <div className="text-gray-400 text-xs">Browse all videos</div>
                  </div>
                </Link>

                <Link href="/movies" className="block">
                  <div className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 transition-all duration-200 hover:scale-105">
                    <Film className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white text-sm font-medium">Browse Movies</div>
                    <div className="text-gray-400 text-xs">Explore movie collection</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>

              <div className="text-sm text-gray-500">
                Or try searching for something else using the search bar above.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

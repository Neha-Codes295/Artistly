
import { Artist } from '@/types/artist';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
  onQuoteRequest?: (artistId: string) => void;
}

const ArtistCard = ({ artist, onQuoteRequest }: ArtistCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={artist.image || `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop`}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {artist.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {artist.name}
          </h3>
          <div className="text-right">
            <div className="text-sm font-medium text-purple-600">{artist.priceRange}</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {artist.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          {artist.location}
        </div>

        {/* Languages */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">Languages:</div>
          <div className="text-sm text-gray-700">
            {artist.languages.slice(0, 3).join(', ')}
            {artist.languages.length > 3 && ` +${artist.languages.length - 3} more`}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          onClick={() => onQuoteRequest?.(artist.id)}
        >
          Ask for Quote
        </Button>
      </div>
    </div>
  );
};

export default ArtistCard;

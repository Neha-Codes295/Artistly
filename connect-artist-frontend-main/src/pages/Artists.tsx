import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import ArtistCard from '@/components/ArtistCard';
import { mockArtists } from '@/data/artists';
import { CATEGORIES, PRICE_RANGES } from '@/types/artist';

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('any');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Get unique locations from artists
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(
      mockArtists.map(artist =>
        artist.location.split(',')[1]?.trim() || artist.location.split(',')[0]?.trim()
      )
    )].filter(Boolean);
    return uniqueLocations.sort();
  }, []);

  // Filter artists based on search criteria
  const filteredArtists = useMemo(() => {
    return mockArtists.filter(artist => {
      const matchesSearch =
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || artist.category.includes(selectedCategory);

      const matchesPriceRange =
        selectedPriceRange === 'any' || artist.priceRange === selectedPriceRange;

      const matchesLocation =
        selectedLocation === 'all' || artist.location.includes(selectedLocation);

      return matchesSearch && matchesCategory && matchesPriceRange && matchesLocation;
    });
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedPriceRange('any');
    setSelectedLocation('all');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || selectedPriceRange !== 'any' || selectedLocation !== 'all';

  const handleQuoteRequest = (artistId: string) => {
    console.log('Quote requested for artist:', artistId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Browse Artists</h1>
          <p className="text-xl text-purple-100">
            Discover talented performers for your next event
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search by artist name, category, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Price</SelectItem>
                {PRICE_RANGES.map(range => (
                  <SelectItem key={range} value={range}>{range}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchTerm}"
                  <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => setSearchTerm('')} />
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Category: {selectedCategory}
                  <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => setSelectedCategory('all')} />
                </Badge>
              )}
              {selectedPriceRange !== 'any' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Price: {selectedPriceRange}
                  <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => setSelectedPriceRange('any')} />
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Location: {selectedLocation}
                  <X className="h-3 w-3 cursor-pointer hover:text-red-500" onClick={() => setSelectedLocation('all')} />
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredArtists.length} Artist{filteredArtists.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">
              {hasActiveFilters ? 'Filtered results' : 'Showing all available artists'}
            </p>
          </div>
        </div>

        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} onQuoteRequest={handleQuoteRequest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No artists found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or clearing the filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;

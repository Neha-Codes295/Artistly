
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Calendar, Star, Music, Mic, Camera, Zap } from 'lucide-react';
import ArtistCard from '@/components/ArtistCard';
import { mockArtists } from '@/data/artists';

const Home = () => {
  const featuredArtists = mockArtists.filter(artist => artist.featured);

  const categories = [
    {
      name: 'Singers',
      icon: Mic,
      description: 'Vocal artists for every occasion',
      count: '250+ Artists',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Dancers',
      icon: Users,
      description: 'Professional dance performances',
      count: '180+ Artists',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      name: 'DJs',
      icon: Zap,
      description: 'Electronic music specialists',
      count: '150+ Artists',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Musicians',
      icon: Music,
      description: 'Instrumental & band performances',
      count: '200+ Artists',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const handleQuoteRequest = (artistId: string) => {
    console.log('Quote requested for artist:', artistId);
    // Here you would typically open a modal or navigate to a quote form
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Book Amazing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Performing Artists
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Connect with talented singers, dancers, DJs, and performers across India. 
              Make your events unforgettable with verified artists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link to="/artists">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Artists
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
                asChild
              >
                <Link to="/onboard">
                  <Users className="mr-2 h-5 w-5" />
                  Join as Artist
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Verified Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-purple-200">Events Booked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-purple-200">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Categories */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect performer for your event from our diverse range of talented artists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.name} to="/artists" className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border-0 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Featured
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top Performing Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked artists with exceptional reviews and proven track records
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredArtists.map((artist) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                onQuoteRequest={handleQuoteRequest}
              />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
              <Link to="/artists">
                View All Artists
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Artistly Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your perfect artist in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Browse & Filter',
                description: 'Search through our curated list of verified artists. Filter by category, location, and budget to find your perfect match.',
                icon: Search
              },
              {
                step: '02',
                title: 'Request Quote',
                description: 'Connect directly with artists and request customized quotes for your event. Share your requirements and get personalized proposals.',
                icon: Calendar
              },
              {
                step: '03',
                title: 'Book & Enjoy',
                description: 'Finalize the booking, coordinate the details, and enjoy an amazing performance that makes your event truly memorable.',
                icon: Star
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-purple-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of satisfied event planners who trust Artistly for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4" asChild>
              <Link to="/artists">Start Browsing Artists</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4" asChild>
              <Link to="/onboard">Register as Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

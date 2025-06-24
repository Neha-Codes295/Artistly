
import { Link } from 'react-router-dom';
import { Music, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Music className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting amazing performers with unforgettable events across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/artists" className="block text-gray-400 hover:text-white transition-colors">
                Browse Artists
              </Link>
              <Link to="/onboard" className="block text-gray-400 hover:text-white transition-colors">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>Singers & Musicians</div>
              <div>Dancers & Choreographers</div>
              <div>DJs & Sound Artists</div>
              <div>Speakers & Comedians</div>
              <div>Magicians & Entertainers</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@artistly.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Artistly. All rights reserved. | Made with ❤️ for artists and event planners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

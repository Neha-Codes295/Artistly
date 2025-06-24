import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Calendar, DollarSign, TrendingUp, Eye, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { Artist, BookingRequest } from '@/types/artist';
import { mockArtists } from '@/data/artists';

// Mock data for dashboard
const mockBookingRequests: BookingRequest[] = [
  {
    id: '1',
    artistId: '1',
    artistName: 'Priya Sharma',
    eventDate: '2024-07-15',
    eventType: 'Wedding',
    location: 'Mumbai, Maharashtra',
    budget: '₹40,000',
    status: 'pending',
    createdAt: '2024-06-20'
  },
  {
    id: '2',
    artistId: '2',
    artistName: 'DJ Arjun',
    eventDate: '2024-07-22',
    eventType: 'Corporate Event',
    location: 'Delhi, NCR',
    budget: '₹75,000',
    status: 'accepted',
    createdAt: '2024-06-18'
  },
  {
    id: '3',
    artistId: '3',
    artistName: 'Kavya Dance Troupe',
    eventDate: '2024-07-10',
    eventType: 'Cultural Program',
    location: 'Bangalore, Karnataka',
    budget: '₹20,000',
    status: 'rejected',
    createdAt: '2024-06-15'
  },
  {
    id: '4',
    artistId: '4',
    artistName: 'Rohit Kumar',
    eventDate: '2024-08-05',
    eventType: 'Birthday Party',
    location: 'Pune, Maharashtra',
    budget: '₹35,000',
    status: 'pending',
    createdAt: '2024-06-22'
  },
  {
    id: '5',
    artistId: '1',
    artistName: 'Priya Sharma',
    eventDate: '2024-08-12',
    eventType: 'Anniversary',
    location: 'Mumbai, Maharashtra',
    budget: '₹45,000',
    status: 'accepted',
    createdAt: '2024-06-19'
  }
];

const Dashboard = () => {
  const [bookingRequests] = useState<BookingRequest[]>(mockBookingRequests);
  const [managedArtists] = useState<Artist[]>(mockArtists);

  // Calculate statistics
  const stats = {
    totalArtists: managedArtists.length,
    totalBookings: bookingRequests.length,
    pendingRequests: bookingRequests.filter(req => req.status === 'pending').length,
    monthlyRevenue: bookingRequests
      .filter(req => req.status === 'accepted')
      .reduce((sum, req) => sum + parseInt(req.budget.replace(/[₹,]/g, '')), 0)
  };

  const getStatusBadge = (status: BookingRequest['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case 'accepted':
        return <Badge className="bg-green-600">Accepted</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const handleStatusUpdate = (requestId: string, newStatus: BookingRequest['status']) => {
    console.log(`Updating request ${requestId} to ${newStatus}`);
    // Here you would typically update the booking request status
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Manager Dashboard</h1>
          <p className="text-xl text-purple-100">
            Manage your artists and track booking requests
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Artists</p>
                <p className="text-2xl font-bold">{stats.totalArtists}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold">{stats.totalBookings}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <MessageSquare className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold">{stats.pendingRequests}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold">₹{stats.monthlyRevenue.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
            <TabsTrigger value="artists">Managed Artists</TabsTrigger>
          </TabsList>

          {/* Booking Requests Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Recent Booking Requests</CardTitle>
                <CardDescription>
                  Manage incoming booking requests for your artists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Artist</TableHead>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookingRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.artistName}</TableCell>
                          <TableCell>{request.eventType}</TableCell>
                          <TableCell>{new Date(request.eventDate).toLocaleDateString()}</TableCell>
                          <TableCell>{request.location}</TableCell>
                          <TableCell className="font-semibold">{request.budget}</TableCell>
                          <TableCell>{getStatusBadge(request.status)}</TableCell>
                          <TableCell>
                            {request.status === 'pending' ? (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleStatusUpdate(request.id, 'accepted')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleStatusUpdate(request.id, 'rejected')}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                              </div>
                            ) : (
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Artists Tab */}
          <TabsContent value="artists">
            <Card>
              <CardHeader>
                <CardTitle>Managed Artists</CardTitle>
                <CardDescription>
                  Overview of all artists under your management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Categories</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Price Range</TableHead>
                        <TableHead>Languages</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {managedArtists.map((artist) => (
                        <TableRow key={artist.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                              <img
                                src={artist.image || `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=40&h=40&fit=crop`}
                                alt={artist.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              {artist.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {artist.category.map(cat => (
                                <Badge key={cat} variant="secondary" className="text-xs">
                                  {cat}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{artist.location}</TableCell>
                          <TableCell className="font-semibold">{artist.priceRange}</TableCell>
                          <TableCell>
                            {artist.languages.slice(0, 2).join(', ')}
                            {artist.languages.length > 2 && ` +${artist.languages.length - 2}`}
                          </TableCell>
                          <TableCell>
                            {artist.featured ? (
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                                Featured
                              </Badge>
                            ) : (
                              <Badge variant="outline">Active</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

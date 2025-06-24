
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Upload, User, Briefcase, MapPin, DollarSign, Globe, CheckCircle } from 'lucide-react';
import { CATEGORIES, LANGUAGES, PRICE_RANGES } from '@/types/artist';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(500, 'Bio must be less than 500 characters'),
  categories: z.array(z.string()).min(1, 'Please select at least one category'),
  languages: z.array(z.string()).min(1, 'Please select at least one language'),
  priceRange: z.string().min(1, 'Please select a price range'),
  location: z.string().min(2, 'Please enter your location'),
  profileImage: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  experience: z.string().min(1, 'Please enter your experience'),
  portfolio: z.string().url('Please enter a valid portfolio URL').optional().or(z.literal('')),
});

type FormData = z.infer<typeof formSchema>;

const Onboard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      priceRange: '',
      location: '',
      profileImage: '',
      email: '',
      phone: '',
      experience: '',
      portfolio: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Artist onboarding data:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your profile and get back to you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="pt-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for joining Artistly! We'll review your profile and contact you within 24-48 hours 
              with next steps to activate your artist account.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📧 Check your email for confirmation</p>
              <p>📱 Keep your phone handy for verification</p>
              <p>🎭 Start preparing your portfolio</p>
            </div>
            <Button className="mt-6" onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Join as an Artist</h1>
          <p className="text-xl text-purple-100">
            Share your talent with event planners across India and grow your performance career
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and your artistic background
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist Bio *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your artistic journey, experience, and what makes you unique... (50-500 characters)"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        {field.value?.length || 0}/500 characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Professional Details
                </CardTitle>
                <CardDescription>
                  Help us understand your artistic specializations and experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="categories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Performance Categories * (Select all that apply)</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {CATEGORIES.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={category}
                              checked={field.value?.includes(category)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, category]);
                                } else {
                                  field.onChange(field.value?.filter((val) => val !== category));
                                }
                              }}
                            />
                            <label 
                              htmlFor={category}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                      {field.value?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map(category => (
                            <Badge key={category} variant="secondary">{category}</Badge>
                          ))}
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years (Beginner)</SelectItem>
                            <SelectItem value="2-5">2-5 years (Intermediate)</SelectItem>
                            <SelectItem value="5-10">5-10 years (Experienced)</SelectItem>
                            <SelectItem value="10+">10+ years (Expert)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priceRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price Range *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select price range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {PRICE_RANGES.map(range => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio/Website URL</FormLabel>
                      <FormControl>
                        <Input 
                          type="url" 
                          placeholder="https://your-portfolio.com or YouTube channel" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Optional: Share your portfolio, YouTube channel, or social media profile
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Languages & Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Languages & Preferences
                </CardTitle>
                <CardDescription>
                  Help event planners understand your linguistic capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Languages Spoken * (Select all that apply)</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {LANGUAGES.map((language) => (
                          <div key={language} className="flex items-center space-x-2">
                            <Checkbox
                              id={language}
                              checked={field.value?.includes(language)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, language]);
                                } else {
                                  field.onChange(field.value?.filter((val) => val !== language));
                                }
                              }}
                            />
                            <label 
                              htmlFor={language}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {language}
                            </label>
                          </div>
                        ))}
                      </div>
                      {field.value?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map(language => (
                            <Badge key={language} variant="outline">{language}</Badge>
                          ))}
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Artist Application'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Onboard;

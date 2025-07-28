import { useState } from "react";
import Header from "@/components/Header";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Headphones } from "lucide-react";
import { tours } from "@/data/tours";
import { useToast } from "@/hooks/use-toast";
import mumbaiHero from "@/assets/mumbai-hero.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  const featuredTours = tours.filter(tour => tour.featured);
  const filteredTours = tours.filter(tour => 
    tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tour.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartTour = (tourTitle: string) => {
    toast({
      title: "Tour Starting Soon!",
      description: `Preparing your ${tourTitle} experience...`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={mumbaiHero} 
          alt="Mumbai Heritage Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Cities
                <span className="block text-heritage">Your Way</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                Self-guided audio walking tours that bring history, culture, and hidden stories to life. No crowds, no schedules - just you and the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="tour" className="text-lg px-8 py-3">
                  <Headphones className="w-5 h-5 mr-2" />
                  Start Exploring
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Browse Tours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search tours or cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg border-2 border-stone/30 focus:border-explorer"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-explorer mb-2">50+</div>
              <div className="text-muted-foreground">Audio Tours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-explorer mb-2">12</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-explorer mb-2">4.8</div>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <Star className="w-4 h-4 fill-heritage text-heritage" />
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Tours</h2>
              <p className="text-muted-foreground">Handpicked experiences for every explorer</p>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              <Star className="w-4 h-4 mr-1" />
              Most Popular
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard
                key={tour.id}
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                stops={tour.stops}
                image={tour.image}
                onStartTour={() => handleStartTour(tour.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Tours */}
      {searchQuery && (
        <section className="py-16 bg-stone/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Search Results ({filteredTours.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  title={tour.title}
                  description={tour.description}
                  duration={tour.duration}
                  stops={tour.stops}
                  image={tour.image}
                  onStartTour={() => handleStartTour(tour.title)}
                />
              ))}
            </div>
            
            {filteredTours.length === 0 && (
              <Card className="p-12 text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No tours found</h3>
                <p className="text-muted-foreground">Try searching for a different city or tour type.</p>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to start your adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-explorer to-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Tour</h3>
              <p className="text-muted-foreground">Browse our curated collection of audio walking tours across different cities and themes.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-explorer to-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Walking</h3>
              <p className="text-muted-foreground">Follow the route on your phone and listen to engaging stories at each stop along the way.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-explorer to-teal p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover & Learn</h3>
              <p className="text-muted-foreground">Uncover hidden gems, historical facts, and local insights that guidebooks never tell you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-explorer text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-heritage p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">WalkWise</h1>
                  <p className="text-sm text-white/80">Audio City Tours</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Transforming how you explore cities with immersive, self-guided audio experiences that bring destinations to life.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Tours</h3>
              <ul className="space-y-2 text-white/80">
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>Kolkata</li>
                <li>Chennai</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 WalkWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

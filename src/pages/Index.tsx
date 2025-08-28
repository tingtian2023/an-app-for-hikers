import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  MapPin, 
  Cloud, 
  Calendar, 
  Users, 
  TrendingUp,
  Star,
  ArrowRight
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Mountain className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trail Tracker
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your ultimate companion for planning, tracking, and sharing hiking adventures. 
              Connect with fellow hikers and discover amazing trails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/map">
                  <MapPin className="h-5 w-5 mr-2" />
                  Explore Routes
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/planner">
                  <Calendar className="h-5 w-5 mr-2" />
                  Plan Trip
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Hiking</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From route planning to weather forecasting, we've got all the tools to make your hiking adventures safe and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <CardTitle>Route Discovery</CardTitle>
                <CardDescription>
                  Find and explore thousands of hiking trails with detailed maps and difficulty ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild>
                  <Link to="/map">
                    Explore Routes <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto mb-4 text-sky-500" />
                <CardTitle>Weather Forecast</CardTitle>
                <CardDescription>
                  Get accurate weather predictions and hiking conditions for your planned routes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild>
                  <Link to="/weather">
                    Check Weather <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <CardTitle>Trip Planning</CardTitle>
                <CardDescription>
                  Organize your hiking trips with detailed itineraries and gear checklists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild>
                  <Link to="/planner">
                    Plan Trip <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <CardTitle>Social Community</CardTitle>
                <CardDescription>
                  Share your adventures, connect with hikers, and discover new trail partners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild>
                  <Link to="/social">
                    Join Community <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">10K+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trail Routes</h3>
              <p className="text-muted-foreground">Discover thousands of verified hiking trails</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">5K+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Active Hikers</h3>
              <p className="text-muted-foreground">Join our growing community of outdoor enthusiasts</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold">4.9★</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">User Rating</h3>
              <p className="text-muted-foreground">Trusted by hikers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Trails Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Trails</h2>
            <p className="text-muted-foreground">
              Discover some of the most loved hiking destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Milford Track",
                location: "Fiordland National Park",
                difficulty: "Moderate",
                duration: "4 days",
                rating: 4.8
              },
              {
                name: "Mount Cook Summit",
                location: "Aoraki/Mount Cook National Park", 
                difficulty: "Hard",
                duration: "2 days",
                rating: 4.9
              },
              {
                name: "Tongariro Alpine Crossing",
                location: "Tongariro National Park",
                difficulty: "Moderate", 
                duration: "1 day",
                rating: 4.7
              }
            ].map((trail, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4"></div>
                  <CardTitle className="text-lg">{trail.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {trail.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">{trail.difficulty}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{trail.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Duration: {trail.duration}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/map">
                View All Routes <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

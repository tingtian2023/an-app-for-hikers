import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Filter } from "lucide-react";

export default function Map() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Trail Routes</h1>
        <p className="text-muted-foreground">
          Discover and explore hiking routes near you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Search and Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Routes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Enter location..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <select className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background">
                  <option>All levels</option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Hard</option>
                  <option>Expert</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Distance (km)</label>
                <select className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background">
                  <option>Any distance</option>
                  <option>0-5 km</option>
                  <option>5-10 km</option>
                  <option>10-20 km</option>
                  <option>20+ km</option>
                </select>
              </div>
              
              <Button className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map and Results */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Trail Map</CardTitle>
              <CardDescription>
                Click on trails to view details and plan your hike
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for map */}
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    Map integration will be added here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trail Results */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((trail) => (
              <Card key={trail} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Mountain Trail {trail}</CardTitle>
                  <CardDescription>
                    Beautiful scenic route with moderate difficulty
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 text-sm">
                      <span className="font-medium">8.5 km</span>
                      <span className="text-muted-foreground">Moderate</span>
                      <span className="text-muted-foreground">3-4 hours</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
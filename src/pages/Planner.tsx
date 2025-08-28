import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Backpack, Users, Plus, Edit, Trash2 } from "lucide-react";

export default function Planner() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Trip Planner</h1>
        <p className="text-muted-foreground">
          Plan and organize your hiking adventures
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Trip Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Plan New Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="trip-name">Trip Name</Label>
                <Input 
                  id="trip-name" 
                  placeholder="e.g., Mount Cook Summit" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  placeholder="Enter destination..." 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input 
                    id="start-date" 
                    type="date" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input 
                    id="end-date" 
                    type="date" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <select 
                  id="difficulty"
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Hard</option>
                  <option>Expert</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="group-size">Group Size</Label>
                <Input 
                  id="group-size" 
                  type="number" 
                  placeholder="Number of hikers" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Additional trip details..." 
                  rows={3}
                />
              </div>
              
              <Button className="w-full">
                Create Trip Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trip List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Planned Trips</CardTitle>
              <CardDescription>
                Manage your upcoming and past hiking adventures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Mount Cook Summit",
                    location: "Aoraki/Mount Cook National Park",
                    startDate: "2024-09-15",
                    endDate: "2024-09-17",
                    difficulty: "Hard",
                    groupSize: 4,
                    status: "upcoming"
                  },
                  {
                    id: 2,
                    name: "Milford Track",
                    location: "Fiordland National Park",
                    startDate: "2024-10-01",
                    endDate: "2024-10-04",
                    difficulty: "Moderate",
                    groupSize: 2,
                    status: "upcoming"
                  },
                  {
                    id: 3,
                    name: "Tongariro Alpine Crossing",
                    location: "Tongariro National Park",
                    startDate: "2024-08-20",
                    endDate: "2024-08-20",
                    difficulty: "Moderate",
                    groupSize: 6,
                    status: "completed"
                  }
                ].map((trip) => (
                  <Card key={trip.id} className="relative">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{trip.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            {trip.location}
                          </div>
                        </div>
                        <Badge 
                          variant={trip.status === 'upcoming' ? 'default' : 'secondary'}
                        >
                          {trip.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{trip.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{trip.groupSize} hikers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Backpack className="h-4 w-4" />
                          <span>{trip.difficulty}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {trip.startDate === trip.endDate ? '1 day' : 
                           `${Math.ceil((new Date(trip.endDate).getTime() - new Date(trip.startDate).getTime()) / (1000 * 60 * 60 * 24) + 1)} days`}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Backpack className="h-4 w-4 mr-2" />
                          Gear List
                        </Button>
                        {trip.status === 'upcoming' && (
                          <Button size="sm" variant="outline" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Gear Checklist Section */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Backpack className="h-5 w-5" />
              Essential Gear Checklist
            </CardTitle>
            <CardDescription>
              Basic equipment for different types of hikes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-green-600">Day Hikes</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Backpack (20-30L)</li>
                  <li>• Water bottles</li>
                  <li>• Snacks/lunch</li>
                  <li>• First aid kit</li>
                  <li>• Map and compass</li>
                  <li>• Sunscreen</li>
                  <li>• Rain jacket</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-blue-600">Multi-day Treks</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Large backpack (40-60L)</li>
                  <li>• Tent/shelter</li>
                  <li>• Sleeping bag</li>
                  <li>• Sleeping pad</li>
                  <li>• Cooking equipment</li>
                  <li>• Food supplies</li>
                  <li>• Extra clothing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-orange-600">Winter/Alpine</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Insulated layers</li>
                  <li>• Waterproof gloves</li>
                  <li>• Warm hat</li>
                  <li>• Crampons/microspikes</li>
                  <li>• Ice axe (if needed)</li>
                  <li>• Emergency shelter</li>
                  <li>• Headlamp + extra batteries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
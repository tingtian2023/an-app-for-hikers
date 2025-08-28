import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus, 
  UserPlus, 
  Users, 
  Camera,
  Calendar,
  MapPin
} from "lucide-react";

export default function Social() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Hiking Community</h1>
        <p className="text-muted-foreground">
          Share your adventures and connect with fellow hikers
        </p>
      </div>

      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="write">Write Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          {/* Post Creation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Share Your Adventure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="What's your latest hiking story? Share your experience..."
                rows={3}
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Add Location
                  </Button>
                </div>
                <Button>Post</Button>
              </div>
            </CardContent>
          </Card>

          {/* Feed Posts */}
          <div className="space-y-6">
            {[
              {
                id: 1,
                author: "Sarah Johnson",
                avatar: "SJ",
                time: "2 hours ago",
                location: "Mount Cook National Park",
                content: "Just completed the most incredible 3-day trek through Mount Cook! The views were absolutely breathtaking. Despite the challenging weather on day 2, our group pushed through and were rewarded with the most spectacular sunrise I've ever seen. Can't wait to plan the next adventure!",
                likes: 24,
                comments: 8,
                images: 3
              },
              {
                id: 2,
                author: "Mike Chen",
                avatar: "MC",
                time: "6 hours ago",
                location: "Routeburn Track",
                content: "Day 1 of the Routeburn Track done! 32km to go. The fall colors are absolutely stunning right now. Met some amazing fellow hikers from Germany who shared some great trail stories. This is why I love the hiking community!",
                likes: 18,
                comments: 5,
                images: 2
              },
              {
                id: 3,
                author: "Emma Wilson",
                avatar: "EW",
                time: "1 day ago",
                location: "Tongariro Alpine Crossing",
                content: "Conquered the Tongariro Alpine Crossing today! The volcanic landscape is truly otherworldly. Pro tip: start early to avoid the crowds and bring layers - the weather can change quickly up there. Already planning my next New Zealand adventure!",
                likes: 31,
                comments: 12,
                images: 4
              }
            ].map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.time}
                          {post.location && (
                            <>
                              <span>•</span>
                              <MapPin className="h-3 w-3" />
                              {post.location}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content}</p>
                  
                  {post.images > 0 && (
                    <div className="mb-4 grid grid-cols-2 gap-2">
                      {Array.from({ length: Math.min(post.images, 4) }).map((_, i) => (
                        <div 
                          key={i} 
                          className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                        >
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="friends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Friend Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Friend Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alex Thompson", mutualFriends: 3, avatar: "AT" },
                    { name: "Lisa Zhang", mutualFriends: 7, avatar: "LZ" }
                  ].map((request, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{request.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{request.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {request.mutualFriends} mutual friends
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Accept</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Find Friends */}
            <Card>
              <CardHeader>
                <CardTitle>Find Hiking Partners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Search by name or location..." />
                <div className="space-y-3">
                  {[
                    { name: "Jordan Miller", location: "Auckland", level: "Advanced", avatar: "JM" },
                    { name: "Casey Brown", location: "Wellington", level: "Intermediate", avatar: "CB" },
                    { name: "Taylor Davis", location: "Christchurch", level: "Beginner", avatar: "TD" }
                  ].map((person, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{person.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{person.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {person.location} • {person.level}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="groups">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Auckland Hiking Club",
                members: 1247,
                description: "Weekly group hikes around Auckland and beyond",
                activity: "Very Active"
              },
              {
                name: "South Island Adventurers",
                members: 892,
                description: "Exploring the best trails in the South Island",
                activity: "Active"
              },
              {
                name: "Beginner Hikers NZ",
                members: 2156,
                description: "Perfect group for those new to hiking",
                activity: "Very Active"
              },
              {
                name: "Alpine Climbing NZ",
                members: 534,
                description: "Technical climbing and mountaineering",
                activity: "Moderate"
              }
            ].map((group, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {group.members.toLocaleString()} members
                    </div>
                    <Badge variant="secondary">{group.activity}</Badge>
                  </div>
                  <Button className="w-full">Join Group</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="write">
          <Card>
            <CardHeader>
              <CardTitle>Write a Hiking Blog Post</CardTitle>
              <CardDescription>
                Share your detailed hiking experience with the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Blog Title</label>
                <Input placeholder="e.g., My Epic Journey to Mount Cook Summit" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Where did you hike?" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Difficulty</label>
                  <select className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background">
                    <option>Easy</option>
                    <option>Moderate</option>
                    <option>Hard</option>
                    <option>Expert</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Input placeholder="e.g., 3 days" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Story</label>
                <Textarea 
                  placeholder="Tell us about your adventure! Include details about the trail, weather, challenges, highlights, and tips for other hikers..."
                  rows={10}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
                <Button>Publish Blog Post</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react";

export default function Weather() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Weather Forecast</h1>
        <p className="text-muted-foreground">
          Check weather conditions for your hiking destinations
        </p>
      </div>

      {/* Location Search */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Location Weather</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter hiking location..." 
              className="flex-1"
            />
            <Button>Get Weather</Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Current Weather
            </CardTitle>
            <CardDescription>Mount Cook National Park</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl font-bold">18°C</div>
                <div className="text-muted-foreground">Partly Cloudy</div>
              </div>
              <Sun className="h-16 w-16 text-yellow-500" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4" />
                <span>Wind: 12 km/h</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                <span>Humidity: 68%</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                <span>Feels like: 20°C</span>
              </div>
              <div className="flex items-center gap-2">
                <CloudRain className="h-4 w-4" />
                <span>Rain: 0%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hiking Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Visibility</span>
                <span className="font-medium text-green-600">Excellent</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Trail Conditions</span>
                <span className="font-medium text-green-600">Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span>UV Index</span>
                <span className="font-medium text-yellow-600">Moderate</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Avalanche Risk</span>
                <span className="font-medium text-green-600">Low</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200">
                ✓ Good hiking weather! Light winds and clear skies expected.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 7-Day Forecast */}
      <Card>
        <CardHeader>
          <CardTitle>7-Day Forecast</CardTitle>
          <CardDescription>Plan your hiking trips in advance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {[
              { day: "Today", high: "18°", low: "8°", icon: Sun, condition: "Sunny" },
              { day: "Tomorrow", high: "16°", low: "6°", icon: Cloud, condition: "Cloudy" },
              { day: "Wed", high: "14°", low: "4°", icon: CloudRain, condition: "Rain" },
              { day: "Thu", high: "12°", low: "2°", icon: Cloud, condition: "Overcast" },
              { day: "Fri", high: "15°", low: "5°", icon: Sun, condition: "Sunny" },
              { day: "Sat", high: "17°", low: "7°", icon: Sun, condition: "Clear" },
              { day: "Sun", high: "19°", low: "9°", icon: Sun, condition: "Sunny" },
            ].map((forecast, index) => {
              const Icon = forecast.icon;
              return (
                <div key={index} className="text-center p-3 rounded-lg border">
                  <div className="font-medium mb-2">{forecast.day}</div>
                  <Icon className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-sm mb-1">{forecast.condition}</div>
                  <div className="text-sm">
                    <span className="font-medium">{forecast.high}</span>
                    <span className="text-muted-foreground">/{forecast.low}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Filter, Heart, Ban, Clock, Building2 } from "lucide-react";

interface Worker {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  shiftsCompleted: number;
  lastShift: string;
  status: "active" | "inactive";
  isFavorite: boolean;
}

const defaultWorkers: Worker[] = [
  {
    id: "CW-2024-001",
    name: "Sarah Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    role: "Registered Nurse",
    rating: 4.8,
    shiftsCompleted: 24,
    lastShift: "Yesterday",
    status: "active",
    isFavorite: true,
  },
  {
    id: "CW-2024-002",
    name: "John Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    role: "Healthcare Assistant",
    rating: 4.5,
    shiftsCompleted: 18,
    lastShift: "2 days ago",
    status: "active",
    isFavorite: false,
  },
  {
    id: "CW-2024-003",
    name: "Emma Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    role: "Senior Care Assistant",
    rating: 4.9,
    shiftsCompleted: 32,
    lastShift: "Today",
    status: "active",
    isFavorite: true,
  },
];

const Workers = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search workers..." />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        {defaultWorkers.map((worker) => (
          <Card key={worker.id} className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={worker.avatar} alt={worker.name} />
                  <AvatarFallback>
                    {worker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{worker.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {worker.id}
                    </Badge>
                  </div>

                  <div className="text-sm text-slate-500">{worker.role}</div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      <span>{worker.rating}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Building2 className="w-4 h-4 mr-1 text-slate-500" />
                      <span>{worker.shiftsCompleted} shifts</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-1 text-slate-500" />
                      <span>Last shift: {worker.lastShift}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={worker.isFavorite ? "default" : "outline"}
                  size="sm"
                  className={
                    worker.isFavorite ? "bg-pink-500 hover:bg-pink-600" : ""
                  }
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${worker.isFavorite ? "fill-current" : ""}`}
                  />
                  {worker.isFavorite ? "Favorite" : "Add to Favorites"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 hover:text-red-600"
                >
                  <Ban className="w-4 h-4 mr-2" />
                  Block
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workers;

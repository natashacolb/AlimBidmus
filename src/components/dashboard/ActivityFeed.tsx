import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CheckCircle2, Clock } from "lucide-react";

interface ActivityItem {
  id: string;
  type:
    | "shift_booked"
    | "timesheet_approved"
    | "notification"
    | "calendar_update";
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar: string;
  };
}

interface ActivityFeedProps {
  activities?: ActivityItem[];
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    type: "shift_booked",
    title: "Shift Booked",
    description: "Morning shift at St. Marys Hospital",
    timestamp: "2 hours ago",
    user: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
  },
  {
    id: "2",
    type: "timesheet_approved",
    title: "Timesheet Approved",
    description: "Weekly timesheet approved by manager",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "notification",
    title: "New Shift Available",
    description: "Evening shift available at City Care Home",
    timestamp: "1 day ago",
  },
  {
    id: "4",
    type: "calendar_update",
    title: "Availability Updated",
    description: "Your availability has been updated for next week",
    timestamp: "2 days ago",
    user: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "shift_booked":
      return <Clock className="h-4 w-4 text-blue-500" />;
    case "timesheet_approved":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "notification":
      return <Bell className="h-4 w-4 text-yellow-500" />;
    case "calendar_update":
      return <Calendar className="h-4 w-4 text-purple-500" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

const ActivityFeed = ({
  activities = defaultActivities,
}: ActivityFeedProps) => {
  return (
    <Card className="h-full w-full bg-gradient-to-br from-green-50/50 via-teal-50/50 to-blue-50/50 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-none shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Activity Feed</h3>
        <Badge variant="secondary">{activities.length} updates</Badge>
      </div>

      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 rounded-lg border p-3 transition-colors hover:bg-slate-50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                {getActivityIcon(activity.type)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900">
                    {activity.title}
                  </h4>
                  <span className="text-sm text-slate-500">
                    {activity.timestamp}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-600">
                  {activity.description}
                </p>

                {activity.user && (
                  <div className="mt-2 flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <img
                        src={activity.user.avatar}
                        alt={activity.user.name}
                      />
                    </Avatar>
                    <span className="text-sm text-slate-600">
                      {activity.user.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ActivityFeed;

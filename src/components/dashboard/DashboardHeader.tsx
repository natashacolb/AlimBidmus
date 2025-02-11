import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Bell,
  Menu,
  MessageSquare,
  Settings,
  User,
  Building2,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  unreadNotifications?: number;
  unreadMessages?: number;
  userType?: "care-worker" | "care-hub" | "care-agency";
  onMenuClick?: () => void;
  onNotificationsClick?: () => void;
  onMessagesClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

const DashboardHeader = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  unreadNotifications = 3,
  unreadMessages = 2,
  userType = "care-worker",
  onMenuClick = () => {},
  onNotificationsClick = () => {},
  onMessagesClick = () => {},
  onSettingsClick = () => {},
  onLogoutClick = () => {},
}: DashboardHeaderProps) => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center">
        <div className="flex w-72 items-center px-6 border-r border-slate-200">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <img src="/vite.svg" alt="CareBook Logo" className="h-8 w-8" />
            <span className="hidden text-xl font-bold md:inline-block">
              CareBook
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-semibold text-slate-900 hidden md:block">
              {location.pathname === "/dashboard" && "Overview"}
              {location.pathname === "/shifts" && "Available Shifts"}
              {location.pathname === "/bookings" && "My Bookings"}
              {location.pathname === "/availability" && "My Availability"}
              {location.pathname === "/timesheet" && "Timesheet"}
              {location.pathname === "/payslips" && "Payslips"}
              {location.pathname === "/report" && "Performance Report"}
              {location.pathname === "/settings" && "Settings"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {userType === "care-hub" && (
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">Sunrise Care Home</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onNotificationsClick}
            >
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
                >
                  {unreadNotifications}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onMessagesClick}
            >
              <MessageSquare className="h-5 w-5" />
              {unreadMessages > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
                >
                  {unreadMessages}
                </Badge>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {userType === "care-worker" ? "Care Worker" : "Care Hub"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onSettingsClick}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogoutClick}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

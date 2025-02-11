import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, Smartphone, Mail, User, Key } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full justify-start mb-6 bg-transparent border-b rounded-none h-auto p-0 space-x-6">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Profile Picture
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Full Name</Label>
                  <Input defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input defaultValue="john.doe@example.com" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+44 123 456 7890" type="tel" />
                </div>
                <div className="grid gap-2">
                  <Label>Care Worker ID</Label>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="CW-2024-001" readOnly />
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Professional Details</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Qualifications</Label>
                <Input defaultValue="Registered Nurse, Level 3 Health and Social Care" />
              </div>
              <div className="grid gap-2">
                <Label>Experience</Label>
                <Input defaultValue="5 years" />
              </div>
              <div className="grid gap-2">
                <Label>Specializations</Label>
                <Input defaultValue="Elderly Care, Dementia Care" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Change Password</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your password regularly to keep your account secure
                  </p>
                </div>
                <Button>
                  <Key className="w-4 h-4 mr-2" />
                  Update
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Current Password</Label>
                  <Input type="password" />
                </div>
                <div className="grid gap-2">
                  <Label>New Password</Label>
                  <Input type="password" />
                </div>
                <div className="grid gap-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Two-Factor Authentication
            </h3>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-medium">Authenticator App</div>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app to generate one-time codes
                </p>
              </div>
              <Switch />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-0">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Email Notifications</div>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about new shifts and bookings
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">SMS Notifications</div>
                  <p className="text-sm text-muted-foreground">
                    Get text messages for urgent updates
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Push Notifications</div>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your mobile device
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

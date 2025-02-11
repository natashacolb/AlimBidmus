import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, Bell, Shield, Key, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Tabs defaultValue="facility" className="w-full">
        <TabsList className="w-full justify-start mb-6 bg-transparent border-b rounded-none h-auto p-0 space-x-6">
          <TabsTrigger
            value="facility"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Facility Profile
          </TabsTrigger>
          <TabsTrigger
            value="shifts"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Shift Preferences
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-2"
          >
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="facility" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Facility Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your facility's profile and contact information
                  </p>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Facility Name</Label>
                  <Input defaultValue="St. Mary's Care Home" />
                </div>
                <div className="grid gap-2">
                  <Label>Address</Label>
                  <Textarea defaultValue="123 Care Street, Manchester, M1 1AB" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Contact Email</Label>
                    <Input type="email" defaultValue="admin@stmarys.care" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Phone</Label>
                    <Input type="tel" defaultValue="+44 123 456 7890" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>CQC Registration Number</Label>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="1-123456789" />
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="shifts" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Shift Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    Set default requirements for all shifts
                  </p>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Required Qualifications</Label>
                  <Textarea placeholder="List required qualifications..." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Minimum Experience (years)</Label>
                    <Input type="number" defaultValue="2" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Default Shift Duration (hours)</Label>
                    <Input type="number" defaultValue="8" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require DBS Check</Label>
                    <div className="text-sm text-muted-foreground">
                      Workers must have valid DBS certificate
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Notification Settings
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your notification preferences
                  </p>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Shift Applications</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when workers apply for shifts
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Timesheet Submissions</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when timesheets are submitted
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Incident Reports</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when new incidents are reported
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Payment Updates</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify about payment processing and updates
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6 mt-0">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Security Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage security and access control
                  </p>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Admin Users</Label>
                  <Textarea
                    placeholder="Enter email addresses for admin access..."
                    defaultValue="admin@stmarys.care\nmanager@stmarys.care"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <div className="text-sm text-muted-foreground">
                      Require 2FA for all admin users
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP Restrictions</Label>
                    <div className="text-sm text-muted-foreground">
                      Limit access to specific IP addresses
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Audit Logging</Label>
                    <div className="text-sm text-muted-foreground">
                      Track all user actions and changes
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

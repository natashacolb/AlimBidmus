import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Save, Send } from "lucide-react";
import { useShiftStore } from "@/lib/store";

interface ShiftData {
  role: string;
  date: Date;
  startTime: string;
  endTime: string;
  payRate: number;
  paidBreak: boolean;
  breakDuration: number;
  uniformRequired: boolean;
  additionalRequirements: string;
  preferredWorkersOnly: boolean;
}

const PostShifts = () => {
  const addShift = useShiftStore((state) => state.addShift);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [shiftData, setShiftData] = React.useState<ShiftData>({
    role: "",
    date: new Date(),
    startTime: "",
    endTime: "",
    payRate: 18.5,
    paidBreak: false,
    breakDuration: 30,
    uniformRequired: true,
    additionalRequirements: "",
    preferredWorkersOnly: false,
  });

  const handlePostShift = () => {
    // Create a new shift object
    const newShift = {
      facility: "St. Mary's Care Home",
      location: "123 Oxford Road, Manchester City Centre, M13 9PL",
      date: shiftData.date.toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      time: `${shiftData.startTime} - ${shiftData.endTime}`,
      payRate: `£${shiftData.payRate.toFixed(2)}/hr`,
      role: shiftData.role,
      requiredSkills: shiftData.additionalRequirements
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0),
    };

    addShift(newShift);
    alert(
      "Shift posted successfully! Please approve it in the Manage Shifts page.",
    );
  };

  return (
    <div className="space-y-6 p-6 bg-slate-50/50">
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Post New Shift</h3>
            <div className="flex gap-2">
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={handlePostShift}>
                <Send className="w-4 h-4 mr-2" />
                Post Shift
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label>Role</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={shiftData.role}
                onChange={(e) =>
                  setShiftData({ ...shiftData, role: e.target.value })
                }
              >
                <option value="">Select a role</option>
                <option value="Registered General Nurse (RGN)">
                  Registered General Nurse (RGN)
                </option>
                <option value="Healthcare Assistant (HCA)">
                  Healthcare Assistant (HCA)
                </option>
                <option value="Support Worker (SW)">Support Worker (SW)</option>
                <option value="Registered Mental Health Nurse (RMN)">
                  Registered Mental Health Nurse (RMN)
                </option>
                <option value="Care Worker (CW)">Care Worker (CW)</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      if (newDate)
                        setShiftData({ ...shiftData, date: newDate });
                    }}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Shift Times</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">
                        Start
                      </Label>
                      <Input
                        type="time"
                        value={shiftData.startTime}
                        onChange={(e) =>
                          setShiftData({
                            ...shiftData,
                            startTime: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">
                        End
                      </Label>
                      <Input
                        type="time"
                        value={shiftData.endTime}
                        onChange={(e) =>
                          setShiftData({
                            ...shiftData,
                            endTime: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>Pay Rate (per hour)</Label>
                  <Input
                    type="number"
                    value={shiftData.payRate}
                    onChange={(e) =>
                      setShiftData({
                        ...shiftData,
                        payRate: parseFloat(e.target.value),
                      })
                    }
                    step="0.50"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between space-y-0.5">
                    <div>
                      <Label>Paid Break</Label>
                      <div className="text-sm text-muted-foreground">
                        Include paid break time
                      </div>
                    </div>
                    <Switch
                      checked={shiftData.paidBreak}
                      onCheckedChange={(checked) =>
                        setShiftData({ ...shiftData, paidBreak: checked })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Break Duration (minutes)</Label>
                    <Input
                      type="number"
                      value={shiftData.breakDuration}
                      onChange={(e) =>
                        setShiftData({
                          ...shiftData,
                          breakDuration: parseInt(e.target.value),
                        })
                      }
                      min="0"
                      step="15"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between space-y-0.5">
                  <div>
                    <Label>Uniform Required</Label>
                    <div className="text-sm text-muted-foreground">
                      Worker must wear uniform
                    </div>
                  </div>
                  <Switch
                    checked={shiftData.uniformRequired}
                    onCheckedChange={(checked) =>
                      setShiftData({ ...shiftData, uniformRequired: checked })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Required Skills (comma-separated)</Label>
              <Textarea
                placeholder="Enter required skills, separated by commas..."
                value={shiftData.additionalRequirements}
                onChange={(e) =>
                  setShiftData({
                    ...shiftData,
                    additionalRequirements: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex items-center justify-between border-t pt-4">
              <div className="space-y-0.5">
                <Label>Preferred Workers Only</Label>
                <div className="text-sm text-muted-foreground">
                  Limit shift visibility to your preferred worker list
                </div>
              </div>
              <Switch
                checked={shiftData.preferredWorkersOnly}
                onCheckedChange={(checked) =>
                  setShiftData({ ...shiftData, preferredWorkersOnly: checked })
                }
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostShifts;

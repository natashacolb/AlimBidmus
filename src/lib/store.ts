import { create } from "zustand";

export interface Shift {
  id: string;
  facility: string;
  location: string;
  date: string;
  time: string;
  payRate: string;
  role: string;
  requiredSkills: string[];
  status: "pending" | "approved" | "rejected";
  bookedBy?: string;
  created_at: string;
}

interface ShiftStore {
  shifts: Shift[];
  addShift: (
    shift: Omit<Shift, "id" | "status" | "created_at" | "bookedBy">,
  ) => void;
  bookShift: (shiftId: string, workerName: string) => void;
  approveShift: (shiftId: string) => void;
  rejectShift: (shiftId: string) => void;
  getAvailableShifts: () => Shift[];
  getBookedShifts: (status?: "pending" | "approved" | "rejected") => Shift[];
}

export const useShiftStore = create<ShiftStore>((set, get) => ({
  shifts: [],
  addShift: (shiftData) =>
    set((state) => ({
      shifts: [
        {
          ...shiftData,
          id: `SHIFT-${Date.now()}`,
          status: "pending",
          created_at: new Date().toISOString(),
        },
        ...state.shifts,
      ],
    })),
  bookShift: (shiftId, workerName) =>
    set((state) => ({
      shifts: state.shifts.map((shift) =>
        shift.id === shiftId
          ? { ...shift, bookedBy: workerName, status: "pending" }
          : shift,
      ),
    })),
  approveShift: (shiftId) =>
    set((state) => ({
      shifts: state.shifts.map((shift) =>
        shift.id === shiftId ? { ...shift, status: "approved" } : shift,
      ),
    })),
  rejectShift: (shiftId) =>
    set((state) => ({
      shifts: state.shifts.map((shift) =>
        shift.id === shiftId ? { ...shift, status: "rejected" } : shift,
      ),
    })),
  getAvailableShifts: () => {
    const state = get();
    return state.shifts.filter((shift) => !shift.bookedBy);
  },
  getBookedShifts: (status) => {
    const state = get();
    const bookedShifts = state.shifts.filter((shift) => shift.bookedBy);
    return status
      ? bookedShifts.filter((shift) => shift.status === status)
      : bookedShifts;
  },
}));

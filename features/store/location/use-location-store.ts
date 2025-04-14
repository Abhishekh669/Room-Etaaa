import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocationState {
  location: string;
  position: [number, number];
  setLocation: (loc: string) => void;
  setPosition: (pos: [number, number]) => void;
  clearLocation: () => void;
  clearPosition: () => void;
  resetAllData: () => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      location: "",
      position: [0,0],
      setLocation: (loc) => set({ location: loc }),
      setPosition: (pos) => set({ position: pos }),
      clearLocation: () => set({ location: "" }),
      clearPosition: () => set({ position: [0,0] }),
      resetAllData: () => set({ location: "", position: [0,0] }),
    }),
    {
      name: "location-storage",
    }
  )
);

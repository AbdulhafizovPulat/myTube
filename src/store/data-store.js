import { create } from "zustand";

export const useStore = create((set) => ({
  navCategories: "New",
  changeCategories: (newCategories) => set({ navCategories: newCategories }),
}));

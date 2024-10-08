import { create } from "zustand";

interface GlobalStore {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

export default useGlobalStore;

import { create } from "zustand";

interface LibraryStore {
	mode: "minimized" | "expanded" | "fullscreen";
	setMode: (mode: "minimized" | "expanded" | "fullscreen") => void;
}

export const useLibraryStore = create<LibraryStore>((set) => ({
	mode: "minimized",
	setMode: (mode) => set({ mode }),
}));

import { create } from "zustand";
import { persist } from "zustand/middleware";
interface LibraryStore {
	mode: "minimized" | "expanded" | "fullscreen";
	setMode: (mode: LibraryStore["mode"]) => void;
}

export const useLibraryStore = create<LibraryStore>()(
	persist(
		(set) => ({
			mode: "minimized",
			setMode: (mode) => set({ mode }),
		}),
		{ name: "library-mode" }
	)
);

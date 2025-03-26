import { useLibraryStore } from "../../../stores/library.stores";
import { Maximize2 } from "lucide-react";
import { Minimize2 } from "lucide-react";

export function FullscreenToggle() {
	const { mode, setMode } = useLibraryStore();

	const toggleFullscreen = () => {
		setMode(mode === "fullscreen" ? "expanded" : "fullscreen");
	};

	return (
		<button
			onClick={toggleFullscreen}
			className="relative group w-max cursor-pointer px-2 py-2 rounded hover:bg-gray-100">
			{mode === "fullscreen" ? (
				<Minimize2 className="w-4 h-4" />
			) : (
				<Maximize2 className="w-4 h-4" />
			)}
		</button>
	);
}

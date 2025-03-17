import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useLibraryStore } from "../../../stores/library.stores";

export function FullscreenLibButton() {
	const { mode, setMode } = useLibraryStore();

	const toggleFullscreen = () => {
		setMode(mode === "fullscreen" ? "minimized" : "fullscreen");
	};

	return (
		<button
			onClick={toggleFullscreen}
			className="relative group w-max cursor-pointer">
			<ArrowsPointingOutIcon className="w-6 h-6" />
		</button>
	);
}

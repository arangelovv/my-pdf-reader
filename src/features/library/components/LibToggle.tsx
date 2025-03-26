import { ChevronLeft } from "lucide-react";
import { useLibraryStore } from "../../../stores/library.stores";

export function LibToggle() {
	const { setMode } = useLibraryStore();

	const toggleMode = () => {
		setMode("minimized");
	};

	return (
		<button
			onClick={toggleMode}
			className="relative group w-max cursor-pointer px-2 py-2 rounded hover:bg-gray-100">
			<ChevronLeft className="w-4 h-4" />
		</button>
	);
}

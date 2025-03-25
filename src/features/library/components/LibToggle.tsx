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
			className="relative group w-max cursor-pointer">
			<ChevronLeft className="w-4 h-4" />
		</button>
	);
}

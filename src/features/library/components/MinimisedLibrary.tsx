import { ChevronRight } from "lucide-react";
import { useLibraryStore } from "../../../stores/library.stores";
export function MinimisedLibrary() {
	const { setMode } = useLibraryStore();

	const toggleMode = () => {
		setMode("expanded");
	};

	return (
		<div className="flex flex-col justify-center items-center w-6">
			<div
				onClick={toggleMode}
				className="py-6 bg-blue-100 rounded-br-sm rounded-tr-sm cursor-pointer">
				<ChevronRight className="w-4 h-4 text-blue-600" />
			</div>
		</div>
	);
}

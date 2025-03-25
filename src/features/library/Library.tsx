import { useLibraryStore } from "../../stores/library.stores";
import { FullscreenToggle } from "./components/FullscreenToggle";
import { LibToggle } from "./components/LibToggle";
import { AddFileButton } from "./components/AddFileButton";
import { LibSearchBar } from "./components/LibSearchBar";
import { EmptyLibrary } from "./components/EmptyLibrary";
import { MinimisedLibrary } from "./components/MinimisedLibrary";

export function Library() {
	const mode = useLibraryStore((state) => state.mode);

	const libContainerClasses =
		mode === "fullscreen"
			? "flex flex-col w-full border-r-1 border-gray-300 overflow-scroll transition-all duration-300 flex-shrink-0"
			: "flex flex-col w-76 border-r-1 border-gray-300 overflow-scroll transition-all duration-300 flex-shrink-0";

	if (mode === "minimized") {
		return <MinimisedLibrary />;
	}

	return (
		<div className={libContainerClasses}>
			<div className="p-4 flex items-center gap-2 border-b border-gray-300 ">
				<span className="text-xl font-semibold flex-grow">Library</span>
				<LibToggle />
				<FullscreenToggle />
			</div>
			<div className="p-4 flex flex-row items-center gap-2 border-b border-gray-300">
				<LibSearchBar />
				<AddFileButton />
			</div>
			<div className="p-4 h-full grow">
				<EmptyLibrary />
			</div>
		</div>
	);
}

import { FileCard } from "./FileCard";
import { SortLibraryButton } from "./SortLibraryButton";

export function PopulatedLibrary() {
	return (
		<div className="h-full flex flex-col">
			<div className="flex flex-row items-center gap-2 px-4 py-2 border-b border-gray-300">
				<span className="text-sm text-gray-500 grow">4 PDFs</span>
				<SortLibraryButton />
			</div>
			<div className="flex-1 overflow-y-auto px-4 py-2">
				<div className="grid gap-4 p-2 grid-cols-1">
					<FileCard />
					<FileCard />
					<FileCard />
					<FileCard />
				</div>
			</div>
		</div>
	);
}

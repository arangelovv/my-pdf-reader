import { useLibraryStore } from "../../../stores/library.stores";

export function PreviewCard() {
	const mode = useLibraryStore((state) => state.mode);

	const containerClasses =
		mode === "fullscreen"
			? "flex flex-col cursor-pointer hover:text-blue-500 hover:scale-105 transition-all duration-300"
			: "flex flex-col w-full h-2/5 flex-shrink-0 cursor-pointer hover:text-blue-500 hover:scale-105 transition-all duration-300 z-40";

	const previewImageClasses =
		mode === "fullscreen"
			? "aspect-[3/4] rounded-lg bg-gray-300"
			: "flex flex-col w-full grow rounded-lg bg-gray-300";

	return (
		<div className={containerClasses}>
			<div
				id="preview-none"
				className={previewImageClasses}></div>
			<div
				id="preview-info"
				className="flex flex-col pt-2 pb-2">
				<span className="font-bold text-gray-950">The Hobbit</span>
				<span className="text-sm font-medium text-gray-700">
					J.R.R. Tolkien
				</span>
			</div>
		</div>
	);
}

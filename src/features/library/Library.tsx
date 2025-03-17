import { useLibraryStore } from "../../stores/library.stores";
import { AddPdfButton } from "./components/AddPdfButton";
import { FullscreenLibButton } from "./components/FullscreenLibButton";
import { PreviewCard } from "./components/PreviewCard";

export function Library() {
	const mode = useLibraryStore((state) => state.mode);

	if (mode === "expanded") {
		return null;
	}

	const containerClasses =
		mode === "fullscreen"
			? "p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
			: "flex flex-col w-60 border-r-1 border-gray-300 p-4 gap-4 overflow-scroll";

	return (
		<div className={containerClasses}>
			<div
				className={
					mode === "fullscreen"
						? "col-span-full flex justify-end gap-2"
						: "flex justify-end gap-2"
				}>
				<FullscreenLibButton />
				<AddPdfButton />
			</div>
			<PreviewCard />
			<PreviewCard />
			<PreviewCard />
			<PreviewCard />
			<PreviewCard />
		</div>
	);
}

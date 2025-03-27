import { FileCard } from "./FileCard";
import { SortLibraryButton } from "./SortLibraryButton";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../shared/db";

export function PopulatedLibrary() {
	const pdfFiles = useLiveQuery(async () => {
		return await db.pdfFiles.toArray();
	}, []);
	const pdfCount = pdfFiles?.length ?? 0;

	return (
		<div className="h-full flex flex-col">
			<div className="flex flex-row items-center gap-2 px-4 py-2 border-b border-gray-300">
				<span className="text-sm text-gray-500 grow">{pdfCount} PDFs</span>
				<SortLibraryButton />
			</div>
			<div className="flex-1 overflow-y-auto px-4 py-2">
				<div className="grid gap-4 p-2 grid-cols-1">
					{pdfFiles?.map((pdfFile) => (
						<FileCard
							key={pdfFile.id}
							pdfFile={pdfFile}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

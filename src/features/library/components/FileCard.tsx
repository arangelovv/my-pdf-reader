import { Trash2 } from "lucide-react";
import { db, PdfFile } from "../../../shared/db";
import { Link } from "@tanstack/react-router";
import { useLibraryStore } from "../../../stores/library.stores";

export function FileCard({ pdfFile }: { pdfFile: PdfFile }) {
	const { mode, setMode } = useLibraryStore();

	const handleClick = () => {
		if (mode === "fullscreen") {
			setMode("expanded");
		}
	};

	return (
		<Link
			to="/viewer/$fileId"
			params={{ fileId: pdfFile.id.toString() }}
			onClick={handleClick}
			className="[&.active]:bg-blue-100 rounded-lg">
			<div className="group relative flex p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all duration-300">
				<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity duration-300">
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							db.pdfFiles.delete(pdfFile.id);
							if (
								window.location.pathname.startsWith("/viewer/") &&
								window.location.pathname.endsWith(pdfFile.id.toString())
							) {
								window.location.href = "/";
							}
						}}
						className="p-1 bg-red-400 rounded-lg cursor-pointer hover:bg-red-500">
						<Trash2 className="w-4 h-4 text-white" />
					</button>
				</div>
				<div className="flex flex-col gap-2">
					<img
						src="/pdf-icon.svg"
						alt="pdf-icon"
						className="w-full h-full object-cover rounded-lg aspect-[3/4]"
						onClick={() => {
							window.location.href = `/viewer/${pdfFile.id}`;
						}}
					/>
					<div className="flex flex-col gap-1">
						<span className="text-base font-semibold">{pdfFile.name}</span>
						{/* <div className="flex flex-row items-center gap-2">
						<FileText className="w-4 h-4 text-gray-500" />
						<span className="text-xs text-gray-500">684 Pages</span>
					</div> */}
					</div>
				</div>
			</div>
		</Link>
	);
}

import { FileText, Trash2 } from "lucide-react";

export function FileCard() {
	return (
		<div className="group relative flex p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all duration-300">
			<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-opacity duration-300">
				<button className="p-1  bg-red-400 rounded-lg cursor-pointer">
					<Trash2 className="w-4 h-4 text-white" />
				</button>
			</div>
			<div className="flex flex-col gap-2">
				<img
					src="/pdf-icon.svg"
					alt="pdf-icon"
					className="w-full h-full object-cover rounded-lg aspect-[3/4]"
				/>
				<div className="flex flex-col gap-1">
					<span className="text-base font-semibold">Game of Thrones</span>
					<span className="text-sm text-gray-500">George R.R. Martin</span>
					<div className="flex flex-row items-center gap-2">
						<FileText className="w-4 h-4 text-gray-500" />
						<span className="text-xs text-gray-500">684 Pages</span>
					</div>
				</div>
			</div>
		</div>
	);
}

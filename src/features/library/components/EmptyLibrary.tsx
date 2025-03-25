import { FolderOpen } from "lucide-react";

export function EmptyLibrary() {
	return (
		<div className="flex flex-col items-center justify-center h-full gap-4">
			<div className="flex items-center justify-center w-24 h-24 bg-blue-300 rounded-full">
				<FolderOpen className="w-12 h-12 text-blue-500" />
			</div>
			<span className="text-gray-900 font-bold">Your library is empty</span>
			<span className="text-gray-600 font-normal">
				Add your first PDF to get started
			</span>
		</div>
	);
}

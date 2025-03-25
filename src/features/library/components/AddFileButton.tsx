import { Plus } from "lucide-react";

export function AddFileButton() {
	return (
		<button className="inline-flex items-center justify-center gap-2 text-nowrap  bg-gray-900 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors">
			<Plus className="w-5 h-5 text-gray-100" />
			<span className="text-sm font-medium text-gray-100 hidden sm:inline">
				Add PDF
			</span>
		</button>
	);
}

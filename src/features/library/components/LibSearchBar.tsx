import { Search } from "lucide-react";

export function LibSearchBar() {
	return (
		<div className="relative w-full">
			<Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
			<input
				type="text"
				placeholder="Search PDFs..."
				className="w-full p-2 pl-8 py-2 text-sm rounded-md border border-gray-300"
			/>
		</div>
	);
}

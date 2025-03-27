import { Plus } from "lucide-react";
import { useRef } from "react";
import { db } from "../../../shared/db";

export function AddFileButton() {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleClick = () => {
		console.log("clicked");
		fileInputRef.current?.click();
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];

		if (file) {
			const id = await db.table("pdfFiles").add({
				name: file.name,
				size: file.size,
			});
			console.log("File selected:", id);
		}
	};

	return (
		<div>
			<input
				type="file"
				ref={fileInputRef}
				accept=".pdf"
				className="hidden"
				onChange={handleFileChange}
			/>
			<button
				onClick={handleClick}
				className="inline-flex items-center justify-center gap-2 text-nowrap  bg-gray-900 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors">
				<Plus className="w-5 h-5 text-gray-100" />
				<span className="text-sm font-medium text-gray-100 hidden sm:inline">
					Add PDF
				</span>
			</button>
		</div>
	);
}

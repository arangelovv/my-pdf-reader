import { FileText } from "lucide-react";
import { FolderSearch } from "lucide-react";
import { BookOpenText } from "lucide-react";

export function Home() {
	return (
		<div className="h-full py-6 px-8 flex flex-col gap-4">
			<section className="flex flex-col gap-2">
				<h1 className="text-4xl font-bold">Welcome to MyPDFReader </h1>
				<p className="text-lg text-gray-600">
					Your personal PDF library and reading companion
				</p>
			</section>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Getting Started</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex flex-col gap-2 border rounded-md p-4 border-gray-300 shadow-xs">
						<div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
							<FileText className="w-6 h-6 text-blue-600" />
						</div>
						<span className="text-lg font-semibold">Add PDFs</span>
						<span className="font-medium">
							Upload your PDF files to build your personal library
						</span>
					</div>
					<div className="flex flex-col gap-2 border rounded-md p-4 border-gray-300 shadow-xs">
						<div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
							<FolderSearch className="w-6 h-6 text-blue-600" />
						</div>
						<span className="text-lg font-semibold">Organize</span>
						<span className="font-medium">
							Sort and search your PDFs to find what you need quickly
						</span>
					</div>
					<div className="flex flex-col gap-2 border rounded-md p-4 border-gray-300 shadow-xs">
						<div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
							<BookOpenText className="w-6 h-6 text-blue-600" />
						</div>
						<span className="text-lg font-semibold">Read</span>
						<span className="font-medium">
							Open and read your PDFs with our powerful reader
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

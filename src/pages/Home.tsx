import { useLibraryStore } from "../stores/library.stores";

export function Home() {
	const { mode, setMode } = useLibraryStore();

	const toggleLibraryMode = () => {
		setMode(mode === "expanded" ? "minimized" : "expanded");
	};

	return (
		<div className="p-4">
			<h1 className="text-3xl font-bold mb-4">Welcome Home</h1>
			<p className="text-gray-600">
				This is the home page of your PDF Reader application.
			</p>
			<button
				onClick={toggleLibraryMode}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				{mode === "expanded" ? "Minimize Library" : "Expand Library"}
			</button>
		</div>
	);
}

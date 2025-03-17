import { Outlet } from "@tanstack/react-router";
import { Library } from "./features/library/Library";
import { useLibraryStore } from "./stores/library.stores";

function App() {
	const mode = useLibraryStore((state) => state.mode);

	if (mode === "fullscreen") {
		return (
			<div className="min-h-screen bg-gray-100">
				<Library />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 flex flex-row">
			<Library />
			<main className="grow">
				<Outlet />
			</main>
		</div>
	);
}

export default App;

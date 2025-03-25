import { Outlet } from "@tanstack/react-router";
import { Library } from "./features/library/Library";
import { useLibraryStore } from "./stores/library.stores";

function App() {
	const mode = useLibraryStore((state) => state.mode);

	if (mode === "fullscreen") {
		return (
			<div className="min-h-screen">
				<Library />
			</div>
		);
	}

	return (
		<div className="min-h-screen flex">
			<Library />
			<main className="flex-1 min-w-0">
				<Outlet />
			</main>
		</div>
	);
}

export default App;

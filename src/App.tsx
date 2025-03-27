import { Outlet } from "@tanstack/react-router";
import { Library } from "./features/library/Library";
import { useLibraryStore } from "./stores/library.stores";

function App() {
	const mode = useLibraryStore((state) => state.mode);

	if (mode === "fullscreen") {
		return (
			<div className="h-screen overflow-hidden">
				<Library />
			</div>
		);
	}

	return (
		<div className="h-screen flex overflow-hidden">
			<div className="h-full flex-shrink-0">
				<Library />
			</div>
			<main className="flex-1 min-w-0 overflow-auto">
				<Outlet />
			</main>
		</div>
	);
}

export default App;

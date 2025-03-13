import { Link, Outlet } from "@tanstack/react-router";

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<nav className="bg-white shadow-sm p-4">
				<div className="container mx-auto">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-bold">My PDF Reader</h1>
						<div className="space-x-4">
							<Link
								to="/"
								className="text-gray-600 hover:text-gray-900">
								Root
							</Link>
							<Link
								to="/home"
								className="text-gray-600 hover:text-gray-900">
								Home
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<main className="container mx-auto mt-8">
				<Outlet />
			</main>
		</div>
	);
}

export default App;

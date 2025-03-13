import {
	createRouter,
	createRootRoute,
	createRoute,
	redirect,
} from "@tanstack/react-router";
import App from "./App";
import { Home } from "./pages/Home";

const rootRoute = createRootRoute({
	component: App,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	beforeLoad: () => {
		throw redirect({ to: "/home" });
	},
});

const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/home",
	component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);

export const router = createRouter({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

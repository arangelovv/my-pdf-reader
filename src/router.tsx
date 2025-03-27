import {
	createRouter,
	createRootRoute,
	createRoute,
	redirect,
} from "@tanstack/react-router";
import App from "./App";
import { Home } from "./pages/Home";
import { PdfViewerTest } from "./pages/PdfViewerTest";

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

export const fileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/viewer/$fileId",
	component: PdfViewerTest,
});

const routeTree = rootRoute.addChildren([indexRoute, homeRoute, fileRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

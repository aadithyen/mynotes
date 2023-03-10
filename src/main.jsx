import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import thisTheme from "./theme";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import "@fontsource/space-grotesk";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { AuthContextProvider } from "./AuthContext";
import Protected from "./components/Protected";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Protected>
				<Home />
			</Protected>
		),
	},
	{
		path: "edit",
		element: (
			<Protected>
				<Edit />
			</Protected>
		),
	},
	{
		path: "login",
		element: <Login />,
	},
]);

if (!localStorage.hasOwnProperty("num-notes")) {
	localStorage.setItem("num-notes", 0);
}

if (
	localStorage.getItem("chakra-ui-color-mode") == "light" &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	localStorage.removeItem("chakra-ui-color-mode");
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColorModeScript type="localStorage" initialColorMode="system" />
		<ChakraProvider theme={thisTheme}>
			<AuthContextProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</AuthContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);

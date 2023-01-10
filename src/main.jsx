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
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={thisTheme.config.initialColorMode} />
		<ChakraProvider theme={thisTheme}>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);

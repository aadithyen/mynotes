import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import thisTheme from "./theme";
import App from "./App";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import "@fontsource/space-grotesk";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "edit",
		element: <Edit />,
	},
	{
		path: "login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={thisTheme}>
			<ColorModeScript initialColorMode={thisTheme.config.initialColorMode} />
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);

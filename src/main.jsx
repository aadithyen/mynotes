import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import thisTheme from "./theme";
import App from "./App";
import "@fontsource/space-grotesk";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={thisTheme}>
			<ColorModeScript initialColorMode={thisTheme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

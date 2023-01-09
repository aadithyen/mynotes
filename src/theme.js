import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config = {
	fonts: {
		heading: `'Space Grotesk', sans-serif`,
		body: `'Space Grotesk', sans-serif`,
	},
	colors: {
		primary: {
			50: "#FDF8E7",
			100: "#FAEDBC",
			200: "#F7E191",
			300: "#F5D566",
			400: "#F2CA3B",
			500: "#EFBE10",
			600: "#BF980D",
			700: "#8F720A",
			800: "#5F4C07",
			900: "#302603",
		},
		secondary: {
			50: "#FDEAE7",
			100: "#FAC3BD",
			200: "#F79D92",
			300: "#F47767",
			400: "#F0513D",
			500: "#ED2A12",
			600: "#BE220E",
			700: "#8E190B",
			800: "#5F1107",
			900: "#2F0804",
		},
	},
	styles: {
		global: {
			body: {
				bg: "#11151c",
			},
		},
	},

	components: {
		Heading: {
			baseStyle: {
				fontWeight: "medium",
			},
		},
		Card: {
			baseStyle: {
				bg: "#212d40",
			},
		},
	},
	initialColorMode: "dark", // 'dark' | 'light'
	useSystemColorMode: false,
};

const theme = extendTheme(config);

export default theme;

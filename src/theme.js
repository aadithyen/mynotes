import {
	extendTheme,
	withDefaultColorScheme,
	withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
	fonts: {
		heading: `'Space Grotesk', sans-serif`,
		body: `'Space Grotesk', sans-serif`,
	},
	semanticTokens: {
		colors: {
			"chakra-body-bg": { _light: "#fafafa", _dark: "#11151c" },
		},
	},
	components: {
		Input: {
			defaultProps: {
				focusBorderColor: "teal.300",
			},
		},
		Textarea: {
			defaultProps: {
				focusBorderColor: "teal.300",
			},
		},
		Heading: {
			baseStyle: {
				fontWeight: "medium",
			},
		},
	},
};

const colorConfig = { initialColorMode: "system", useSystemColorMode: true };

const theme = extendTheme(
	config,
	{ config: colorConfig },
	withDefaultVariant({
		variant: "outline",
		components: ["Button", "Card"],
	}),
	withDefaultColorScheme({ colorScheme: "teal" })
);

export default theme;

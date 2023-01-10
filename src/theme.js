import {
	extendTheme,
	withDefaultColorScheme,
	withDefaultProps,
	withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
	fonts: {
		heading: `'Space Grotesk', sans-serif`,
		body: `'Space Grotesk', sans-serif`,
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode("#fafafa", "#11151c")(props),
			},
		}),
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

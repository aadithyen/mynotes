import { Box, IconButton } from "@chakra-ui/react";

const FAB = ({ icon }) => {
	return (
		<Box pos="fixed" bottom="3em" right="3em">
			<IconButton
				aria-label="add note"
				height="60px"
				width="60px"
				fontSize="25px"
				boxShadow="xl"
				colorScheme="primary"
				icon={icon}
			/>
		</Box>
	);
};

export default FAB;

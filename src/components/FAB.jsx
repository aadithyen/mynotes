import { Box, IconButton } from "@chakra-ui/react";

const FAB = ({ icon, action }) => {
	return (
		<Box pos="fixed" bottom="3em" right="3em" zIndex={10}>
			<IconButton
				aria-label="add note"
				height="60px"
				width="60px"
				bg="var(--chakra-colors-chakra-body-bg)"
				fontSize="25px"
				icon={icon}
				onClick={action}
			/>
		</Box>
	);
};

export default FAB;

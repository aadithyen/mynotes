import { Box } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

const NotesList = () => {
	return (
		<Box
			padding={4}
			w="100%"
			maxW="1000px"
			mx="auto"
			sx={{ columnCount: [1, 2] }}
		>
			<NoteCard heading="unnecessarily long heading for pleasure" />
			<NoteCard heading="longer text" />
			<NoteCard heading="short" />
			<NoteCard heading="unnecessarily long heading" />
		</Box>
	);
};

export default NotesList;

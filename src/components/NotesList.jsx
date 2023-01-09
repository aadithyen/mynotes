import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";

const NotesList = ({ notes }) => {
	return (
		<Flex flexDir="column" px="4" gap="2px">
			{notes.map((note, index) => (
				<Link to="/edit" state={{ data: note, id: index }} key={index}>
					<NoteCard heading={note.title} body={note.body} key={index} />
				</Link>
			))}
		</Flex>
	);
};

export default NotesList;

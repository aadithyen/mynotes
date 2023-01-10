import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, searchTerm }) => {
	const newNotes =
		searchTerm != ""
			? notes.filter((note) => {
					return note.title.toLowerCase().match(searchTerm.toLowerCase());
			  })
			: notes;

	if (notes.length != 0) {
		return (
			<Flex flexDir="column" px="4" gap="2px">
				{newNotes.map((note, index) => {
					return (
						<RouterLink
							to="/edit"
							state={{ data: note, id: index }}
							key={index}
						>
							<NoteCard heading={note.title} body={note.body} key={index} />
						</RouterLink>
					);
				})}
			</Flex>
		);
	} else {
		return (
			<Flex flexDir="column" alignItems="center" justifyContent="center">
				<Heading mt="25vh">¯\_(ツ)_/¯</Heading>
				<Text mt={4}>
					No notes yet!
					<Link
						as={RouterLink}
						colorScheme="primary"
						px={1}
						to="/edit"
						state={{ scratch: true }}
					>
						Add one
					</Link>
					to get started.
				</Text>
			</Flex>
		);
	}
};

export default NotesList;

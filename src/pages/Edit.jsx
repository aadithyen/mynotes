import {
	Box,
	Flex,
	IconButton,
	Editable,
	EditableInput,
	EditableTextarea,
	EditablePreview,
	Textarea,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
import { MdArrowBack, MdDelete } from "react-icons/md";
import FAB from "../components/FAB";

const Edit = () => {
	return (
		<Box maxW="1000px" my="4" mx="auto" px="4" mt="8">
			<Flex flexDir="column">
				<Flex flexDir="row" justifyContent="space-between">
					<IconButton icon={<MdArrowBack />}></IconButton>
					<IconButton icon={<MdDelete />}></IconButton>
				</Flex>
				<Editable
					defaultValue="the title of the note"
					fontSize="4xl"
					as="h2"
					mt="12"
					minH="140px"
				>
					<EditablePreview />
					<EditableTextarea overflow="hidden" resize="none" rows="2" />
				</Editable>

				<Textarea
					minH="xl"
					placeholder="Write here"
					border="none"
					resize="none"
				></Textarea>

				<FAB icon={<FaSave />} />
			</Flex>
		</Box>
	);
};

export default Edit;

import { Box, Flex, IconButton, Textarea } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSave } from "react-icons/fa";
import { MdAddPhotoAlternate, MdArrowBack, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import FAB from "../components/FAB";

const Edit = () => {
	const hiddenFileInput = useRef(null);

	const handleAttach = (event) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		handleUpload(fileUploaded);
	};

	const handleUpload = (file) => {};

	return (
		<Box maxW="1000px" my="4" mx="auto" px="4" mt="8">
			<Flex flexDir="column">
				<Flex flexDir="row" justifyContent="space-between">
					<Link to="/">
						<IconButton icon={<MdArrowBack />}></IconButton>
					</Link>
					<Flex gap="10px">
						<IconButton
							icon={<MdAddPhotoAlternate />}
							onClick={handleAttach}
						></IconButton>
						<IconButton icon={<MdDelete />}></IconButton>
					</Flex>
				</Flex>
				<input
					type="file"
					ref={hiddenFileInput}
					onChange={handleChange}
					accept="image/*"
					hidden
				/>
				<Textarea
					placeholder="Title"
					fontSize="4xl"
					mt="12"
					mb="12"
					border="none"
					resize="none"
					focusBorderColor="primary.200"
				></Textarea>

				<Textarea
					minH="xl"
					placeholder="Write here"
					border="none"
					resize="none"
					focusBorderColor="primary.200"
				></Textarea>

				<FAB icon={<FaSave />} />
			</Flex>
		</Box>
	);
};

export default Edit;

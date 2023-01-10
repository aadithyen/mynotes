import { Box, Flex, IconButton, Textarea, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaSave } from "react-icons/fa";
import { MdAddPhotoAlternate, MdArrowBack, MdDelete } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FAB from "../components/FAB";
import { UserAuth } from "../AuthContext";
import { useLocation } from "react-router-dom";

import {
	arrayRemove,
	arrayUnion,
	doc,
	getDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Edit = () => {
	const toast = useToast();
	const nav = useNavigate();
	const { user } = UserAuth();
	const location = useLocation();
	const titleRef = useRef();
	const bodyRef = useRef();

	const updateNote = async () => {
		const docRef = doc(db, "book", user.uid);
		if (titleRef.current.value == "") {
			toast({
				title: "Your note needs a title",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
		} else {
			if (!location.state?.scratch) {
				await updateDoc(docRef, {
					notes: arrayRemove(data),
				});
			}
			await updateDoc(docRef, {
				notes: arrayUnion({
					title: titleRef.current.value,
					body: bodyRef.current.value,
					image: "",
				}),
			});
			toast({
				title: "Note saved",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			nav("/");
		}
	};

	const deleteNote = async () => {
		const docRef = doc(db, "book", user.uid);
		if (!location.state?.scratch) {
			await updateDoc(docRef, {
				notes: arrayRemove(data),
			});
			toast({
				title: "Sent to trash",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
		nav("/");
	};

	const data = !location.state?.scratch
		? location.state?.data
		: {
				title: "",
				body: "",
				image: "",
		  };

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
						<IconButton icon={<MdDelete />} onClick={deleteNote}></IconButton>
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
					ref={titleRef}
					defaultValue={data.title}
				></Textarea>

				<Textarea
					minH="xl"
					placeholder="Write here"
					border="none"
					resize="none"
					ref={bodyRef}
					defaultValue={data.body}
				></Textarea>

				<FAB icon={<FaSave />} action={updateNote} />
			</Flex>
		</Box>
	);
};

export default Edit;

import {
	Avatar,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdSearch } from "react-icons/md";
import { UserAuth } from "../AuthContext";

const Header = ({ searchHandler }) => {
	const { user } = UserAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	const { logOut } = UserAuth();

	return (
		<Flex m="4" mt="12" flexDir="column">
			<AlertDialog
				isOpen={isOpen}
				motionPreset="slideInBottom"
				isCentered
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Logout?
						</AlertDialogHeader>

						<AlertDialogBody>Are you sure?</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={() => {
									logOut();
									onClose();
								}}
								ml={3}
							>
								Logout
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>

			<Flex justifyContent="space-between" alignItems="center">
				<Heading as="h1" size="2xl">
					my notes
				</Heading>
				<Avatar size="md" src={user?.photoURL} onClick={onOpen}></Avatar>
			</Flex>
			<InputGroup mt="8">
				<InputLeftElement pointerEvents="none" children={<MdSearch />} />
				<Input placeholder="search" onChange={searchHandler}></Input>
			</InputGroup>
		</Flex>
	);
};

export default Header;

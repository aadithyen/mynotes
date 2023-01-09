import { Box } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import FAB from "../components/FAB";
import Header from "../components/Header";
import NotesList from "../components/NotesList";

const Home = () => {
	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Header />
			<NotesList />
			<FAB icon={<MdAdd />} />
		</Box>
	);
};

export default Home;

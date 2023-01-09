import { Box } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import FAB from "../components/FAB";
import Header from "../components/Header";
import NotesList from "../components/NotesList";

const Home = () => {
	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Header />
			<NotesList />
			<Link to="/edit">
				<FAB icon={<MdAdd />} />
			</Link>
		</Box>
	);
};

export default Home;

import { Box } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import FAB from "../components/FAB";
import Header from "../components/Header";
import NotesList from "../components/NotesList";
import { db } from "../firebase";
import { UserAuth } from "../AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";

const getNotes = async (uid) => {
	const docRef = doc(db, "book", uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data().notes;
	} else {
		await setDoc(doc(db, "book", uid), { notes: [] });
		return [];
	}
};

const Home = () => {
	const [search, setSearch] = useState("");
	const { user } = UserAuth();

	const notes = useQuery(["notes", user.uid], () => getNotes(user.uid));

	if (notes.isError) {
		return <span>Error: {notes.error.message}</span>;
	}

	if (notes.isSuccess) {
		localStorage.setItem("num-notes", notes.data.length);
	}

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Header searchHandler={handleSearchChange} />
			<NotesList
				notes={notes.data}
				searchTerm={search}
				isLoading={notes.isLoading}
				numCards={localStorage.getItem("num-notes")}
			/>
			<Link to="/edit" state={{ scratch: true }}>
				<FAB icon={<MdAdd />} />
			</Link>
		</Box>
	);
};

export default Home;

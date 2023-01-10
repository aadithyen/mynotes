import { Box } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import FAB from "../components/FAB";
import Header from "../components/Header";
import NotesList from "../components/NotesList";
import { db } from "../firebase";
import { UserAuth } from "../AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

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

	if (notes.isLoading) {
		return <span>Loading...</span>;
	}

	if (notes.isError) {
		return <span>Error: {notes.error.message}</span>;
	}

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Header searchHandler={handleSearchChange} />
			<NotesList notes={notes.data} searchTerm={search} />
			<Link to="/edit" state={{ scratch: true }}>
				<FAB icon={<MdAdd />} />
			</Link>
		</Box>
	);
};

export default Home;

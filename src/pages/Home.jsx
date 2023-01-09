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

const getNotes = async (uid) => {
	const docRef = doc(db, "book", uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data().notes;
	} else {
		await setDoc(doc(db, "book", uid), { notes: [] });
		console.log("New User!");
	}
};

const Home = () => {
	const { user } = UserAuth();
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getNotes(user.uid).then((notes) =>
			setNotes(
				Object.keys(notes).map(function (k) {
					return notes[k];
				})
			)
		);
	}, []);

	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Header />
			<NotesList notes={notes} />
			<Link to="/edit" state={{ scratch: true }}>
				<FAB icon={<MdAdd />} />
			</Link>
		</Box>
	);
};

export default Home;

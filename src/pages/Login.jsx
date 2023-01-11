import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";
import gdscLogo from "../assets/gdsc logo.webp";
import { useQuery } from "react-query";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const Login = () => {
	const navigate = useNavigate();
	const { googleSignIn, user } = UserAuth();
	const [spinner, setSpinner] = useState(true);

	useQuery("redirect", () => {
		onAuthStateChanged(auth, () => {
			setSpinner(false);
		});
	});

	const login = useQuery("notes", googleSignIn, {
		enabled: false,
		refetchOnWindowFocus: false,
	});

	if (login.isSuccess || user) {
		return <Navigate to="/" />;
	}

	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Flex
				height="100vh"
				flexDir="column"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box></Box>
				<Flex justifyContent="center" flexDir="column" mt="24">
					<Heading as="h1" size="4xl">
						my notes
					</Heading>

					<Button
						leftIcon={<FaGoogle />}
						isLoading={spinner || login.isFetching}
						mt="12"
						onClick={login.refetch}
					>
						Sign in with Google
					</Button>
				</Flex>
				<Image src={gdscLogo} w="2xs" mb="24" />
			</Flex>
		</Box>
	);
};

export default Login;

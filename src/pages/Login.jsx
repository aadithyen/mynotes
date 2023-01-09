import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const { googleSignIn, user } = UserAuth();

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user != null) {
			navigate("/");
		}
	}, [user]);

	return (
		<Box maxW="1000px" mx="auto" px="2">
			<Flex
				height="100vh"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
			>
				<Heading as="h1" size="4xl">
					my notes
				</Heading>

				<Button leftIcon={<FaGoogle />} mt="12" onClick={handleGoogleSignIn}>
					Sign in with Google
				</Button>
			</Flex>
		</Box>
	);
};

export default Login;

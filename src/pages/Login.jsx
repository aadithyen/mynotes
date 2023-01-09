import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";
import gdscLogo from "../assets/gdsc logo.webp";

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
				<Heading as="h1" size="4xl" mt="auto">
					my notes
				</Heading>

				<Button
					leftIcon={<FaGoogle />}
					mt="12"
					mb="auto"
					onClick={handleGoogleSignIn}
				>
					Sign in with Google
				</Button>
				<Image src={gdscLogo} w="2xs" />
			</Flex>
		</Box>
	);
};

export default Login;

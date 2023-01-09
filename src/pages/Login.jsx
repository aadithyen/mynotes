import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
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
				<Button leftIcon={<FaGoogle />} mt="12">
					Sign in using Google
				</Button>
			</Flex>
		</Box>
	);
};

export default Login;

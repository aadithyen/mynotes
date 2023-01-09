import {
	Avatar,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

const Header = () => {
	return (
		<Flex m="4" mt="12" flexDir="column">
			<Flex justifyContent="space-between" alignItems="center">
				<Heading as="h1" size="4xl">
					my notes
				</Heading>
				<Avatar size="md" src="https://bit.ly/code-beast"></Avatar>
			</Flex>
			<InputGroup mt="8">
				<InputLeftElement pointerEvents="none" children={<MdSearch />} />
				<Input
					placeholder="search"
					colorScheme="primary"
					focusBorderColor="primary.200"
				></Input>
			</InputGroup>
		</Flex>
	);
};

export default Header;

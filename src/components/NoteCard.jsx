import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

const NoteCard = ({ heading }) => {
	return (
		<Card mb="4" boxShadow="lg">
			<CardBody>
				<Heading size="md" pr={12} mb={3} fontWeight="semibold">
					{heading}
				</Heading>
				<Text>This is a test</Text>
			</CardBody>
		</Card>
	);
};

export default NoteCard;

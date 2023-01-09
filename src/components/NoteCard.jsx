import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

const NoteCard = ({ heading, body }) => {
	return (
		<Card mb="4" boxShadow="lg">
			<CardBody>
				<Heading size="md" pr={12} mb={3} fontWeight="semibold">
					{heading}
				</Heading>
				<Text>{body.length > 120 ? body.substring(0, 120) : body}</Text>
			</CardBody>
		</Card>
	);
};

export default NoteCard;

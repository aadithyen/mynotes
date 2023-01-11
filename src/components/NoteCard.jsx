import { Card, CardBody, Heading, Skeleton, Text } from "@chakra-ui/react";

const NoteCard = ({ heading, body, isSkeleton }) => {
	return (
		<Card mb="4">
			<CardBody>
				{isSkeleton ? (
					<>
						<Skeleton mb={3} mr={12}>
							i
						</Skeleton>
						<Skeleton>
							i<br />i
						</Skeleton>
					</>
				) : (
					<>
						<Heading size="md" pr={12} mb={3} fontWeight="semibold">
							{heading}
						</Heading>
						<Text>{body?.length > 120 ? body.substring(0, 120) : body}</Text>
					</>
				)}
			</CardBody>
		</Card>
	);
};

export default NoteCard;

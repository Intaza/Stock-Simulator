import React from "react";
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Team = () => {
	const members = [
		{
			name: "Intaza Chaudhary",
			rollNo: "100",
			collegeID: "1233333333",
			email: "intazachaudhary@gmail.com ",
		},
		{
			name: "Expert 1",
			rollNo: "111",
			collegeID: "1111111111",
			email: "sample123@gmail.com",
		},
        {
			name: "Expert 2",
			rollNo: "121",
			collegeID: "1212121212",
			email: "sample234@gmail.com",
		},
	];

	return (
		<Box p="6">
			<Heading size="lg" mb="4">Meet Our Team</Heading>
			<VStack align="start" spacing="4">
				{members.map((member, index) => (
					<Box key={index} p="4" borderWidth="1px" borderRadius="lg" w="full">
						<Text fontWeight="bold">{member.name}</Text>
						<Text>Roll No: {member.rollNo}</Text>
						<Text>College ID: {member.collegeID}</Text>
						<Text>
							Email:{" "}
							<Link href={`mailto:${member.email}`} color="blue.500" isExternal>
								{member.email}
							</Link>
						</Text>
					</Box>
				))}
			</VStack>
		</Box>
	);
};

export default Team;

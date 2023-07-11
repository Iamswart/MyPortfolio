import {
    Box,
    Button,
    Container,
    GridItem,
    HStack,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";
import {
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaTwitter
} from "react-icons/fa";
import CustomHeading from "./CustomHeading";

import { GrMail } from "react-icons/gr";

// Replace test data with your own
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Express",
  "React",
  "Python",
  "Django",
  "Php",
  "Figma",
  "Redis",
  "MongoDB",
  "SQL",
  "SQS",
  "RabbitMQ",
  "AWS",
];

export default function About() {
  return (
    <Box p={4} bg={"#f2f2f2"} py={20} id="about">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <CustomHeading>ABOUT ME</CustomHeading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <GridItem>
            <Heading mb={8} fontSize={"3xl"}>
              Get to know me!
            </Heading>
            <Text>
              <Text mb={4}>
                I am a skilled full-stack developer proficient in both frontend
                and backend development. With expertise in modern web
                technologies, I create visually appealing and responsive user
                interfaces using frameworks like React.js and Next.js. On the
                backend, I excel in building robust RESTful APIs, handling
                database operations and ensure smooth server-side functionality.
              </Text>
              <Text mb={4}>
                If you are looking for a versatile and dedicated full-stack
                developer who can bring your ideas to life, then don't hesitate
                to contact me. I am ready to take on your next project. Let's
                work together to create impactful and seamless web applications.
              </Text>

              {/* <Text>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </Text> */}
            </Text>
            <HStack spacing={8} mt={8}>
              <a
                href="https://www.linkedin.com/in/khabbab-abdurrazaq-65b676118/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaLinkedin} boxSize={6} />
              </a>
              <a
                href="https://twitter.com/Big_Swart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaTwitter} boxSize={6} />
              </a>
              <a
                href="https://github.com/Iamswart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaGithub} boxSize={6} />
              </a>
              <a href="tel:+2349027710396">
                <Icon as={FaPhone} boxSize={6} />
              </a>
              <a href="mailto:swartjide@gmail.com">
                <Icon as={GrMail} boxSize={6} />
              </a>
            </HStack>
          </GridItem>
          <GridItem>
            <Heading mb={8} fontSize={"3xl"}>
              My Skills
            </Heading>
            {skills.map((skill) => (
              <Button
                mr={4}
                mb={4}
                bg={"rgba(153,153,153,.2)"}
                color={"#666"}
                borderRadius={"5px"}
                fontSize={"sm"}
                fontWeight={"medium"}
                key={skill}
                _hover={{ bg: "rgba(153,153,153,.2)" }}
                _active={{ bg: "rgba(153,153,153,.2)" }}
              >
                {skill}
              </Button>
            ))}
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

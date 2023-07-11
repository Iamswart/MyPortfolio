import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Image,
  useColorModeValue,
  HStack,
  VStack,
  GridItem,
  Button,
  Flex,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import projects from "../data/projects";
// import {
//     IoAnalyticsSharp,
//     IoLogoBitcoin,
//     IoSearchSharp,
//   } from 'react-icons/io5';
import { ReactElement } from "react";
import CustomHeading from "./CustomHeading";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Project() {
  return (
    <Box px={4} bg={"#fafafa"} py={20} id="projects">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <CustomHeading>PROJECTS</CustomHeading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </Text>
      </Stack>

      <Container maxW={"5xl"} py={12}>
        {projects.map((project) => (
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            templateColumns={{ md: "7fr 5fr" }}
            alignItems="start"
            mb={16}
          >
            <Flex>
              <Image
                alt={"feature image"}
                key={project.id}
                src={project.imageUrl}
                objectFit={"cover"}
              />
            </Flex>

            <Stack spacing={4} mt={12}>
              <Heading fontSize={"2xl"}>{project.title}</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                {project.summary}
              </Text>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  px={3}
                  py={6}
                  bg={"#7843e9"}
                  mt={6}
                  color={"#fff"}
                  maxW={"50%"}
                  // _hover={{ bg: "blue.500" }}
                  letterSpacing={"1px"}
                  borderRadius={"5px"}
                  fontWeight={"500"}
                  boxShadow={"0 5px 15px 0 rgba(0,0,0,.15)"}
                  transition={"transform 0.5s"}
                  _hover={{ bg: "#7843e9", transform: "translateY(-5px)" }} 
                  _active={{ bg: "#7843e9" }}
                >
                  PROJECT LINK
                </Button>
              </Link>
            </Stack>
          </SimpleGrid>
        ))}
      </Container>
    </Box>
  );
}

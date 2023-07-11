import {
    Button,
    Flex,
    Stack,
    Text,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react";

import { Link as ScrollLink } from "react-scroll";

import Introduction from "./Introduction";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)"
      }
      //   backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, rgba(245,245,245,.8), rgba(245,245,245,.8))"}
      >
        <Stack
          maxW={"4xl"}
          align={"center"}
          spacing={6}
          mt={{ base: 12, md: 28 }}
        >
          <Text
            color={"black"}
            fontWeight={700}
            lineHeight={1.6}
            textAlign={"center"}
            width={"100%"}
            fontSize={useBreakpointValue({ base: "6xl", md: "6xl" })}
          >
            <Introduction />
          </Text>
          <Text
            color={"black"}
            fontWeight={400}
            lineHeight={1.6}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
            textAlign={"center"}
            width={"100%"}
          >
            A Full-stack developer creating successful web experiences that
            contribute to the overall product's success.
          </Text>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button
              px={20}
              py={7}
              bg={"#7843e9"}
              mt={6}
              color={"#fff"}
              // _hover={{ bg: "blue.500" }}
              letterSpacing={"1px"}
              borderRadius={"5px"}
              fontWeight={"500"}
              boxShadow={"0 5px 15px 0 rgba(0,0,0,.15)"}
              transition={"transform 0.5s"}
              _hover={{ bg: "#7843e9", transform: "translateY(-5px)" }}
              _active={{ bg: "#7843e9" }}
            >
              PROJECTS
            </Button>
          </ScrollLink>
        </Stack>
      </VStack>
    </Flex>
  );
}

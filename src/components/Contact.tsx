import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Textarea,
    VStack,
    useBreakpointValue
} from "@chakra-ui/react";
import CustomHeading from "./CustomHeading";

export default function SignupCard() {

  return (
    <Flex
      id="contact"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
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
        pb={16}
      >
        <Stack spacing={8} mx={"auto"} py={12} px={6} w={"80%"}>
          <Stack align={"center"}>
            <CustomHeading>CONTACT</CustomHeading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Get in touch or shoot me an email directly on swartjide@gmail.com
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"#fff"} boxShadow={"lg"} p={12}>
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" focusBorderColor="#7843e9" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" focusBorderColor="#7843e9" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea focusBorderColor="#7843e9" />
              </FormControl>
              <Flex pt={2} justifyContent="flex-end">
                <Button
                  loadingText="Submitting"
                  px={24}
                  py={7}
                  letterSpacing={"1px"}
                  size="lg"
                  bg={"#7843e9"}
                  color={"white"}
                  maxW={"25%"}
                  boxShadow={"0 5px 15px 0 rgba(0,0,0,.15)"}
                  fontWeight={"500"}
                  transition={"transform 0.5s"}
                  _hover={{ bg: "#7843e9", transform: "translateY(-5px)" }} 
                  _active={{ bg: "#7843e9" }}
                >
                  SUBMIT
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
}

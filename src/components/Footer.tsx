import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPhone } from "react-icons/fa";
import { ReactNode } from "react";
import { GrMail } from "react-icons/gr";


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={Link}
      href={href}
      isExternal
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#000"} color={"#fff"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023. Made by Abdurrazaq Khabbab</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com/Big_Swart"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"https://www.linkedin.com/in/khabbab-abdurrazaq-65b676118/"}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/Iamswart"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Phone"} href={"tel:+2349027710396"}>
            <FaPhone />
          </SocialButton>
          <SocialButton label={"Mail"} href={"mailto:swartjide@gmail.com"}>
            <GrMail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

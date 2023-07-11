import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Links from "../data/sections";

// const Links = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
const name = ["SwartJide"];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <Link
    as={ScrollLink}
    smooth={true}
    to={to}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      color: "#7843e9",
    }}
    href="#"
    fontWeight="medium"
    mr="2rem"
  >
    {children}
  </Link>
);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box
        bg="#fff"
        px={[4, 10]}
        py={2}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        boxShadow={scrolled ? "md" : "none"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={handleScrollToTop}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://res.cloudinary.com/dfscst5lw/image/upload/v1689031235/portfolio_website/sw_yis0vr.jpg"
                  }
                />
              </MenuButton>
            </Menu>

            <Text
              fontSize={"lg"}
              fontWeight={"semibold"}
              letterSpacing={"wide"}
              ml={4}
              textTransform={"uppercase"}
              color={"#333"}
              onClick={handleScrollToTop}
              _hover={{ cursor: "pointer" }}
            >
              {name}
            </Text>
          </Flex>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.id} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <IconButton
            bg={"white"}
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            _focus={{ outline: "none", bg: "white" }}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

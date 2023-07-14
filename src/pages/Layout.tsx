import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Flex flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1" m={"0px"}>
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  Heading,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import { defaultTheme } from "@root/themes";

const Home: NextPage = ({ cookies }) => {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManager : localStorageManager;

  return (
    <ChakraProvider theme={defaultTheme} colorModeManager={colorModeManager}>
      <Box
        role="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Heading textAlign="center"> hello world </Heading>
      </Box>
    </ChakraProvider>
  );
};

export default Home;

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

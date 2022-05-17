import { Heading, Box } from "@chakra-ui/react";
import type { NextPage } from "next";

import { ThemeContainer } from "@root/components";

const Home: NextPage = ({ cookies }) => {
  return (
    <ThemeContainer>
      <Box
        role="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Heading textAlign="center"> hello world </Heading>
      </Box>
    </ThemeContainer>
  );
};

export default Home;

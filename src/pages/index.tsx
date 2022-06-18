import { Heading, Box } from "@chakra-ui/react";
import type { NextPage } from "next";

import { ThemeContainer } from "@root/components";

export interface HomeProps {
  cookies?: string;
}

const Home: NextPage<HomeProps> = ({ cookies = "" }) => {
  return (
    <ThemeContainer cookies={cookies}>
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

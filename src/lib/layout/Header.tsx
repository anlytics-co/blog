import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Anlytics Blog</Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
        <Link href="https://anlytics.co">Back To Anlytics</Link>
      </Box>
    </Flex>
  );
};

export default Header;

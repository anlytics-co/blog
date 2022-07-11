import { Center, Box, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaAngleRight } from "react-icons/fa";

import Logo from "lib/components/Logo";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Link href="/">
        <HStack>
          <Center>
            <Logo width={100} height={50} />
          </Center>
        </HStack>
      </Link>

      <Box marginLeft="auto">
        <HStack spacing={12}>
          <ThemeToggle />
          <NextLink href={`${process.env.NEXT_PUBLIC_ANLYTICS_URL}`} passHref>
            <Link isExternal>
              <HStack>
                <Box>Back to Anlytics</Box>
                <Box>
                  <FaAngleRight />
                </Box>
              </HStack>
            </Link>
          </NextLink>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;

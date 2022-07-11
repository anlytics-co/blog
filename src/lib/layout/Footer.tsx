import {
  Link,
  Text,
  Box,
  Container,
  Stack,
  SimpleGrid,
  Center,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "lib/components/Logo";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW="5xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box p={0}>
              <Link
                href={process.env.NEXT_PUBLIC_ANLYTICS_URL}
                isExternal
                p={0}
              >
                <Logo width={100} height={100} />
              </Link>
              {/* <Text as="sub">
                Lightweight, simple, privacy-focused, analytics tool
              </Text> */}
            </Box>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Privacy</ListHeader>
            <Link href={`${process.env.NEXT_PUBLIC_ANLYTICS_URL}/privacy`}>
              Privacy Policy
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_ANLYTICS_URL}/terms`}>
              Terms of Service
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Product</ListHeader>
            <Link href={`${process.env.NEXT_PUBLIC_ANLYTICS_URL}/#pricing`}>
              Pricing
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_ANLYTICS_URL}/#features`}>
              Features
            </Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Learn</ListHeader>
            <Link href={process.env.NEXT_PUBLIC_ANLYTICS_DOCS_URL}>
              Documentation
            </Link>
            <Link href="/">Blog</Link>
            <Link href="/">Team</Link>
          </Stack>
        </SimpleGrid>
        <Divider py={4} />
        <Center py={4}>
          <Text fontSize="sm">© {new Date().getFullYear()} anlytics.co</Text>
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;

import { VStack, Center, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Trial = () => {
  return (
    <Center>
      <VStack>
        <Text fontSize="lg">Want to give Anlytics a try?</Text>
        <NextLink href="https://anlytics.co" passHref>
          <Button
            _hover={{
              background: "#fa8d4d",
              color: "#f7b792",
            }}
            size="lg"
            color="white"
            bg="#ffa26d"
          >
            Sign up for a free account
          </Button>
        </NextLink>
      </VStack>
    </Center>
  );
};

export default Trial;

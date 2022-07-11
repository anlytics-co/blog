import { Box, Text, Center, VStack } from "@chakra-ui/react";

const Newsletter = () => {
  return (
    <Box maxW="330px" w="full" bg="gray.100" rounded="sm">
      <Center>
        <VStack>
          <Text fontSize="lg">Subscribe to the Anlytics Newsletter</Text>
          <Text fontSize="sm">Its light and delightful</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Newsletter;

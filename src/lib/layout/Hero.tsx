import { VStack, HStack, Text, useColorMode } from "@chakra-ui/react";

interface ITitleText {
  text: string;
  isOrange?: boolean;
}

const TitleText = ({ text, isOrange }: ITitleText) => {
  const { colorMode } = useColorMode();
  const color = (() => {
    if (isOrange) return "#ffa26d";
    return !isOrange && colorMode === "light" ? "#000" : "#fff";
  })();
  return (
    <Text fontSize="3xl" color={color}>
      {text}
    </Text>
  );
};

const Hero = () => {
  return (
    <VStack pb={2}>
      <HStack mt={8}>
        <TitleText text="The" />
        <TitleText text="Anlytics" isOrange />
        <TitleText text="Blog" />
      </HStack>

      <Text>Follow our Journey to own your data and grow a company</Text>
    </VStack>
  );
};

export default Hero;

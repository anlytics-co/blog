import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      icon={
        colorMode === "light" ? (
          <RiMoonFill color="#ffa26d" />
        ) : (
          <RiSunLine color="#ffa26d" />
        )
      }
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;

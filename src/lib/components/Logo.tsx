import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface ILogo {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: ILogo) => {
  return (
    <Box>
      <Image src="/logo.svg" width={width || 150} height={height || 150} />
    </Box>
  );
};

export default Logo;

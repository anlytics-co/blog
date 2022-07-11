import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface IReadMoreLink {
  link: string;
}

const ReadMoreLink = (link: IReadMoreLink) => {
  return (
    <NextLink href={`${link}`} passHref>
      <Link color="#ffa26d">Read More</Link>
    </NextLink>
  );
};

export default ReadMoreLink;

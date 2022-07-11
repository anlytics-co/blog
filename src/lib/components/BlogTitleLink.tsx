import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface IBlogTitleLink {
  slug: string;
  title: string;
}

const BlogTitleLink = ({ slug, title }: IBlogTitleLink) => {
  return (
    <NextLink href={`${slug}`} passHref>
      <Link fontSize="2xl" color="#ffa26d">
        {title}
      </Link>
    </NextLink>
  );
};

export default BlogTitleLink;

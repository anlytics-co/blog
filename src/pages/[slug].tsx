import { Box, Center, VStack, HStack, Text } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import Trial from "lib/layout/Trial";

interface IBlogPostHero {
  title: string;
  date: string;
  author: string;
}

const BlogPostHero = ({ title, date, author }: IBlogPostHero) => {
  return (
    <VStack pb={2}>
      <HStack>
        <Text as="h1" fontSize="2xl">
          {title}
        </Text>
      </HStack>

      <Box m={4}>
        <Text as="sub">
          {date} | {author} | Fix Typo
        </Text>
      </Box>
    </VStack>
  );
};

export default function Blog({ frontmatter, markdown }: any) {
  return (
    <Box>
      <Center m={12}>
        <BlogPostHero
          title={frontmatter?.title}
          date={frontmatter?.date}
          author={frontmatter?.author}
        />
      </Center>
      <Box alignItems="center" gap={8} my={12} w="full">
        <Head>
          <title>{frontmatter?.title}</title>
        </Head>

        <ReactMarkdown>{markdown}</ReactMarkdown>
        <Box mt={8}>
          <Trial />
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  const frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}

import { Box, Text, Center } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";

import BlogTitleLink from "lib/components/BlogTitleLink";
import ReadMoreLink from "lib/components/ReadMoreLink";
import Hero from "lib/layout/Hero";
import Trial from "lib/layout/Trial";

interface IBlogPost {
  title: string;
  date: string;
  slug: string;
  body: string;
  isPublished?: boolean;
}

const Home = ({ blogs }: any) => {
  return (
    <Box>
      <Center>
        <Hero />
      </Center>
      <Box
        display={{ md: "flex" }}
        alignItems="center"
        gap={8}
        mb={8}
        mt={8}
        w="full"
      >
        <Box>
          {blogs &&
            blogs.map((blog: IBlogPost) => {
              return blog.isPublished ? (
                <Box mb={6}>
                  <Box mb={2}>
                    <BlogTitleLink slug={blog.slug} title={blog.title} />
                  </Box>
                  <Box mb={2}>
                    <Text fontSize="sm" color="#777">
                      {blog.date} by {blog.author}
                    </Text>
                  </Box>
                  <Box mb={2}>
                    <Text noOfLines={[1, 2, 3]}>{blog.body}</Text>
                  </Box>
                  <ReadMoreLink link={blog.slug} />
                </Box>
              ) : null;
            })}
        </Box>
      </Box>
      <Box>
        <Trial />
      </Box>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const filesInBlogs = fs.readdirSync("./content/blogs");

  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

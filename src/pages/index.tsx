import { Box } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
// import Image from "next/image";
import Link from "next/link";

import SomeImage from "lib/components/samples/SomeImage";

const Home = ({ blogs }: any) => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />

      <Box>
        <div>
          {blogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`${blog.slug}`}>
                <a>
                  {blog.date}:{blog.title}
                </a>
              </Link>
            </li>
          ))}
        </div>
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

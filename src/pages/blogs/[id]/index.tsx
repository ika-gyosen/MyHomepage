import BlogContent from "components/BlogContent";
import * as fs from "fs";
import React from "react";
const matter = require("gray-matter");
import ReactMarkdown from "react-markdown";

type BlogProps = {
  content: string;
  title: string;
  date: string;
};

function Blog({ content, title, date }: BlogProps) {
  return (
    <div>
      <BlogContent title={title} content={content} date={date} />
    </div>
  );
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const {
    content,
    data: { title },
  } = matter(fs.readFileSync(`./src/posts/blog/${id}.md`).toString());
  return {
    props: {
      content,
      title,
      date: id,
    },
  };
}

export async function getStaticPaths() {
  const blogFiles = fs.readdirSync("./src/posts/blog");
  return {
    paths: blogFiles.map((fileName) => {
      return `/blogs/${fileName.substring(0, fileName.length - 3)}`;
    }),
    fallback: false,
  };
}

export default Blog;

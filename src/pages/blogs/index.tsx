import * as fs from "fs";
const matter = require("gray-matter");
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import dayjs from "dayjs";
import Link from "next/link";
dayjs.extend(isSameOrBefore);

type BlogPost = {
  title: string;
  content: string;
  date: string;
};

export type BlogsProps = {
  blogs: BlogPost[];
};

function Blogs({ blogs }: BlogsProps) {
  if (blogs.length === 0) {
    return (
      <div>
        <p>投稿がありません。</p>
      </div>
    );
  }
  return (
    <div>
      {blogs.map(({ date, title }) => {
        return (
          <div key={`${date}+${title}`}>
            <Link href={`blogs/${date}`} passHref={true}>
              <a>
                {date}: {title}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const blogFiles = fs.readdirSync("./src/posts/blog");
  const blogPosts = blogFiles.map((fileName) => {
    const {
      content,
      data: { title },
    } = matter(fs.readFileSync(`./src/posts/blog/${fileName}`).toString());
    return {
      title,
      content,
      date: fileName.substring(0, fileName.length - 3),
    };
  });
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    if (dayjs(a.date).isSameOrBefore(b.date)) {
      return 0;
    } else {
      return -1;
    }
  });
  return {
    props: {
      blogs: sortedBlogPosts,
    },
  };
}

export default Blogs;

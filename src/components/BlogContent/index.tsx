import CodeBlock from "components/BlogContent/CodeBlock";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import * as fs from "fs";
import style from "./style.module.scss";
import unwrapImages from "remark-unwrap-images";
import ImageBlock from "./ImageBlock";
import dayjs from "dayjs";

type BlogContentProps = {
  content: string;
  title: string;
  date: string;
};

function BlogContent({ content, title, date }: BlogContentProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{dayjs(date).format("YYYY年 (MMM)M月D日")}</p>
      <hr />
      <ReactMarkdown
        remarkPlugins={[unwrapImages]}
        components={{
          code: CodeBlock,
          img: ImageBlock,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogContent;

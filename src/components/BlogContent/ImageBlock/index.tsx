import Image from "next/image";
import { ClassAttributes, ImgHTMLAttributes } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import style from "./style.module.scss";

export type ImageBlockProps = {
  src: string;
  alt?: string;
};

function ImageBlock({
  src,
  alt,
}: React.PropsWithChildren<
  ClassAttributes<HTMLImageElement> &
    ImgHTMLAttributes<HTMLImageElement> &
    ReactMarkdownProps
>) {
  if (!src) return <p>画像エラー</p>;
  const path = /^http.*/i.test(src) ? src : `${process.env.PUBLIC_URL}/${src}`;
  console.log("testaseaset", path);
  return (
    <div className={style.imageWrapper}>
      <div className={style.imageStyle}>
        <Image src={path} alt={alt} layout="fill" objectFit={"contain"} />
      </div>
    </div>
  );
}

export default ImageBlock;

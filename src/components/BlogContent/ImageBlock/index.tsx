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
  return (
    <div className={style.imageWrapper}>
      <Image src={src || ""} alt={alt} layout="fill" objectFit={"contain"} />
    </div>
  );
}

export default ImageBlock;

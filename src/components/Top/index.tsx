import Link from "next/link";
import ScrapboxList from "./ScrapboxList";

type TopProps = {
  scrapboxItems: { title: string; date: string }[];
};

function Top({ scrapboxItems }: TopProps) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blogs" passHref={true}>
            <a>Blog</a>
          </Link>
          <ScrapboxList />
        </li>
      </ul>
    </div>
  );
}

export default Top;

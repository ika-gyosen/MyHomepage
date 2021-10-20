import Link from "next/link";

function Top() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blogs" passHref={true}>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Top;

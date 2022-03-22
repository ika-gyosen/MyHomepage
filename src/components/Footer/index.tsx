import Image from "next/image";

function Footer() {
  return (
    <>
      <hr />
      <p>
        CC BY 4.0:
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by/4.0/deed.ja"
        >
          <Image
            alt="クリエイティブ・コモンズ・ライセンス"
            src="https://i.creativecommons.org/l/by/4.0/80x15.png"
            width="80"
            height="15"
          />
        </a>
      </p>
    </>
  );
}

export default Footer;

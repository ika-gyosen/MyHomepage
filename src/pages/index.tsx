import axios from "axios";
import Top from "components/Top";
import { NextPage } from "next";

type HomeProps = {
  scrapboxItems: [];
};

const Home: NextPage<HomeProps> = ({ scrapboxItems }) => {
  return (
    <>
      <Top scrapboxItems={scrapboxItems} />
      {JSON.stringify(scrapboxItems)}
    </>
  );
};

export async function getServerSideProps() {
  try {
    const {
      data: { pages },
    } = await axios.get("https://scrapbox.io/api/pages/mbopen", {
      params: { limit: 10 },
    });
    const scrpboxPages = pages.map((item: any) => {
      return { title: item.title, created: item.created };
    });
    return {
      props: {
        scrapboxItems: scrpboxPages,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

export default Home;

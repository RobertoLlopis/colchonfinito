import Image from "next/image";
import graphQlApiFetcher from "./api/graphQlApiFetcher";
import { pageInfo, postsSummary } from "../graphql/queries";

import type { NextPage } from "next";
import Head from "components/Head";
interface Props {
  posts: [Post];
  page: Page;
}

// TODO Implement react-query or swr
export async function getStaticProps() {
  const posts = await graphQlApiFetcher({
    entity: "post",
    query: postsSummary,
    plural: true,
  });
  const page = await graphQlApiFetcher({
    entity: "page",
    query: pageInfo("Home"),
  });
  return {
    props: {
      posts,
      page,
    },
  };
}

const Home: NextPage<Props> = ({ posts, page }) => {
  return (
    <div>
     <Head />
      
      <main>
        <Image
          src={page.headerPicture.url}
          alt="Main Page cover picture"
          layout="fill"
        />
        {JSON.stringify(posts, null, 2)}
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;

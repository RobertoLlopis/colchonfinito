import Head from "next/head";
import Image from "next/image";
import graphQlApiFetcher from "./api/graphQlApiFetcher";
import { pageInfo, postsSummary } from "../graphql/queries";

import type { NextPage } from "next";
interface Props {
  posts: [Post];
  page: Page;
}

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
      <Head>
        <title>Colchonfinito</title>
        <meta name="description" content="Travel blog app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

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

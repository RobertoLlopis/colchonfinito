import graphQlApiFetcher from "./api/graphQlApiFetcher";
import { authorsQuery, pageInfo, postsSummary } from "../graphql/queries";

import type { NextPage } from "next";
import HeaderImage from "components/Home/HeaderImage";
import Divider from "components/Divider";
import Layout from "components/Layout";
import Creemos from "components/Home/Creemos/Creemos";
import TeUnes from "components/Home/TeUnes/TeUnes";
import Quien from "components/Home/Quien/Quien";

interface Props {
  posts: [Post];
  page: Page;
  authors: [Author];
}

// TODO Implement react-query or swr ???? O no...
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
  const authors = await graphQlApiFetcher({
    entity: "author",
    query: authorsQuery,
    plural: true,
  });
  return {
    props: {
      posts,
      page,
      authors
    },
  };
}

const Home: NextPage<Props> = ({ posts, page, authors }) => {
  return (
    <Layout> 
      <main>
        <HeaderImage urlImage={page.headerPicture.url}/>
        <Divider iconName="book"/>
        <Creemos />
        <Divider iconName="clock"/>
        <TeUnes />
        <Divider iconName="users"/>
        <Quien authors={authors} />
        {JSON.stringify(posts, null, 2)}
      </main>
    </Layout>
  );
};

export default Home;

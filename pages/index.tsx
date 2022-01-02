import graphQlApiFetcher from "./api/graphQlApiFetcher";
import { pageInfo, postsSummary } from "../graphql/queries";

import type { NextPage } from "next";
import HeaderImage from "components/Home/HeaderImage";
import Divider from "components/Divider";
import Layout from "components/Layout";
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
    <Layout> 
      <main>
        <HeaderImage urlImage={page.headerPicture.url}/>
        <Divider align="center" iconName="book"/>
        {JSON.stringify(posts, null, 2)}
      </main>
    </Layout>
  );
};

export default Home;

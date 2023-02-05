import Link from "next/link";
import HeaderImage from "components/HeaderImage";
import Divider from "components/Divider";
import Layout from "components/Layout";
import LastPostsArticleCards from "components/LastPostsArticleCards";
import Creemos from "components/Home/Creemos/Creemos";
import TeUnes from "components/Home/TeUnes/TeUnes";
import Quien from "components/Home/Quien/Quien";
import Footer from "components/Home/Footer";
import graphQlApiFetcher from "./api/graphQlApiFetcher";
import { authorsQuery, pageInfo, postsSummary } from "../graphql/queries";

import type { NextPage } from "next";
interface Props {
  posts: [PostSummary];
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
      authors,
    },
  };
}

const Home: NextPage<Props> = ({ posts, page, authors }) => {
  return (
    <Layout>
      <main>
        <HeaderImage urlImage={page.headerPicture.url} alt="Main Page cover picture" wrapperHeight="100vh" />
        <Divider iconName="book" />
        <LastPostsArticleCards posts={posts} />
        <Divider iconName="compass" />
        <Creemos />
        <Divider iconName="clock" />
        <TeUnes />
        <Divider iconName="users" />
        <Quien authors={authors} />
        <Link href="/posts/ckv3szk088dzl0c50kr2cum59">A post</Link>
        {JSON.stringify(posts, null, 2)}
        <Footer />
      </main>
    </Layout>
  );
};

export default Home;

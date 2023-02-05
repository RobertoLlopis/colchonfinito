import React from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import Divider from "components/Divider";
import CardArticle from "components/CardArticle";
import ArticleFooter from "components/ArticleFooter";

import graphQlApiFetcher from "pages/api/graphQlApiFetcher";
import { postsSummary } from "graphql/queries";

import s from "./Posts.module.scss";

const getPageDetailsToRender = ({
  posts,
  byAuthor,
  byTag,
}: {
  posts: PostSummary[];
  byAuthor?: string;
  byTag?: string;
}) => {
  if (!byAuthor && !byTag) {
    return { postsToRender: posts, title: "Todos nuestros artículos" };
  }
  if (byAuthor) {
    return {
      postsToRender: posts.filter((post) => post.author.name === byAuthor),
      title: `Todos los artículos de ${byAuthor}`,
      subtitle: "En un solo lugar",
    };
  }
  if (byTag) {
    return {
      postsToRender: posts.filter((post) => post.tags.includes(byTag)),
      title: `Todos los artículos de ${byTag}`,
    };
  }
  return { postsToRender: [] };
};

export async function getStaticProps() {
  const posts = await graphQlApiFetcher({
    entity: "post",
    query: postsSummary,
    plural: true,
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }: { posts: PostSummary[] }) {
  const { query } = useRouter();
  const { postsToRender, title } = getPageDetailsToRender({ posts, ...query });
  console.log("title :>> ", title);
  console.log("posts :>> ", postsToRender);
  if (!postsToRender) {
    return (
      <Layout>
        <main>
          <h1>No hemos encontrado posts para los parámetros seleccionado.</h1>
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <main className={s.Posts}>
        <h1>{title}</h1>
        <h4>En un solo lugar</h4>
        <Divider iconName="book" />
        <section className={s.postsContainer}>
          {postsToRender.map((p) => (
            <CardArticle key={`post-${p.id}-card`} postSummary={p} />
          ))}
        </section>
      </main>
      <ArticleFooter noHotLink />
    </Layout>
  );
}

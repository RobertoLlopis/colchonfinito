import React, { useEffect, useMemo } from "react";
import { GetServerSidePropsContext } from "next";

import graphQlApiFetcher from "pages/api/graphQlApiFetcher";
import { fullSinglePost } from "graphql/queries";

import Layout from "components/Layout";
import HeaderImage from "components/HeaderImage";
import Title from "components/PostPieces/Title";

const defaultProps = {
  props: {
    post: {},
  },
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id: idPost } = context.query;
  if (!idPost) return defaultProps;
  try {
    const post = await graphQlApiFetcher({
      entity: "post",
      query: fullSinglePost(idPost as string),
      plural: false,
    });
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return defaultProps;
  }
}


function Post({ post }: { post: FullPost }) {
  const postElements = useMemo(() => [...(post?.postParagraphs || []), ...(post?.postPictures || [])], [post]);
  const orderedElements = useMemo(
    () => postElements.sort((postEl, postEl2) => postEl.indexInPost - postEl2.indexInPost),
    [postElements]
  );
  useEffect(() => {
    console.log("orderedElements, post", orderedElements, post);
  }, []);
  if (!post) {
    return <main>Post no encontrado...</main>;
  }
  const { coverImage, title } = post;
  return (
    <Layout>
      <main>
        <HeaderImage urlImage={coverImage?.url} alt={`cover image of post: ${title}`} />
        <article>
          <Title title={title} />
        </article>
      </main>
    </Layout>
  );
}

export default Post;

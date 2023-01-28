import React, { Fragment, useEffect, useMemo } from "react";
import { GetServerSidePropsContext } from "next";

import graphQlApiFetcher from "pages/api/graphQlApiFetcher";
import { fullSinglePost } from "graphql/queries";

import Layout from "components/Layout";
import HeaderImage from "components/HeaderImage";
import Title from "components/PostPieces/Title";
import ArticleImage from "components/ArticleImage";
import ArticleParagraph from "components/ArticleParagraph";
import ArticleFooter from "components/ArticleFooter";

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

const returnArticlePartComponent = (articlePart: PostParagraph | PostPicture) => {
  if ("paragraphText" in articlePart) return <ArticleParagraph htmlString={articlePart.paragraphText.html}/>;
  if ("picture" in articlePart) return <ArticleImage src={articlePart.picture.url} alt={articlePart.pictureDescription} />;
  return null;
};

function Post({ post }: { post: FullPost }) {
  const postElements = useMemo(() => [...(post?.postParagraphs || []), ...(post?.postPictures || [])], [post]);
  const orderedElements = useMemo(
    () => postElements.sort((postEl, postEl2) => postEl.indexInPost - postEl2.indexInPost),
    [postElements]
  );
  const ArticleContentComponents = useMemo(
    () =>
      orderedElements.map((articlePart, idx) => (
        <Fragment key={`${post.slug}-part-${idx}`}>{returnArticlePartComponent(articlePart)}</Fragment>
      )),
    [orderedElements]
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
          {ArticleContentComponents}
        </article>
      </main>
      <ArticleFooter />
    </Layout>
  );
}

export default Post;

import React from "react";

import s from "./CardArticle.module.scss";
import Image from "next/image";
import { Card } from "primereact/card";
import Icon from "components/Icon/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { capitalize } from "helpers/utils";

type PostSummaryProps = {
  postSummary: PostSummary;
};

const returnHref = ({ by, value, pathname }: { by: "tag" | "author"; value: string; pathname: string }) => {
  const href = `/posts?by${capitalize(by)}=${value}`;
  return href !== pathname ? href : "#";
};

const CardArticleFooter = ({ postSummary }: PostSummaryProps) => {
  const { pathname } = useRouter();
  const {
    date,
    author: { name },
    tags,
  } = postSummary;

  const byTagLinks = tags.map((tag, idx) => (
    <>
      <Link href={returnHref({ by: "tag", value: tag, pathname })} key={`${tag}-${idx}`}>
        {tag}
      </Link>
      {idx === tags.length - 1 ? null : " / "}
    </>
  ));

  return (
    <>
      <Link href={returnHref({ by: "author", value: name, pathname })}>{name}</Link>
      <Icon iconName="pencil" color={"grey"} marginDir="both" marginValue="1" styles={{ fontSize: "0.8rem" }} />{" "}
      {byTagLinks} - {new Date(date).toLocaleDateString()}
    </>
  );
};

const CardArticle = ({ postSummary }: PostSummaryProps) => {
  const {
    id,
    coverImage: { url: articleCover },
    title,
    excerpt,
  } = postSummary;
  const header = <Image src={articleCover} alt={`cover image of article: ${title}`} layout="fill" aria-hidden />;
  const linkToPostTitle = (
    <Link href={`/posts/${id}`} className={s.cardTitle}>
      {title}
    </Link>
  );
  const footer = <CardArticleFooter postSummary={postSummary} />;
  return (
    <Card className={s.CardArticle} title={linkToPostTitle} header={header} footer={footer}>
      {excerpt}
    </Card>
  );
};

export default CardArticle;

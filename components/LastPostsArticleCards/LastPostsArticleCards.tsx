import React from "react";
import { isValidISODateWithoutTime } from "helpers/utils";
import CardArticle from "components/CardArticle/CardArticle";
import s from './LastPostsArticleCards.module.scss';
import { Button } from "primereact/button";
import Link from "next/link";

function LastPostsArticleCards({ posts }: { posts: PostSummary[] }) {
  const last6Posts = posts
    .filter((p) => isValidISODateWithoutTime(p.date))
    .sort(({ date: dateA }, { date: dateB }) => new Date(dateA).getTime() - new Date(dateB).getTime())
    .slice(0, 6);

  return (
    <section className={s.LastPostsArticleCards}>
      {last6Posts.map((p) => (
        <CardArticle key={`post-${p.id}-card`} postSummary={p} />
      ))}
      <div className={s.buttonContainer}>
        <Link href={`/posts`} passHref>
          <Button label="Todos los artículos" className="p-button-raised"/>
        </Link>
      </div>
    </section>
  );
}

export default LastPostsArticleCards;

import React from "react";
import Image from "next/image";

import { NextPage } from "next";

import s from "./ArticleImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

const ArticleImage: NextPage<Props> = ({ src, alt }) => {
  return (
    <div className={s.ArticleImageContainer}>
      <div className={s.ArticleImageBox}>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" quality={100}/>
          <span className={s.ArticlePicDesc} aria-hidden><i>{alt}</i></span>
      </div>
    </div>
  );
};

export default ArticleImage;

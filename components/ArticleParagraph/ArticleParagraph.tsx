import React from 'react'
import parse from "html-react-parser";

import { NextPage } from "next";

import s from './ArticleParagraph.module.scss';

interface Props {
  htmlString: string;
}

const ArticleParagraph: NextPage<Props> = ({ htmlString }) => {

  return (
    <div className={s.ArticleParagraph}>
      {parse(htmlString)}
    </div>
  );
};
export default ArticleParagraph
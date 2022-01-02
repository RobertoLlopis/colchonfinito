import React from 'react'
import Image from 'next/image';

import type { NextPage } from "next";
import s from './HeaderImage.module.scss';

interface Props {
    urlImage: string;
  }

const HeaderImage: NextPage<Props> = ({urlImage}) =>{
    return (
        <section className={s.HeaderImage}>
          <Image
            src={urlImage}
            alt="Main Page cover picture"
            layout="fill"
            quality={100}
          />
        </section>
    )
}

export default HeaderImage

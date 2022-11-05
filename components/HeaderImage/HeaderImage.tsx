import React from 'react'
import Image from 'next/image';

import type { NextPage } from "next";
import s from './HeaderImage.module.scss';

interface Props {
    urlImage: string;
    alt: string;
    wrapperHeight?: string | number;
  }

const HeaderImage: NextPage<Props> = ({urlImage, alt, wrapperHeight}) =>{
    return (
        <section className={s.HeaderImage} style={{height: wrapperHeight || '80vh'}}>
          <Image
            src={urlImage}
            alt={alt}
            layout="fill"
            quality={100}
          />
        </section>
    )
}

export default HeaderImage

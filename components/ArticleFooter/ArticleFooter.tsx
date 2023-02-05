import React from "react";

import Logo from "components/Logo";

import useShareUrls from "hooks/useShareUrls";
import { renderIconLink } from "helpers/socialIcons";

import s from "./ArticleFooter.module.scss";
import Image from "next/image";

const ArticleFooter = ({ noHotLink }: { noHotLink?: boolean }) => {
  const [facebookUrl, twitterUrl] = useShareUrls();
  const displayHotLink = !noHotLink;
  return (
    <footer className={s.ArticleFooter}>
      <Image
        src={"/mountains.jpg"}
        alt="footer mountan background"
        layout="fill"
        aria-hidden
        className={s.backgroundImage}
      />
      <main className={s.footerWrapper}>
        <div>
          <Logo />
        </div>
        {displayHotLink && (
          <div>
            <h3>¿Te ha gustado este post? ¡Compártelo!</h3>
            <div className={s.iconsBox}>
              {renderIconLink({ iconName: "facebook", size: "9", hotLink: facebookUrl })}
              {renderIconLink({ iconName: "twitter", size: "9", hotLink: twitterUrl })}
            </div>
          </div>
        )}
        <div>
          <h3>¡No nos pierdas la pista que no paramos!</h3>
          <div className={s.iconsBox}>
            {renderIconLink({ iconName: "facebook", size: "9" })}
            {renderIconLink({ iconName: "instagram", size: "9" })}
            {renderIconLink({ iconName: "youtube", size: "9" })}
            {renderIconLink({ iconName: "twitter", size: "9" })}
            {renderIconLink({ iconName: "email", size: "9" })}
          </div>
        </div>
      </main>
    </footer>
  );
};

export default ArticleFooter;

import Icon, { IconProps } from "components/Icon/Icon";
import React from "react";
import s from "./Footer.module.scss";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from "lib/constants";

interface IconLinkProps extends IconProps {
  email?: string;
  socialLink?: string;
}

type AvailableIcons = "email" | "facebook" | "twitter" | "instagram" | "youtube";

const IconLink = ({ email, socialLink, ...restProps }: IconLinkProps) => (
  <a href={`${email ? `mailto:${email}` : socialLink}`}>
    <Icon {...restProps} />
  </a>
);

const icons = {
  email: {
    email: EMAIL,
    iconName: "envelope",
  },
  facebook: {
    socialLink: FACEBOOK_URL,
    iconName: "facebook",
  },
  instagram: {
    socialLink: INSTAGRAM_URL,
    iconName: "instagram",
  },
  youtube: {
    socialLink: YOUTUBE_URL,
    iconName: "youtube",
  },
  twitter: {
    socialLink: TWITTER_URL,
    iconName: "twitter",
  },
};

const renderIconLink = (iconName: AvailableIcons) => (
  <div className={s.footerIconWrapper}>
    <IconLink {...{ ...icons[iconName], color: "white", styles:{fontSize: '1.2rem'} }} />
  </div>
);

const aboutUsMunifest = 'Hace un par de años nos propusimos conocer Sudamérica, tomándonos el tiempo y el cuidado que esa palabra lleva implícita. Tras esperar a que llegara "el momento", decidimos dejar aparcados nuestros trabajos y nuestras vidas en la capital y cruzar el charco, para aprender del mundo, empaparnos de su gente, sus raíces y otras formas de vivir.';
const quote = '“Viajar es un ejercicio con consecuencias fatales para los prejuicios, la intolerancia y la estrechez de mente”.';
const quoteAuthor = 'Mark Twain.';

function Footer() {
  return (
    <section className={s.footerSection}>
      <div>
        <div>
          <h2>¡Síguenos la pista en redes sociales!</h2>
          <div className={s.socialRow}>
            {renderIconLink("facebook")}
            {renderIconLink("instagram")}
            {renderIconLink("youtube")}
            {renderIconLink("twitter")}
          </div>
        </div>
        <div>
          <h2>También puedes escribirnos a:</h2>
          <div className={s.emailRow}><a href={`mailto:${EMAIL}`}>{EMAIL}</a>{renderIconLink("email")}</div>
        </div>
      </div>
      <div className={s.centerContainer}>
        <h2>Sobre Nosotros:</h2>
        <p>{aboutUsMunifest}</p>
      </div>
      <div>
        <div className={s.quoteWrapper}>
          <h4>{quote}</h4>
          <h4>{quoteAuthor}</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;

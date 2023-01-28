import React from "react";
import { AvailableIcons } from "types/common";
import { EMAIL, socialIcons } from "lib/constants";
import { renderIconLink } from "helpers/socialIcons";
import s from "./Footer.module.scss";

const renderIconLinkWrapped = ({ iconName }: { iconName: AvailableIcons }) => (
  <div className={s.footerIconWrapper}>{renderIconLink({ iconName })}</div>
);

const aboutUsMunifest =
  'Hace un par de años nos propusimos conocer Sudamérica, tomándonos el tiempo y el cuidado que esa palabra lleva implícita. Tras esperar a que llegara "el momento", decidimos dejar aparcados nuestros trabajos y nuestras vidas en la capital y cruzar el charco, para aprender del mundo, empaparnos de su gente, sus raíces y otras formas de vivir.';
const quote =
  "“Viajar es un ejercicio con consecuencias fatales para los prejuicios, la intolerancia y la estrechez de mente”.";
const quoteAuthor = "Mark Twain.";

function Footer() {
  return (
    <section className={s.footerSection}>
      <div>
        <div>
          <h2>¡Síguenos la pista en redes sociales!</h2>
          <div className={s.socialRow}>
            {renderIconLinkWrapped({ iconName: "facebook" })}
            {renderIconLinkWrapped({ iconName: "instagram" })}
            {renderIconLinkWrapped({ iconName: "youtube" })}
            {renderIconLinkWrapped({ iconName: "twitter" })}
          </div>
        </div>
        <div>
          <h2>También puedes escribirnos a:</h2>
          <div className={s.emailRow}>
            <a href={socialIcons.email.socialLink}>{EMAIL}</a>
            {renderIconLink({iconName: "email"})}
          </div>
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

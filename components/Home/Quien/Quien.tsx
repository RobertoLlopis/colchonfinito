import React from "react";
import s from "./Quien.module.scss";

interface QuienProps {
  authors: [Author];
}

interface MemberCardProps {
  name: string;
  pictureUrl: string;
}

function Quien({ authors }: QuienProps) {
  if(!authors) return null;
  return (
    <section className={s.Quien}>
      <h1>¿Quién duerme en Colchón finito</h1>
      <div>
        {authors.map(({ name, picture: { url } }, index) =>{ 
          console.log('{name, url}', {name, url}); 
          return(
          <MemberCard key={index} name={name} pictureUrl={url} />
        );})}
      </div>
    </section>
  );
}

function MemberCard({ name, pictureUrl }: MemberCardProps) {
  return (
    <div className={s.MemberCard}>
      <div style={{ backgroundImage: `url(${pictureUrl})` }} />
      <h2>{name}</h2>
    </div>
  );
}

export default Quien;

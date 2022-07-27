import Icon from "components/Icon/Icon";
import React from "react";
import { useHover } from "react-use";
import { Button } from 'primereact/button';
import s from "./Quien.module.scss";

interface QuienProps {
  authors: Author[];
}

interface MemberCardProps {
  name: string;
  pictureUrl: string;
  email: string;
}

function Quien({ authors }: QuienProps) {
  if (!authors) return null;
  return (
    <section className={s.Quien}>
      <h1>¿Quién duerme en Colchón finito?</h1>
      <div className={s.MemberCardWrapper}>
        {authors.map(({ name, picture: { url }, email }, index) => {
          return <MemberCard key={index} name={name} pictureUrl={url} email={email}/>;
        })}
      </div>
      <div className={s.QuienButtonWrapper}><Button label="¡Conócenos más!" className="p-button-rounded"/></div>
    </section>
  );
}

function MemberCard({ name, pictureUrl, email }: MemberCardProps) {
  const memberCard = (hovered: boolean) => (
    <div className={s.MemberCard}>
      <div className={hovered ? 'hovered' : ''} style={{ backgroundImage: `url(${pictureUrl})` }}>
      {hovered && (
        <a href={`mailto:${email}`}>
          <Icon
            iconName="envelope"
          />
        </a>
      )}
        
      </div>
      <h2>{name}</h2>
    </div>
  );
  const [ hoverable ] = useHover(memberCard);

  return hoverable;
}

export default Quien;

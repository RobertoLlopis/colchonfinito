import Icon from 'components/Icon/Icon';
import React from 'react';

import s from './Creemos.module.scss';

interface StatementCardProps {
    title: string;
    iconName: string;
    description: string;
}

const statementCardsInfo = [
  {
    title: 'Nuestra misión',
    iconName: 'comments',
    description: 'Descubrimos la esencia de un país a través de su gente y sus historias',
  },
  {
    title: 'Viviendo sin calendario',
    iconName: 'calendar',
    description: 'Parándonos a sentir y huyendo del turismo "check list"',
  },{
    title: 'Recorriendo a dedo',
    iconName: 'thumbs-up',
    description: 'Cultivamos el arte de lo espontáneo, siendo conscientes del camino que recorremos',
  }
]

function Creemos() {
  return (
    <section className={s.Creemos}>
      <h1>Creemos en una forma de viajar pura.</h1>
      <StatementGrid />
    </section>
  );
}

function StatementGrid(){
  return (
    <main className={s.statementGrid}>
      {statementCardsInfo.map((statementCardInfo, index) => (
        <StatementCard key={index} {...statementCardInfo} />
      ))}
    </main>
  )
}

function StatementCard({iconName, title, description}: StatementCardProps){
  return (
    <div className={s.statementCard}>
      <Icon
          iconName={iconName}
          marginDir="b"
          marginValue="3"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Creemos;

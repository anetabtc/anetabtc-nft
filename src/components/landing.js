import React from 'react';
import clsx from 'clsx';
import styles from './landing.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const aneta1 = ({ style }) => {
    const aneta1 = require('../../static/img/f1.svg').default;

    return (
        <div style={style} className={styles.twitter}>
            <aneta1 style={{ width: 200, height: 200 }}/>
        </div>
    )
}

const Socials = [
  {
    title: 'Wrap Bitcoin on Ergo and Cardano',
    link:  'https://twitter.com/anetaBTC',
    aneta1:  aneta1,
    description: (
      <>
          Guaranteed and verifiable through transparent and accessible smart contracts.
      </>
    ),
  },
  {
    title: 'Security and Privacy',
    link: 'https://t.me/anetaBTC',
    aneta1:  require('../../static/icons/anetaIcon3.svg').default,
    description: (
      <>
         Leverage built-in privacy and security tools of the most decentralized blockchains.
      </>
    ),
  },
  {
    title: 'Research-driven',
    link: 'https://discord.gg/anetabtc',
    aneta1:  require('../../static/icons/anetaIcon4.svg').default,
    description: (
      <>
       A meticulous approach, ensuring correctness with constant oversight and testing.
      </>
    ),
  }
];

function Guide({aneta1, title, description, link}) {
  return (
    <Link href={link} target="_blank" className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        
        
        <aneta1 style={{ width: 200, height: 200, margin: '0 auto' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageSocials() {
  return (
    <section className={styles.guides}>
        {Socials.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
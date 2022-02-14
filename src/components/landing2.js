import React from 'react';
import clsx from 'clsx';
import styles1 from './landing.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const compIcon = ({ style }) => {
    const Icon1 = <img src={require('/static/imgphoto/ergodex.png')} />;


    return (
        <div style={style} className={style.aneta1}>
            <Icon1 style={{ width: 350, height: 350 }}/>

        </div>
    )
}



const Guides1 = [
  {
    title: 'About anetaBTC',
    link:  '../docs/intro',
    Icon1: compIcon,
    description: (
      <>
        Learn about anetaBTC, an on-chain wrapped protocol on Ergo and Cardano. Learn about our mission and key principles.
      </>
    ),
  },
  {
    title: 'FAQ',
    link: '../docs/intro',
    Icon1:  require('/static/imgphoto/ergodex.png').default,
    description: (
      <>
        Learn about our protocol, tokenomics, LISO, community, and whitepaper.
      </>
    ),
  },
  {
    title: 'Protocol overview',
    link: '../docs/intro',
    Icon1:  require('../../static/imgphoto/kyberswap.svg').default,
    description: (
      <>
        Learn about all aspects of our architecture including minting, redeeming, burning, and transferring.
      </>
    ),
  },
];

function Guide1({Icon1, title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles1.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles1.wrapper)}>
        <Icon1 style={{ width: 350, height: 350, margin: '0 auto' }} />

      </div>
    </Link>
  );
}

export default function HomepageGuides() {
  return (
    <section  className={styles1.guides}>
        {Guides1.map((props, idx) => (
            <Guide1 key={idx} {...props} />
        ))}
    </section>
  );
}
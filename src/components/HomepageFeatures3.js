import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList3 = [
  {
    title: 'Wrap Bitcoin on Ergo or Cardano',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>

        Guaranteed and verifiable through transparent and accessible smart contracts.
      </>
    ),
  },
  {
    title: 'Security and privacy',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Leverage built-in privacy and security tools of the most decentralized blockchains.
      </>
    ),
  },
  {
    title: 'Research driven',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A meticulous approach, ensuring correctness with constant oversight and testing.
      </>
    ),
  },

];






function Feature3({Svg, title, description}) {
  return (

          <div id="lol" className={clsx('col col--3 kek1')}>

                <div className="text--center ">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
          
  );
}



export default function HomepageFeatures3() {
  return (
<section className={styles.features}>
    
      <div className="container ">
        <div className="row kek1">
          {FeatureList3.map((props, idx) => (
            <Feature3 key={idx} {...props} />
          ))}
        </div>
          
          </div>
          </section>
);
}
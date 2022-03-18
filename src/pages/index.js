import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Links from "@docusaurus/core/lib/client/exports/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LandingSocials from '../components/LandingSocials';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (

    <header className={clsx('hero hero--primary kek1', styles.heroBanner)}>
      <div className="grid_label">
<div className="box1"><h1> Decentralized,<br /> On-Chain Wrapped Bitcoin.</h1>
<p>Fully On-chain Bitcoin on Ergo and Cardano.</p>
<div className="imgSet">
<a href="http://discord.gg/anetabtc" class="active"><img src={'/imgphoto/discord.png'} /></a>
<a href="https://twitter.com/anetaBTC" class="active"><img src={'/imgphoto/twitter.png'} /></a>
<a href="https://medium.com/@anetaBTC" class="active"><img src={'/imgphoto/medium.png'} /></a>
<a href="https://t.me/anetaBTC" class="active"><img src={'/imgphoto/telegram.png'} /></a></div>

 </div>
<div className="box2"><img src={'/img/angel3.svg'} /></div>
      </div>

    </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`Home`}
      description="Description will go into a meta tag in <head />">

          <HomepageHeader />
      <main>
      <div className="wrapper1">

 <div className="textSh1">
<h1>Decentralized, On Chain BTC</h1><p>A protocol to unlock the value of Bitcoin on Ergo and Cardano.</p>
 </div>
          <div className="section1">
        <div className="guides">
<div className="guide1"><div  className="imgSave">
<img src={'/img/f1.svg'} className="ergo1"/> <img src={'/img/f1.svg'} className="ergo2" /> </div><p><h4>Wrap Bitcoin on Ergo and Cardano</h4></p><div className="text5">Guaranteed and verifiable through transparent and accessible smart contracts.</div>
 </div>
<div className="guide1"><div  className="imgSave">
<img src={'/img/f3.svg'} /></div><p><h3>Security and Privacy</h3></p><p /><div className="text5">Leverage built-in privacy and security tools of the most decentralized blockchains.</div>
 </div>
<div className="guide1"> <div  className="imgSave">
<img src={'/img/f2.svg'} /></div><p><h3>Research-driven</h3></p><p /><div className="text5">A meticulous approach, ensuring correctness with constant oversight and testing.</div>
</div>
        </div>
          </div>

          <div class="block3"></div>
          <div className="textSh3"><h1>Our partners</h1><p>Learn more about our partners who are contributing to decentralized finance.</p></div>
       <div className="section1">
        <div className="guides">
<div className="guide"><a href="https://ergodex.io" class="active"><img src={'/imgphoto/ergodex1.png'} className="ergo1 ergo"/>
<img src={'/imgphoto/ergodex2.png'} className="ergo2 ergo"/></a>
</div>
<div className="guide"><a href="https://kyberswap.com/#/about" class="active"><img src={'/imgphoto/kyberswap3.png'} className="ergo1 kyber"/>
<img src={'/imgphoto/kyberswap2.png'} className="ergo2 kyber"/></a></div>
<div className="guide"><a href="https://minswap.org/" class="active"><img src={'/imgphoto/minswap1.png'} className="ergo1 minswap"/>
<img src={'/imgphoto/minswap2.png'} className="ergo2 minswap"/> </a></div>

        </div>
          </div>

          <div className="block2">
          <div className="textSh1"><h1>Join Our Community</h1><p>Chat with our team and community members as anetaBTC brings DeFi to Ergo and Cardano.</p></div>
          <LandingSocials />  </div><div className="bord1"></div>

<div class="block3"></div>
</div>

      </main>
<footer className="foot1">

<div className="grid_footer">

<div className="foot1"><img src={'/imgphoto/rectangle.png'} /><img src={'/imgphoto/Rectangle1.png'} className="ph1" /><br />anetaBTC is a decentralized, secure protocol that allows users to unlock the value of their Bitcoin on Ergo and Cardano.</div>

<div className="foot2"><ul><b>anetaBTC</b>
<li><a href="/team" class="active" target="_blank">Team</a></li>
<li><a href="https://docs.anetabtc.io/" class="active" target="_blank">Docs</a></li>

<li><a href="https://medium.com/@anetaBTC" class="active" target="_blank">News & Updates</a></li>
<li><a href="https://docs.anetabtc.io/docs/user-guides/Liso/liso-faq" class="active" target="_blank">FAQ</a></li>
<li><a href="https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b" class="active" target="_blank">Tokenomics</a></li>
</ul></div>

<div className="foot3"><ul> <b>Resources</b>
<li><a href="https://drive.google.com/drive/folders/13IGRgf9wNCPfckTQ6DSMaIo9gE-wx0zm?usp=sharing" class="active" target="_blank">Media Kit</a></li>
<li><a href="https://medium.com/@anetaBTC/anetabtc-litepaper-v1-0-171f29b3276a" class="active" target="_blank">Litepaper</a></li>

<li><a href="https://medium.com/@anetaBTC/roadmap-2-0-b2fe0c47eec6" class="active" target="_blank">Roadmap</a></li>
<li><a href="https://datastudio.google.com/u/0/reporting/4cb333f9-39bf-448b-8d2d-f7ac3f44ad5d/page/FyZjC" class="active" target="_blank">Stats</a></li>
<li><a href="https://linktr.ee/anetaBTC" class="active" target="_blank">Linktree</a></li>
</ul></div>

<div className="foot4"><ul> <b>Foundation</b>
<li><a href="#" class="active">Hiring</a></li>
<li><a href="mailto:info@anetabtc.io" class="active">Contact</a></li>

</ul></div>

<div className="foot5">
<div className="imgconf">
<a href="http://discord.gg/anetabtc" class="active"><img src={'/icons/discord.svg'} /></a>
<a href="https://twitter.com/anetaBTC" class="active"><img src={'/icons/twitter.svg'} /></a>
<a href="https://medium.com/@anetaBTC" class="active"><img src={'/icons/medium.svg'} /></a>
<a href="https://t.me/anetaBTC" class="active"><img src={'/icons/telegram.svg'} /></a>
</div>

<b>anetaBTC is a Singapore based DAO.</b></div>
</div>



</footer>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import './nft.css';
import styles from './index.module.css';
import Layout from '@theme/Layout';

function nft() {
  return (
    <Layout
      title={`NFT`}>
   <header>

<div className="background_header">
<div className="wrapper">

    <div className="box logo_block">
<img src={'nft/logo.png'} />
    </div>
    <div className="box angel_block">
<img src={'nft/angel.png'} />
    </div>
    <div className="box label1">
<h2>What is Aneta Angels? </h2>
<div className="label_2">
Aneta Angels is a Cardano and Ergo based NFT project focused on providing utility while paying homage to the various peoples, cultures, and passions that make up the anetaBTC community!
<p />Holders of Ergo Aneta Angel NFTs will enjoy periodic airdrops of NETA tokens over the next 6 months.
 To learn more, check out our <b><u><a href="https://medium.com/@anetaBTC">medium</a></u></b>.
</div>
    </div>

</div>
</div>



   <div className="background_main">
   <br /><br /> <h2><b>Gallery</b></h2><p /> <p /><br />
<div className="block_challenge">
<div className="list1"> <img src={'nft/1.png'} /></div>

<div className="list1"> <img src={'nft/2.png'} /></div>

<div className="list1"> <img src={'nft/3.png'} /></div>

<div className="list1"> <img src={'nft/4.png'} /></div>

<div className="list1"><img src={'nft/5.png'} /></div>

<div className="list1"><img src={'nft/6.png'} /></div>
</div>
   </div>

<div className="background_footer">

<br />  <h2><b>Our Team</b></h2><p /> <p /><br />
<div className="block_challenge1">
<div className="list1"> <a href="https://anetabtc.io/" class="active" target="_blank"><img src={'nft/part1.png'} /></a></div>

<div className="list1"> <a href="https://www.cypherkicks.com/" class="active" target="_blank"> <img src={'nft/part2.png'} /></a></div>

<div className="list1 fx">  <a href="https://www.skyharbor.io/marketplace" class="active" target="_blank"><img src={'nft/part3.png'} /></a></div>


</div>
</div>
</header>
</Layout>
  );
}

export default nft;

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
<p />Holders of Aneta Angel NFTs will enjoy at least a 10% bonus on cNETA rewards earned from staking with NETA1 and NETA2.
 To learn more, check out our <b><u><a href="https://medium.com/@anetaBTC">medium</a></u></b>.
</div>
    </div>

</div>
</div>
<div className="mint">
<div className="information"><br />
<font className="font1">Minting is now live for whitelisted wallets!</font><br /><br />

<button> Mint 1 Aneta Angel</button>
<br />
</div>
</div>

   <div className="background_main">
   <br /> <h2><b>Gallery</b></h2><p /> <p /><br />
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
<div className="list1"> <a href="https://twitter.com/anetaBTC" class="active" target="_blank"><img src={'nft/part1.png'} /></a></div>

<div className="list1"> <a href="https://twitter.com/Cypherkicks" class="active" target="_blank"> <img src={'nft/part2.png'} /></a></div>

<div className="list1 fx">  <a href="https://twitter.com/nftmakerio" class="active" target="_blank"><img src={'nft/part3.png'} /></a></div>


</div>
</div>
</header>
</Layout>
  );
}

export default nft;

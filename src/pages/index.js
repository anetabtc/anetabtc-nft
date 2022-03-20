import React from 'react';
import clsx from 'clsx';
import './nft.css';
import styles from './index.module.css';
import Layout from './helper.js'

function nft() {
  return (
<Layout>
   <header>
<div className="background_header">
<div className="wrapper">
    <div className="box logo_block">
<img src={'/nft/logo.png'} />
    </div>
    <div className="box angel_block">
<img src={'/nft/angel.png'} />
    </div>
    <div className="box label1">
<h2>What is Aneta Angels? </h2>
<div className="label_2">
Aneta Angels is a Cardano and Ergo based NFT project focused on providing utility while paying homeage to the various peoples, cultures, and passions that make up the anetaBTC community!
<p />Holders of Aneta Angel NFTs will enjoy a 10% bonus on all cNETA rewards from NETA1 and NETA2 stake pools.
 To learn more, check out our <b><u>medium</u></b>.
</div>
    </div>

</div>
</div>
   </header >
   <main>
   <div className="background_main">
   <p /> <p /><br /> <h2><b>Gallery</b></h2><p /> <p /><br />
<div className="block_challenge">
<div className="list1"> <img src={'/nft/1.png'} /></div>

<div className="list1"> <img src={'/nft/2.png'} /></div>

<div className="list1"> <img src={'/nft/3.png'} /></div>

<div className="list1"> <img src={'/nft/4.png'} /></div>

<div className="list1"><img src={'/nft/5.png'} /></div>

<div className="list1"><img src={'/nft/6.png'} /></div>
</div>
   </div>
   </main>

<footer>
<div className="background_footer">

<p /><br />  <h2><b>Our Team</b></h2><p /> <p /><br />
<div className="block_challenge1">
<div className="list1"> <img src={'/nft/part1.png'} /></div>

<div className="list1"> <img src={'/nft/part2.png'} /></div>

<div className="list1 fx"> <img src={'/nft/part3.png'} /></div>


</div>
</div>
</footer>

</Layout>
  );
}

export default nft;

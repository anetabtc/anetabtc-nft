import React from 'react';
import clsx from 'clsx';
import './nft.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styles from './index.module.css';
import Layout from '@theme/Layout';
import { useState } from 'react';
import Popup from './Popup';


function nft() {

  const [isOpen, setIsOpen] = useState(false);
  const [copied,setCopied] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

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
<div className="mint">
<div className="information"><br />
<font className="font1">Minting is now live for whitelisted wallets!</font><br />
<p />

<div>
    <input
      type="button"
      className="btn1"
      value="Mint 1 Aneta Angel"
      onClick={togglePopup}
    />
    {isOpen && <Popup content={<>
<div className="final">
<img src={'nft/warriorangel.png'} className="war"/>
<img src={'nft/qr.png'} className="qr"/>
<div className="inf1"> <div className="br2">ADDRESS <br/> <b>9goaw3nWhZC788ArqjzoU9B3QgLup7UwqKSsPwJPdx9RsugVZxy</b>




      <CopyToClipboard text='9goaw3nWhZC788ArqjzoU9B3QgLup7UwqKSsPwJPdx9RsugVZxy'
        onCopy={() => setCopied(true)}
      >
        <img src={'nft/Vector.png'} className="copt" title="Copy address"/>
      </CopyToClipboard>




 </div></div>
<div className="inf2"> <div className="br3">Payment Amount: <br /> <b>22 ERG</b></div></div>
<div className="inf3"> <div className="br4"><b>Purchasing 1 Aneta Angel</b></div></div>
<div className="inf4">
<div className="br1">
<b>Transaction Instructions</b><br/><br/>

<ol>
<li>Send the Exact displayed ERG amount to the wallet address provided.<br/> Hint: use the copy button!</li><p/>
<li>Wait about 10 minutes for your Aneta Angels NFT to arrive in the Ergo wallet from which you sent the payment.</li><p/>
<li>Incorrect payment amounts will not recieve an Aneta Angels NFT and will be refunded their payment minus any transaction fees.</li>
</ol>
</div>
</div>
</div>

      </>}
      handleClose={togglePopup}
    />}
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

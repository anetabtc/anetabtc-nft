import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import LandingSocials from '../components/LandingSocials';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (

    <header className={clsx('hero hero--primary ', styles.heroBanner)}>

       
    </header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`anetaBTC wallet`}
      description="Description will go into a meta tag in <head />">
      
          <HomepageHeader />
      <main className="team_back">
      
<div className="ank">
      <img src={'/light/angel1.svg'}  width="402px" height="402px" className="ank1"/>
      <img src={'/light/bubble.svg'}  width="402px" height="402px" className="ank3"/>
      <img src={'/light/angel2.svg'}  width="400px" height="400px" className="ank2"/></div>
          <div className="team_block"><h1>Meet our Team.</h1>
<div className="grid_team"> 

<div className="list_team">
<img src={'/avatar/austin.png'} /><p />
<h3><em>Austin Negron</em></h3><br />CEO<p >Computer Engineering Boston University</p>
 </div>
<div className="list_team"> <img src={'/avatar/talgat.png'} /><p /><h3>Talgat Manglayev</h3><br />Lead Engineer<p >Ph.D. Nazarbayev University Postdoctoral Researcher at University of Helsinki</p > </div>
<div className="list_team"> <img src={'/avatar/willie.png'} /><p /><h3><em>Willie Mclinton</em></h3><br />Lead Researcher<p >Ph.D. MIT AI and Robotics Google AI Resident Researcher</p ></div>
<div className="list_team"><img src={'/avatar/margie.png'} /> <p /><h3><em>Marguerite Blair</em></h3><br />Security software<p >Security and Software Engineer Citizens Bank</p ></div>
<div className="list_team"> <img src={'/avatar/robert.png'} /><p /><h3><em>Robert Ohr</em></h3><br />Chairman<p >Lehman Brothers Columbia University</p ></div>
<div className="list_team"> <img src={'/avatar/aibek.png'} /><p /><h3><em>Aibek Tleuliyev</em></h3><br />Lead Security Engineer<p >Ballistic and Navigation Support of the Mission Control Center</p ></div>
<div className="list_team"> <img src={'/avatar/dair.png'} /><p /><h3><em>Dair Alayev</em></h3><br />Back-end Developer<p >Astana IT University</p ></div>
<div className="list_team"> <img src={'/avatar/max.png'} /><p /><h3><em>Max Ward</em></h3><br />UI/UX<p>Boston University</p ></div>

<div className="list_team"> <img src={'/avatar/darkhan.svg'} /><p /><h5><em>Darkhan Baibulat</em><br />Developer</h5><p >Astana IT University</p ></div>
<div className="list_team"> <img src={'/avatar/olzhas.svg'} /><p /><h5><em>Olzhas Abdykalykov </em><br />Developer</h5><p >Astana IT University</p ></div>
<div className="list_team"> <img src={'/avatar/kalbek.svg'} /><p /><h5><em>Kalbek Saduakassov</em><br />Developer</h5><p >Astana IT University</p ></div>
<div className="list_team"> <img src={'/avatar/aisha.svg'} /><p /><h5><em>Aisha Kozhamseitova</em><br />Developer</h5><p>Astanta IT University</p ></div>
</div>
<div className="grid_team_2">
<div className="list_team2"> <img src={'/avatar/hayato.png'} />
<h5><em>Hayato Gin Kawai</em><br />Graphic Design</h5><p >gallerialovelace.io</p></div>
<div className="list_team2"> <img src={'/avatar/nathan.png'} />
<h5><em>Nathan Baskin</em><br />KYC/AML</h5><p >Silicon Valley Bank Santander Bank</p></div>       
<div className="list_team2"> <img src={'/avatar/georgina.png'} />
<h5><em>Georgina Alcala</em><br />Personal Relations</h5><p >Boston University</p></div>   

</div>

</div>

      </main>
<footer className="foot2">

<div className="grid_footer_2">

<div className="foot1"><img src={'/light/logoAneta.svg'} /><br />anetaBTC is a decentralized, secure protocol that allows users to unlck the value on thier Bitcoin on Ergo and Cardano.</div>

<div className="foot2"><ul><b>anetaBTC</b> 
<li><a href="/users/123" class="active">Team</a></li>
<li><a href="/users/123" class="active">Docs</a></li>
<li><a href="/users/123" class="active">News & Updates</a></li>
<li><a href="/users/123" class="active">FAQ</a></li>
<li><a href="/users/123" class="active">Tokenomics</a></li>
</ul></div>

<div className="foot3"><ul> <b>Resources</b>
<li><a href="/users/123" class="active">Media Kit</a></li>
<li><a href="/users/123" class="active">Litepaper</a></li>
<li><a href="/users/123" class="active">Privacy policy</a></li>
<li><a href="/users/123" class="active">Terms & Conditions</a></li>
</ul></div>

<div className="foot4"><ul> <b>Foundation</b>
<li><a href="/users/123" class="active">Hiring</a></li>
<li><a href="/users/123" class="active">Contact</a></li>

</ul></div>

<div className="foot5">
<div className="imgconf">
<img src={'/icons/discord.svg'} />
<img src={'/icons/twitter.svg'} />
<img src={'/icons/medium.svg'} />
<img src={'/icons/telegram.svg'} />
</div>

<b>

anetaBTC is a Singapore <br />based DAO.</b></div>
</div>



</footer>
    </Layout>
  );
}

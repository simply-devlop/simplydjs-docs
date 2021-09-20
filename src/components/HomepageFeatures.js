import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Stats',
    description: (
      <>
        <li>10k+ Downloads</li>
        <li>20+ github Stars</li>
      </>
    ),
  },
];

function AboutMe(){
  return(
<div className="text--center padding-horiz--md">

<h4 className={styles.abtme} style={{fontWeight: '500', fontSize: '30px'}}>Developed by Rahuletto#0243</h4>
<br></br>
<p style={{textAlign: 'center'}}>
   <a href="https://www.npmjs.com/package/simply-djs"><img src="https://img.shields.io/npm/v/simply-djs.svg?style=flat-square" /></a>
 <a href="https://www.npmjs.com/package/simply-djs"><img src="https://img.shields.io/npm/dt/simply-djs?style=flat-square" /></a><br></br>
   <a href="https://www.npmjs.com/package/simply-djs"><img src="https://nodei.co/npm/simply-djs.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a><br></br>
   <a href="https://discord.gg/3JzDV9T5Fn"><img src="https://invidget.switchblade.xyz/3JzDV9T5Fn" /></a>
</p>
<br></br>
<span className={styles.divider}></span>
        <h3 className={styles.abtme}>About</h3>
        <p>This is a Package which simplifies things used in discord.js so you can <b>Simply Develop</b>.
        <br></br>Uses <i>discord.js v13</i>. Works with many packages like aoi.js, etc..<br></br><br></br>
        <i><span className={styles.warning}>Note: This package is not a part of Discord.js and its completely a separate third party package.. </span><br></br>This is not a package like discord.js which uses discord api.</i></p>
      </div>
  );
}

function Feature({title, description}) {
  return (
    
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>Why ?</h3>
        <p>
        <li>Simplifies things in discord.js</li>
        <li>Fastest Support</li>
        <li>Customizability at Peak</li>
        <li>Beginner Friendly</li>
        <li>Easier than other packages</li>
        <li>Slash Support</li>
      </p>
      </div>
    </div>
      
      <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3> </h3>
        <p> </p>
      </div>
    </div>

<div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>Stats</h3>
        <p>
        <li>10k+ Downloads</li>
        <li>20+ github Stars</li>
        <li>20 Functions</li>
      </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <AboutMe></AboutMe>
<section className={styles.features}>

      <div className="container">
        <div className="row">
            <Feature></Feature>
        </div>
      </div>
    </section>

    </div>
    
  );
}

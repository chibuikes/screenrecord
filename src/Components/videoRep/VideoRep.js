import React from 'react'
import classes from './VideoRep.module.css'
import logo from './help_logo.svg'
import down from './arrow-down.svg'
import profile from './profile-circle.png'
import search from './search-normal.png'
import more from './more.svg'
import copy from './link.png'
const VideoRep=()=>{
     return <div className={classes.container}>
<header className={classes.vpheader}>
<div className={classes.vpdiv}>
<div className={classes.vpdiv1}>
<img src={logo} alt='help logo' className={classes.vpimg}/>
<p className={classes.vpp}>HelpMeOut</p>
</div>

<div className={classes.vpdiv1}>
<img src={profile} alt='profile' className={classes.vpimg1} />
<p className={classes.vpp1}>John Mark</p>
<img src={down} alt='arrow down' className={classes.vpimg2}/>

</div>

</div>
<div className={classes.vpdiv}>
     <div className={classes.vpdiv2}>
          <p className={classes.vpp2}>Hello, John Mark</p>
          <p className={classes.vpp3}>Here are your recorded videos</p>
     </div>
     <div className={classes.vpdiv3}>
     <img src={search} alt='search' className={classes.vpimg3}/>
     <input type='search' placeholder='Search for a particular video' className={classes.search}/>
     </div>


</div>

</header>

<scetion className={classes.sec}>
     <p className={classes.secp}>Recent Files</p>
     <section className={classes.sec1}>
          <div className={classes.grid1}>
               <div className={classes.secdiv}></div>
               <div className={classes.secdiv1}>
           <p className={classes.secp1}>How to create Facebook Ad listing</p>
           <img src={copy} alt='copy' className={classes.copy}/>
            <img src={more} alt='more'className={classes.more}/>
               </div>
               <p className={classes.gridp}>SEPTEMBER 23, 2023</p>
          </div>
          <div className={classes.grid1}>
               <div className={classes.secdiva}></div>
               <div className={classes.secdiv1}>
           <p className={classes.secp1}>How to create Facebook Ad listing</p>
           <img src={copy} alt='copy' className={classes.copy}/>
            <img src={more} alt='more'className={classes.more}/>
               </div>
               <p className={classes.gridp}>SEPTEMBER 23, 2023</p>
         </div>
        
     </section>
     <p className={classes.secp}>Files from last week</p>
     <section className={classes.sec1a}>
     <div className={classes.grid2}></div>
          <div className={classes.grid3}></div>

     </section>

</scetion>
     </div>
}
export default VideoRep
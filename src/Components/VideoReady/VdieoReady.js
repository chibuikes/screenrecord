import React from 'react'
import classes from './VideoReady.module.css'
import logo from './help_logo.svg'
import edit from './edit.svg'
import copy from './copy.png'
import face from './Facebook svg.png'
import telegram from './Group (2).png'
import whatsapp from './Vector.png'
import frame from './video (1).png'
import down from './arrow-down.svg'

const VideoReady=()=>{
    return <React.Fragment>
   <div className={classes.container}>
        <header className={classes.header}>
<div className={classes.headerdiv}> 
<img src={logo} alt='logo' className={classes.img}/> 
<p className={classes.headerp}>HelpMeOut</p>
</div>
<nav className={classes.nav}>
<p className={classes.navp}>Features</p>
<p className={classes.navp}>How It Works</p>

</nav>
<p className={classes.headerp1}>Get Started</p>
</header>
<section className={classes.sec}>
<div className={classes.secdiv}>
<p className={classes.secp}>Your video is ready!</p>
<p className={classes.secp1}>Name</p>

<div className={classes.headerdiv3}>
<p className={classes.headerp3}>Untitled_Video_20232509</p>
 <img src={edit} alt='edit'/>
</div>
<form className={classes.secform}>  
<input type='email' placeholder='enter email of receiver' className={classes.secinput}/>
<button type='button' className={classes.secbtn}>Send</button>
    </form>
    <p className={classes.vrp}>Video Url</p>
    <div className={classes.vrdiv}>
        <p className={classes.vrp1}>https://www.helpmeout/Untitled_Video_20232509</p>
        <div className={classes.vrdiv1}>
            <img src={copy} alt='copy'/>
        <p className={classes.vrp2} >Copy </p>

        </div>


    </div>
    <p className={classes.vrp3}>Share your video</p>
    <div className={classes.spdiv}>
    <div className={classes.spdiv1}>
        <img src={face} alt='' className={classes.spimg}/>
        <p className={classes.spp1}>Facebook</p>
        </div> 
          <div className={classes.spdiv1}>
        <img src={whatsapp} alt='whatsapp' className={classes.spimg}/>
        <p className={classes.spp1}>Whatsapp</p>
        </div>
        <div className={classes.spdiv1}>
        <img src={telegram} alt='telegram' className={classes.spimg}/>
        <p className={classes.spp1}>Telegram</p>
        </div>

    </div>
</div>
<div className={classes.secdiva}>
<img src={frame} alt='frame'/>
<p className={classes.vrp4}>Transcript</p>
<div className={classes.spdiv3}>
<p className={classes.spp2}>English</p>
    <img src={down} alt='arrow_down' className={classes.secimg2}  />

</div>

</div>
</section>
</div>
    </React.Fragment>
}
export default VideoReady
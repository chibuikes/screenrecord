import React from 'react'
import classes from './SingleVideo.module.css'
import logo from './help_logo.svg'
import profile from './profile-circle.png'
import down from './arrow-down.svg'
import edit from './edit.svg'
import frame from './video frame (2).png'
import copy from './copy.png'
import face from './Facebook svg.png'
import telegram from './Group (2).png'
import whatsapp from './Vector.png'

const SingleVideo=()=>{
    return <div className={classes.container}>
 <haeder className={classes.header}>

<div className={classes.headerdiv1} >
<img src={logo} alt='home_logo' className={classes.headerimg} />
<p className={classes.headerp}>HelpMeOut</p>
</div>

<div className={classes.headerdiv2}>
<img src={profile} alt='profile' className={classes.headerimg1} />
<p className={classes.headerp1}> John Mark</p>
<img src={down} alt='arrow_down' className={classes.headerimg2}  />
</div>
 </haeder>
 <p className={classes.headerp2}><span className={classes.span}>Home / Recent Videos / </span>How To Create A Facebook Ad Listing</p>

 <div className={classes.headerdiv3}>
<p className={classes.headerp3}>How To Create A Facebook Ad Listing</p>
 <img src={edit} alt='edit'/>
</div>
<img src={frame} alt='frame' className={classes.frame}/>
<section className={classes.sec} >
    <form className={classes.secform}>  
<input type='email' placeholder='enter email of receiver' className={classes.secinput}/>
<button type='button' className={classes.secbtn}>Send</button>
    </form>
    <div className={classes.secdiv}>
        <p className={classes.secp}>https://www.helpmeout/Untitled_Video_20232509</p>
        <div className={classes.secdiv1}>
            <img src={copy} alt='copy' className={classes.seccopy}/>
        <p className={classes.secp1}>Copy URL</p>

        </div>


    </div>
</section>
<p className={classes.spp}>Share your video </p>
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
<p className={classes.spp}>Transcript </p>
<div className={classes.spdiv3}>
<p className={classes.spp2}>English</p>
    <img src={down} alt='arrow_down' className={classes.secimg2}  />

</div>

    <section className={classes.sec1}>

<div className={classes.secdiv4}>
    <p className={classes.divp}>0.01</p>
      <p className={classes.divp}>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>

</div>
<div className={classes.secdiv4}>
    <p className={classes.divp}>0.15</p>
      <p className={classes.divp}>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the . Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-ha </p>

</div>
<div className={classes.secdiv4}>
    <p className={classes.divp}>0.30</p>
      <p className={classes.divp}>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the   </p>

</div>
<div className={classes.secdiv4}>
<p className={classes.divp1}>1.00</p>
      <p className={classes.divp1}>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
</div>


    </section>

    </div>

}
export default SingleVideo
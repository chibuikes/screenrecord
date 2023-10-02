import React from 'react'
import classes from './Home.module.css'
import logo from './help_logo.svg'
import right from './arrow-right.svg'
import scree from './Screenshot (152).png'
import vid from './Video Repository.svg'
import rec from './record-circle.svg'
import revisit from './revisit.svg'
import easy from './easy_share.svg'
import exp from './exp.svg'
import logo1 from './iCON 7 1.svg'
import { Link } from 'react-router-dom'
const Home =()=>{
    return <React.Fragment>
        <div className={classes.container}>
        <header className={classes.header}>
<div className={classes.headerdiv}> 
<img src={logo} alt='logo' className={classes.img}/> 
<p className={classes.headerp}>HelpMeOut</p>
</div>
<nav className={classes.nav}>
<Link to='videorep' className={classes.navp}>Features</Link>
<Link to='singlevideo' className={classes.navp}>How It Works</Link>

</nav>
<Link to='login 'className={classes.headerp1}>Get Started</Link>
</header>

<section className={classes.headersec}>
    <div className={classes.headerdiv1}>
    <p className={classes.headerp2}>Show Them Don't Just Tell</p>
    <p className={classes.headerp3}>Help your friends and loved ones by creating and sending videos on how to get things done on a website. </p>
 <button type='button' className={classes.headerbtn}>
    <p className={classes.btnp}>Install HelpMeOut</p>
    <img src={right} className={classes.imgbtn} alt='right arrow'/>

 </button>
 
    </div>
    <div className={classes.headerdiv2}>
        <img src={scree} alt='people' className={classes.headerimg}/>
    </div>


</section>

        </div>
        <section className={classes.feature}>
    <p className={classes.featp}>Features</p>
    <p className={classes.featp1}>Key Highlights of Our Extension</p>
   <div className={classes.featdiv}>
    <div  className={classes.featdi}>
<div className={classes.featdiv1}>
    <img src={rec} alt='record' className={classes.featimg1}/>
    <div className={classes.featdiv2}>
        <p className={classes.featp2}>Simple Screen Recording</p>
        <p className={classes.featp3}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
    </div>
</div>

<div className={classes.featdiv1}>
    <img src={revisit} alt='revisit' className={classes.featimg1}/>
    <div className={classes.featdiv2}>
        <p className={classes.featp2}>Easy-to-Share URL</p>
        <p className={classes.featp3}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
    </div>
</div>

<div className={classes.featdiv1}>
    <img src={easy} alt='easy' className={classes.featimg1}/>
    <div className={classes.featdiv2}>
        <p className={classes.featp2}>Revisit Recordings</p>
        <p className={classes.featp3}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
    </div>
</div>

    </div>
    <img src={vid} className={classes.featimg} alt='demo'/>
   </div>
</section>


<section className={classes.hiw}>
<p className={classes.hiwp}>How It Works</p>
<section className={classes.hiwdiv}>
<div className={classes.hiwdiv1}>
 <p className={classes.hiwp1}>1</p>
 <p className={classes.hiwp2}>Record Screen</p>
 <p className={classes.hiwp3}>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
<img src={exp} alt='exp'/>
 
</div>
<div className={classes.hiwdiv1}>
 <p className={classes.hiwp1}>2</p>
 <p className={classes.hiwp2}>Share Your Recording</p>
 <p className={classes.hiwp3}>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
<img src={exp} alt='exp'/>
</div>
<div className={classes.hiwdiv1}>
 <p className={classes.hiwp1}>3</p>
 <p className={classes.hiwp2}>Learn Effortlessly</p>
 <p className={classes.hiwp3}>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
 <img src={exp} alt='exp'/>
</div>
</section>

</section>

<footer className={classes.footer}>
<div className={classes.footerdiv} >
    <img src={logo1} alt='logo1' className={classes.footerimg}/>
    <p className={classes.footerp}>HelpMeOut</p>
</div>
<div className={classes.footerdiv1}>
    <p className={classes.footerp1}>Menu</p>
    <p className={classes.footerp2}>Home</p>
    <p className={classes.footerp2}>Converter</p>
    <p className={classes.footerp2}>How it Works</p>
</div>
<div className={classes.footerdiv1}>
    <p className={classes.footerp1}>About us</p>
    <p className={classes.footerp2}>About</p>
    <p className={classes.footerp2}>Contact Us</p>
    <p className={classes.footerp2}>Privacy Policy</p>
</div>
<div className={classes.footerdiv1}>
    <p className={classes.footerp1}>Screen Record</p>
    <p className={classes.footerp2}>Browser Window</p>
    <p className={classes.footerp2}>Desktop</p>
    <p className={classes.footerp2}>Application</p>
</div>

</footer>
    </React.Fragment>
}
export default Home
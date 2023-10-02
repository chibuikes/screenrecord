import React from 'react'
import classes from './Login.module.css'
import logo from './help_logo.svg'
import google from './Google svg.png'
import facebook from './Facebook svg.svg'
import stroke from './stroke.svg'

const Login =()=>{
    const submit=(e)=>{
   e.preventDefault()
    }
    return <section className={classes.container}>

<div className={classes.logindiv}>
<img src={logo} alt='help logo' className={classes.logo}/>
<p className={classes.loginp}>HelpMeOut</p>
</div>

<section className={classes.loginsec}>
    <p className={classes.secp}>Log in or Sign up</p>
    <p className={classes.secp1}>Join millions of others in sharing successful moves on HelpMeOut.</p>
    <div className={classes.logindiv1}>
        <img src={google} alt='google' className={classes.loginimg1}/>
        <p className={classes.loginp1}>Continue with Google</p>
    </div>
    <div className={classes.logindiv1}>
        <img src={facebook} alt='facebook' className={classes.loginimg1}/>
        <p className={classes.loginp1}>Continue with Facebook</p>
    </div>
    <div className={classes.logindiv2}>
        <div className={classes.logindiv3} ><img src={stroke} alt='stroke<' /></div>
        <div className={classes.logindiv4} >or</div>

        <div className={classes.logindiv3} ><img src={stroke} alt='stroke<' /></div>
    </div>
    <form onSubmit={submit} className={classes.form}>
<div className={classes.formdiv}> 
    <p  className={classes.formp}>Email</p>
    <input type='email' placeholder='Enter your email address'  className={classes.forme}/>
</div>
<div className={classes.formdiv}> 
    <p  className={classes.formp}>Password</p>
    <input type='password' placeholder='Enter your Password'  className={classes.forme}/>
</div>
<button type='submit' className={classes.formbtn}>Sign Up</button>
    </form>
</section>

    </section>
}

export default Login
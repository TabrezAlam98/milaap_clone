import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
const Login =()=>{
    const [email, setEmail]=useState("");
    const [passw, setPass]=useState("");
    const [flag, setFlag]=useState(false)
    const [home,setHome]=useState(true);
const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.prevent.default();
        let mail=localStorage.getItem("Email").replace(/"/g,"");
        let pass=localStorage.getItem("Password").replace(/"/g,"");
    
        if(!email || !passw){
            setFlag(true);
            console.log("Empty");
        }
        else if(passw !==pass ||email !==mail){
            setFlag(true)
        }
        else{
            setHome(!home);
            setFlag(false)
        }
    }
    return(
       <div className={styles.main}>
        <div className={styles.formdiv}>
           <p className={styles.backBtn}>
          <Link to='/'><i class="fas fa-times"></i></Link></p>
       <div className={styles.innerDiv}>
       <div>
           <img className={styles.milaapLogo} src='https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png'/>
          <p>Welcome to Milaap,</p>
          <p>India’s largest crowdfunding site</p>
      </div>
     <div className={styles.innerDiv2}>
     <p>Quickly login using</p>
     <div className={styles.sign_in_option}>
       <div>
        <p>Facebook</p>
        </div>
       <div>
       <p>Google</p>
      </div>
   </div>
     <p className={styles.orPara}>or</p>
     { home ? (
    <div className={styles.formDiv}>
  
    <form onSubmit={handleSubmit}>
     <div className={styles.inputBox}>
   <input
      type="text"
        placeholder="Enter Mobile Number or Email"
        onChange={(event)=> setEmail(event.target.value)}
         />
         </div>
    <div className={styles.inputBox}>
        <input 
        type="passw"
          placeholder='Password / OTP'
          onChange={(event)=> setPass(event.target.value)}
         />
    </div>
    <div className={styles.submit}>
        <input type='submit' value='Log in'/>
     </div>
     {flag && (
        <alert color ="primary" variant='danger'>
           Please Fill Correct Info 
        </alert> 
     )}
     </form>
  
     </div>

     ):(
       navigate("/")
     )}
         <p style={{color:'rgb(156,51,83)'}}>Forgot Password?</p>
         <div className={styles.bottom}>
         <p>New to Milaap? Sign up now, it’s quick & free</p>
         <button className={styles.btn}>
         <Link to='/register'>Sign up</Link> </button>
     </div>
         </div>
                       
      </div>
     </div>
          
        </div>
    )
}
export default Login
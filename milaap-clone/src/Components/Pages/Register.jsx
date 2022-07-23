import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Login from './Login';
import styles from './Register.module.css'

const Register = () => {
  const [name, setName]=useState("");
  const [email,setEmail]=useState("")
  const [pass, setPass]=useState("");
  const [flag, setFlag]=useState(false)
  const [login, setLogin]=useState(true)

const handleSubmit=(event)=>{
   event.prevent.default()
   if(!name || !email || !pass){
    setFlag(true)
   }
   else{
    setFlag(false);
    localStorage.setItem("Email",JSON.stringify("email"))
    localStorage.setItem("Password",JSON.stringify("password"))
     setLogin(!login)
   }
}
function handleClick(){
  setLogin(!login);
}
  return (<>
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
          <p className={styles.p1}>Sign up & manage fundraisers, donations & more</p>
                      
          <div className={styles.formDiv}>
          {login ? (
        <form onSubmit={handleSubmit}>
       <div className={styles.inputBox}>
         <input
            type="text"
            placeholder="Full name "
            onChange={(e)=>setName(e.target.value)}/>
       </div>
      <div className={styles.inputBox}>
        <input 
        type='email'
          placeholder='Email'
          onChange={(e)=>setEmail(e.target.value)}
         />
       </div>
       <div className={styles.inputBox}>
          <input 
          type='password'
           placeholder='Password '
           onChange={(e)=>setPass(e.target.value)}
        />
       </div>
       <div className={styles.submit}>
         <input   type='submit'/>
      </div>
      {flag && (
               <alert color ="primary" variant='danger'>
                  Please Fill Every Field 
               </alert> 
            )}
       </form>
        ):(
          <Login/>
      )}
        </div>
      <div className={styles.bottom}>
        <p onClick={handleClick}>Already signed up with Milaap? </p>
      <button className={styles.btn}>
       <Link to='/login'>Login</Link></button>
      </div>
       </div>
                       
       </div>
       </div>
    </div>
    </>)
}

export default Register
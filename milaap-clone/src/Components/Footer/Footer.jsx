import React from 'react'
import Style from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={Style.main}>
        <div className={Style.footerp1}>
            <div className={Style.footerCol1}>
            <p className={Style.headPara}> <u>D</u>onate towards</p>
        <div>
          <i className="fas fa-stethoscope"></i>
          <p>Medical </p>
        </div>
        <div>
          <i className="fas fa-user-graduate"></i>
          <p> Education </p>
        </div>
        <div>
                <i className="fas fa-monument"></i>
                <p> Memorial </p>
        </div>
            </div>
            <div className={Style.footerCol2}>
                <p className={Style.headPara2}><u>M</u>ilaap</p>
                <p>Press and media</p>
                <p>Team</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Board</p>
                <p>Thank you</p>
            </div>
            <div className={Style.footerCol3}>
                <p className={Style.headPara3}><u>In</u>dian office address</p>
                <p>Milaap Social Ventures India Pvt. Ltd.</p>
                <p>ClayWorks Create - building,11th KM Create Campus,Arakere Bannerghatta Rd,</p>
                <p>Bangalore, Karnataka, India 560076</p>
                <p><u>Su</u>pported by</p>
                <div className={Style.logoDiv}>
                    <div>
                        <img src='https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png'/>
                    </div>
                    <div>
                        <img src='https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png'/>
                    </div>
                    <div>
                        <img src='https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png'/>
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_(2018).svg/1200px-American_Express_logo_(2018).svg.png'/>
                    </div>
                </div>
            </div>
        </div>
        <div className={Style.footerp2}>
            <div>
                <button>Start a fundraiser</button>
                <p>Pricing review FAQ's and tips</p>
                <div className={Style.iconDiv}>
                 <p>Find us on</p>
                 <div><i class="fab fa-facebook-f"></i></div>
                 <div><i class="fab fa-twitter"></i></div>
                 <div><i class="fab fa-linkedin-in"></i></div>
                 <div><i class="fab fa-instagram"></i></div>
                 <div><i class="fab fa-youtube"></i></div>
                </div>
            </div>
            <div className={Style.mobile}>
                <div> <img className={Style.imgMobile} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZAb8NjP_tkPNenIVa4BfWwtrXkponQ79ew&usqp=CAU'/></div>
                <div className={Style.mobilePara}>
                    <p>Set up, manage and promote your fundraiser with Milaap app</p>
                    <p>Download Now!</p>
                    <img src='https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png'/>
                    <img src="https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png" alt="" />
                </div>
            </div>
        </div>
  
    </div>
       <div className={Style.blackFooter}>
        <p>Security & Privacy &nbsp; &nbsp; Conditions of use &nbsp; &nbsp; © 2010 - 2022 milaap.org. All rights reserved.</p>
       </div>
       </>
  )
}

export default Footer
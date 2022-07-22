import React from 'react'
import Style from './MilaapApp.module.css'

const MilaapApp = () => {
  return (<>
    <div className={Style.main}>
        <div>
            <img className={Style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZAb8NjP_tkPNenIVa4BfWwtrXkponQ79ew&usqp=CAU'/>
        </div>
        <div>
            <p className={Style.p1}> Milaap app - fundraise and donate seamlessly!</p>
           <p className={Style.p2}>Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere</p>
           <div className={Style.qrcode}>
            <img src='https://assets.milaap.org/assets/app-qrcode-homepage-prod-0a3005c2633fe1444aff0962fa5f5aabe3827b6fbfc6365035c90624187a860f.png'/>
           </div>
           <p>Scan the QR Code to download app.</p>
           <div className={Style.appBox}>
            <div>
                <img src='https://assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png'/>
            </div>
            <div>
                <img src='https://assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png'/>
            </div>
           </div>
        </div>
    </div>
    <div className={Style.call}>
        <div className={Style.callInnerBox}>
            <p>Need help to setup your free fundraiser?</p>
            <button> <i class="fa-solid fa-phone"></i>Request a call</button>
        </div>
    </div>
    </>
  )
}

export default MilaapApp
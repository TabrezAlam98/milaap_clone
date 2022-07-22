import React from 'react'
import Footer from '../Footer/Footer'
import Slide from '../Slider/Slide'
import Fundraising from './Fundraising'
import Style from './Homepage.module.css'
import MilaapApp from './MilaapApp'

const Home = () => {
  return (<>
    <div className={Style.container}>
    <div className={Style.header}>
      <div>7-Year-Old With Rapidly Growing Facial Tumour Needs Urgent Surgery</div>
      <div className={Style.icon}><i class="fas fa-greater-than"></i></div>
      </div>
      <div className={Style.homePart_1}>
        <div className={Style.homePart_1Div_1}>
           <p>Milaap</p>
           <p>Free Crowdfunding for India</p>
           <p>Raise funds online for medical emergencies and social causes</p>
           <button className={Style.fndBtn}>Start a fundraiser - it's FREE</button>
           <div className={Style.rupees}>
            <div>
              <p>665,000+</p>
              <p>Fundraisers</p>
            </div>
            <div>
              <p>Rs. 2024 Crores +</p>
              <p>Raised</p>
            </div>
            <div>
              <p>81 lakhs +</p>
              <p>Donations</p>
            </div>
           </div>
        </div>
        <div className={Style.homePart_1Div_2}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51WAXj_qlFWybnNxb9AKE4V9se5LGD37DVQ&usqp=CAU'/>
        </div>
      </div>
   <div className={Style.fees}>
    <div>
    <i class="fas fa-bullhorn"></i>
      <p>Our crowdfunding platform charges NO fees</p>
    </div>
    <div className={Style.zero}>0%</div>
   </div>
   <p className={Style.milaaPara}>Thousands are fundraising online on Milaap</p>
    <div className={Style.design}>
    <div><hr/></div>
    <div className={Style.box}>
   
    <div></div>
    <div></div>
    <div></div>
    </div>
    <div><hr/></div>

    </div>
    <div className={Style.searchBox}>
      <input placeholder="Search by fundraiser name, title, location, cause, or other keywords" />
      <div><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    <div className={Style.fundraisingBox}>
      <div>
      <i class="fa-solid fa-cloud-showers-water"></i>
        <p>Assam</p>
      </div>
      <div>
      <i class="fa-solid fa-stethoscope"></i>
        <p>Medical</p>
      </div>
      <div>
      <i class="fa-solid fa-landmark-dome"></i>
        <p>Memorials</p>
      </div>
      <div  className={Style.circle}>
      <i class="fa-solid fa-circle-dot"></i>
      <i class="fa-solid fa-circle-dot"></i>
      <i class="fa-solid fa-circle-dot"></i>
   
        <p>15 others</p>
      </div>
    </div>
      <Fundraising/>
      <MilaapApp/>
      <Slide/>
      <Footer/>
   </div>
   
   </>
  )
}

export default Home
import React from 'react'
import Style from './Donate.module.css'
import Fundraising from '../Pages/Fundraising'
import Footer from '../Footer/Footer'

const Donate = () => {
  return (
    <div>
      <div  className={Style.handBox}>
        <p>Thousands are crowdfunding for various causes. Support a fundraiser today.
</p>
      </div>
      <button className={Style.search}>Refine Search</button>
      <Fundraising/>
      <Footer/>
    </div>
  )
}

export default Donate
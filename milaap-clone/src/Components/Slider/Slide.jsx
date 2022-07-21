import React, { useEffect } from 'react'
import Style from './Slide.module.css'
import { SliderData } from './SliderData'

const Slide = () => {
    const [curSlide, setCurSlide]=React.useState(0);
      const slideLength=SliderData.length;

      const handleNext=()=>{
     setCurSlide(curSlide === slideLength-1 ? 0: curSlide+1)
      }
      const handlePrev=()=>{
        setCurSlide(curSlide === 0?slideLength-1:curSlide-1)
      }
      console.log(slideLength);
      useEffect(()=>{
        setCurSlide(0)
      },[])
  return (
    <div>
        <p className={Style.para}>Thousands are fundraising online on Milaap</p>
       
    <div className={Style.design}>
    <div><hr/></div>
    <div className={Style.box}>
   
    <div></div>
    <div></div>
    <div></div>
    </div>
    <div><hr/></div>

    </div>
   
    <div className={ Style.reviews}>
    <div>
            <button className={Style.prev} onClick={handleNext}>-Prev</button>
            <button className={Style.next} onClick={handlePrev}>Next+</button>
        </div>
     {SliderData.map((el,ind)=>(
        <div className={ind === curSlide && Style.main}  > 
        <div >
            <div className={Style.imgBox}>
            {ind === curSlide &&   <img className={Style.img} src={ el.image} alt="img" />}
            </div>
         
            { ind=== curSlide && el.name}
        
            </div>
        <div ><p className={Style.comments}>{ ind === curSlide && el.comments}</p></div>

        </div>
   ))} 
    </div>

    </div>
  )
}

export default Slide
import React,{useEffect} from 'react'
import Style from './Details.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Details = () => {
   const [data, setData] = React.useState({});
    const currentData=useSelector(state=>state.products)
console.log(currentData)
let {id}=useParams()
useEffect(()=>{
  if(id){
    const data=currentData?.find((el)=>el.id===Number(id));
    data && setData(data)
  }
},[id,currentData])
  return (<>
   
  <div className={Style.main}> 
  <div className={Style.mainDiv1}>
   <div className={Style.descP}>
    <p>{data.desc}</p>
   </div>
   <div><img className={Style.img} src={data.img_url} alt="" /> </div>
   </div>
   <div className={Style.mainDiv2}>
   <p className={Style.desc2}>{data.desc2}</p> 
   <p className={Style.desc2}>{data.price}</p>
   <button className={Style.donateNow}>Donate now</button>
   <p className={Style.ptag}>Card, Netbanking, Cheque pickups</p>
   <div className={Style.qrBox}>
  <img  src='https://assets.milaap.org/assets/app-qrcode-homepage-prod-0a3005c2633fe1444aff0962fa5f5aabe3827b6fbfc6365035c90624187a860f.png'/>
   </div>
   </div>
</div> 
    
{/* <p>{data.para}</p>
<p>{data.para2}</p> */}
  
  
 
    </>
  )
}

export default Details

import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Style from './Fund.module.css'

const Fundraising = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=()=>{
        axios.get("http://localhost:8080/data")
        .then((res)=>{
            setData(res.data)
        })
      }
   
  return (
    <div className={Style.main}>
        {data.map((elem)=>(
    <div  key={elem.id}>
        
        <div className={Style.imgBox}>
            <img className={Style.img} src={elem.img_url}/>
        </div>
        <p className={Style.desc}>{elem.desc}</p>
        <div className={Style.innerBox}>
            <div className={Style.innerBox2}>
                <div><p>{elem.per}</p></div>
                <div className={Style.para}>
                    <p>{elem.para}</p>
                    <p>{elem.price}</p>
                </div>
                <div className={Style.para2}>
                    <p>{elem.para2}</p>
                    <p>{elem.desc2}</p>
                </div>
            </div>
            <div className={Style.desc3}>
                <p>{elem.desc3}</p>
            </div>
        </div>
        </div>
       
        ))}
    </div>
  )
}

export default Fundraising
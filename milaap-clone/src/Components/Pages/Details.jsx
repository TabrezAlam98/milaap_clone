import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
   const [data, setData] = React.useState({});
    const params=useParams()
    const des1=useParams()
    const des22=useParams()
    // useEffect(() => {
    //     fetch(`http://localhost:8080/data/${params.id}`)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         setData(res.data);
    //       });
    //   }, []);
    //   console.log(data)

  return (<>
    <div>
       id: {params.id}
    </div>
    <div>
      desc: {des1.desc}
    </div>
    <div>
      desc3:{des22.desc3}
    </div>
 
    </>
  )
}

export default Details
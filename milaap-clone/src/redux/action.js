import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionType";


export const getData=()=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST});
    return axios ({
        method:"get",
        url:"http://localhost:8080/data"
    })
    .then((r)=>dispatch({type:GET_DATA_SUCCESS,payload:r.data}))
     .catch((err)=>dispatch({type:GET_DATA_FAILURE,payload:err}))
}
import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionType";

import axios from "axios"

export const getData = (select) => (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
   
  
    return axios({
      method: "get",
      url: "http://localhost:8080/alldata",
  
      params: {
        _sort: "price",
        _order: select,
      },
    })
      .then((r) => dispatch({ type: GET_DATA_SUCCESS, payload: r.data }))
      
      .catch((err) => dispatch({ type: GET_DATA_FAILURE, payload: err }));
  };
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const intialState = {
  products: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialState, { payload, type }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products:payload
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError:true,
      };
      default:
        return state
  }
};

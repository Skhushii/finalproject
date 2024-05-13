import { GET_TOTALCOUNT_ERROR, GET_TOTALCOUNT_PROGRESS, GET_TOTALCOUNT_SUCCESS } from "../action/action";

const initialState = {
  total: [],
  isLoading: false,
  isError: null,
};

function TotalCountReducer(state = initialState, action) {
  switch (action.type) {

   // TOTAL COUNT

    case GET_TOTALCOUNT_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOTALCOUNT_ERROR:
      return {
        ...state,
        isLoading : false,
        isError: action.data,
      };
    case GET_TOTALCOUNT_SUCCESS:
      return {
        ...state,
        isLoading : true,
        total: action.data,
        isError: null,
      };

    default: {
      return {
        ...state,
      }
    }
  }
}

export default TotalCountReducer;

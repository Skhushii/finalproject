import { DELETE_PARTYCONNECT_ERROR, DELETE_PARTYCONNECT_PROGRESS, DELETE_PARTYCONNECT_SUCCESS, GET_PARTYCONNECT_ERROR, GET_PARTYCONNECT_PROGRESS, GET_PARTYCONNECT_SUCCESS, POST_PARTYCONNECT_ERROR, POST_PARTYCONNECT_PROGRESS, POST_PARTYCONNECT_SUCCESS } from "../action/action";

const initialState = {
  data: [],
  isLoading: false,
  isError: null,
};

function PartyConnectReducer(state = initialState, action) {
  switch (action.type) {

    // GET PARTY CONNECTION

    case GET_PARTYCONNECT_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case GET_PARTYCONNECT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    case GET_PARTYCONNECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        isError: null,
      };

    // POST PARTY CONNECTION

    case POST_PARTYCONNECT_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case POST_PARTYCONNECT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    case POST_PARTYCONNECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };

      //DELETE PARTY CONNECT
      case DELETE_PARTYCONNECT_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case DELETE_PARTYCONNECT_SUCCESS:
      const filterConnect = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoading: false,
        data: filterConnect,
        isError: null,
      };
    case DELETE_PARTYCONNECT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
          };

      default:
        return {
          ...state,
        }
  }
}

export default PartyConnectReducer;
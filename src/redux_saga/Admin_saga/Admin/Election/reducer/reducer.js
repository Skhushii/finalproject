import {  GET_ELECTION_ERROR,
          GET_ELECTION_PROGRESS,
          GET_ELECTION_SUCCESS,
          POST_ELECTION_ERROR,
          POST_ELECTION_PROGRESS,
          POST_ELECTION_SUCCESS,
          DELETE_ELECTION_PROGRESS,
          DELETE_ELECTION_SUCCESS,
          DELETE_ELECTION_ERROR,
          UPDATE_ELECTION_PROGRESS,
          UPDATE_ELECTION_SUCCESS,
          UPDATE_ELECTION_ERROR
        } from "../action/action";

const initialState = {
  ElectionData: [],
  GetUserProgress: false,
  GetUserError: null,
  PostUserProgress: false,
  PostUserError: null,

  DataIsLoaded: false
};

function ElectionReducer(state = initialState, action) {
  switch (action.type) {
     // GET
    case GET_ELECTION_PROGRESS:
      return {
        ...state,
        GetUserProgress: true,
      };
    case GET_ELECTION_ERROR:
      return {
        ...state,
        GetUserError: action.data,
      };
    case GET_ELECTION_SUCCESS:
      return {
        ...state,
        DataIsLoaded: true,
        ElectionData: action.data,
      };

      // POST
    case POST_ELECTION_PROGRESS:
      return {
        ...state,
        PostUserProgress: true,
      };
    case POST_ELECTION_ERROR:
      return {
        ...state,
        PostUserError: action.data,
      };
    case POST_ELECTION_SUCCESS:
      return {
        ...state,
        DataIsLoaded: true,
        ElectionData: state.ElectionData.concat(action.payload),
        PostUserProgress: false,
      };


      // DELETE
      case DELETE_ELECTION_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case DELETE_ELECTION_SUCCESS:
      const filterElection = state.data.filter(
        (val) => val._id !== action.data
      );
      return {
        ...state,
        isLoading: false,
        data: filterElection,
        isError: null,
      };
    case DELETE_ELECTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };


      //UPDATE
    case UPDATE_ELECTION_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case UPDATE_ELECTION_SUCCESS:
      const updateData = state.data.map((item) =>
        item._id === action.data._id ? action.data : item
      );
      return {
        ...state,
        isLoading: false,
        data: updateData,
        isError: null,
      };
    case UPDATE_ELECTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };

    default: {
      return { ...state };
    }
  }
}

export default ElectionReducer;
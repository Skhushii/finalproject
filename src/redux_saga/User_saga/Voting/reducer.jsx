import {
    DELETE_VOTE_ERROR,
    DELETE_VOTE_PROGRESS,
    DELETE_VOTE_SUCCESS,
    GET_VOTE_ERROR,
    GET_VOTE_PROGRESS,
    GET_VOTE_SUCCESS,
    POST_VOTE_ERROR,
    POST_VOTE_PROGRESS,
    POST_VOTE_SUCCESS
} from "./action";

const initialState = {

  data: [],
  isLoading: false,
  isError: null,
};

const VoteReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_VOTE_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case GET_VOTE_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
        isError: null,
      };
    case GET_VOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };

    case POST_VOTE_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.data.Data),
        isError: null,
      };
    case POST_VOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };

    case DELETE_VOTE_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case DELETE_VOTE_SUCCESS:
      const filterVote = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoading: false,
        data: filterVote,
        isError: null,
      };
    case DELETE_VOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    default: {
      return { ...state };
    }
  }
};
export default VoteReducer;
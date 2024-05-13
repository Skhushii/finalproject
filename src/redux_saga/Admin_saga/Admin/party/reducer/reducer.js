import {
  GET_PARTY_ERROR,
  GET_PARTY_PROGRESS,
  GET_PARTY_SUCCESS,
  POST_PARTY_ERROR,
  POST_PARTY_PROGRESS,
  POST_PARTY_SUCCESS,
  DELETE_PARTY_PROGRESS,
  DELETE_PARTY_SUCCESS,
  DELETE_PARTY_ERROR,
  UPDATE_PARTY_PROGRESS,
  UPDATE_PARTY_SUCCESS,
  UPDATE_PARTY_ERROR
} from "../action/action";

const initialState = {
  party: [],
  isLoading: false,
  isError: null,
};

function PartyReducer(state = initialState, action) {
  console.log(action, "from reducer");
  switch (action.type) {

    // PARTY GET
    case GET_PARTY_PROGRESS:
      {
        return {
          ...state,
          isLoading: true,
          isError : null,
        };
      }
    case GET_PARTY_ERROR:
      {
        return {
        ...state,
        isLoading: false,
        isError: action.data,
      };
    }
    case GET_PARTY_SUCCESS:
      {
        return {
        ...state,
        isLoading: true,
        party: action.data,
        isError: null,
      };
    }

    // PARTY POST

    case POST_PARTY_PROGRESS:
      {
        return {
        ...state,
        isLoading: true,
      };
    }
    case POST_PARTY_ERROR:
      {
        return {
        ...state,
        isLoading : false,
        isError: action.data,
      };
    }
    case POST_PARTY_SUCCESS:
      {
        return {
        ...state,
        isLoading: true,
        party: state.PartyData.concat(action.payload),
        isError: null,
      };
    }

      // PARTY DELETE
      case DELETE_PARTY_PROGRESS:
        return {
          ...state,
          isLoading: true,
          isError: null,
        };
      case DELETE_PARTY_SUCCESS:
        const filterParty = state.data.filter((val) => val._id !== action.data);
        return {
          ...state,
          isLoading: false,
          party: filterParty,
          isError: null,
        };
      case DELETE_PARTY_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: action.data,
        };

        // PARTY UPDATE
      case UPDATE_PARTY_PROGRESS:
        return {
          ...state,
          isLoading: true,
          isError: null,
        };
      case UPDATE_PARTY_SUCCESS:
        const updatedData = state.data.map((item) =>
          item._id === action.data._id ? action.data : item
        );
        return {
          ...state,
          isLoading: false,
          data: updatedData,
          isError: null,
        };
      case UPDATE_PARTY_ERROR:
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

export default PartyReducer;

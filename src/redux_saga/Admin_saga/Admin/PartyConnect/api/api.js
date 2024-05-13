import axios from "axios";
import { BASE_URL, POST_CONNECT_API, GET_CONNECT_API ,DELETE_CONNECT_API} from "../../../../constant";

// PARTYCONNECTE GET API IS IN FUNCTION
export async function GetPartyConnectAxios() {
  return axios.get(BASE_URL + GET_CONNECT_API).then((res) => {
    const data = res.data.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) =>
  console.log(error))
}


// PARTYCONNECTE POST API IS IN FUNCTION
export async function PostPartyConnectAxios(action) {
  return axios.post(BASE_URL + POST_CONNECT_API, action.payload)
    .then((res) => {
      const data = res.data.data;
      const status = res.status;
      return {
        data,
        status
      };
    })
    .catch((error) => {
      console.log("Error in API call", error);
      throw error;
    });
}

// DELETE PARTY CONNECTION

export async function DeletePartyConnectAxios(action) {
  console.log(action.payload._id);
  return axios
    .delete(BASE_URL + DELETE_CONNECT_API + action.payload._id)
    .then((res) => {
      // console.log(action.payload._id);
      const data = action.payload;
      const status = res.status;
      return {
        data,
        status
      };
    })
    .catch((error) => {
      console.log(error);
    });
}
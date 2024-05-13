  import axios from "axios";
  import { BASE_URL, POST_PARTY_API, GET_PARTY_API , DELETE_PARTY_API , UPDATE_PARTY_API} from "../../../../constant";

  // GET PARTY
  export async function GetPartyAxios() {
    return axios.get(BASE_URL + GET_PARTY_API).then((res) => {
      const data = res.data.data;
      const status = res.status;
      return {
        data,
        status
      }
    }).catch((error) => console.log(error))
  }

  // POST PARTY
  export async function PostPartyAxios(action) {
    console.log(action.payload);
    return axios.post(BASE_URL + POST_PARTY_API, action.payload)
      .then((res) => {
        const data = res.data.data;
        console.log("api calling",data);
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

  // DELETE PARTY
  export async function DeletePartyAxios(action) {
    console.log(action.payload._id);
    return axios
      .delete(BASE_URL + DELETE_PARTY_API + action.payload._id)
      .then((res) => {
        console.log(action.payload._id);
        const data = action.payload._id;
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

  // UPDATE PARTY
  export async function UpdatePartyAxios(action) {
    console.log(action.payload);
      const formData = new FormData();
      formData.append("pName", action.payload.pName);
      formData.append("shortCode", action.payload.shortCode);
      formData.append("Profile", action.payload.Profile[0]);
   return axios
      .put(BASE_URL + UPDATE_PARTY_API + action.payload._id, formData)
      .then((res) => {
        const data = action.payload;
        const status = res.status;
        return {
          data,
          status
        };
      })
      .catch((err) => {
        console.log(err);
      });
  }
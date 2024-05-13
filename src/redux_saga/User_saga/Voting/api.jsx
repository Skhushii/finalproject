import axios from "axios";
import { BASE_URL, DELETE_VOTE_API, GET_VOTE_API, POST_VOTE_API } from "../../constant";

// GET
export async function GetVoteApi (){
    return axios.get(BASE_URL + GET_VOTE_API).then((res)=>{
        const data = res.data.data;
        const status = res.status;
        return {
            data,
            status
        }
    }) .catch((error) =>
    console.log(error)
    )

}


// POST
export async function postVoteApi  (action){
    return axios.post(BASE_URL + POST_VOTE_API, action.payload).then(res => {
        const data = res.data;
        const status = res.status;

        return {
            data,
            status
        }
    }) .catch((error) =>{
        return error;
    })
}

// DELETE
export async function DeleteVoteApi(action){
    return axios.delete(BASE_URL + DELETE_VOTE_API + action.payload._id).then((res) => {
        const data = action.payload._id;
        const status = res.status;
        return {
            data,
            status
        };
    }).catch((error) => {
        return error;
    });
}
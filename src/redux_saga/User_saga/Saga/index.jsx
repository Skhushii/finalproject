import { all } from "redux-saga/effects";
import { postVoteSaga } from "./Root/ManageVoteRoot";


export function* voteSaga() {
    yield all([
        postVoteSaga()
    ])
}
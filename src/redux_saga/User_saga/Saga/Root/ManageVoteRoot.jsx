import { takeEvery } from "redux-saga/effects";
import { POST_VOTE_PROGRESS } from "../../Voting/action";
import { managePostVote } from "../ManageVote/ManageVote";

// POST SAGA
export function* postVoteSaga() {
    yield takeEvery(POST_VOTE_PROGRESS, managePostVote)
}
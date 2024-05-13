import { POST_VOTE_ERROR, POST_VOTE_SUCCESS } from "../../Voting/action";
import { postVoteApi } from "../../Voting/api";
import { call, put } from 'redux-saga/effects'

//POST VOTE MANAGE
export function* managePostVote(action) {
    try {
        const res = yield call(postVoteApi, action)
        const data = res.data
        const status = res.status

        if (status == 200 || 201) yield put({ type: POST_VOTE_SUCCESS, data })
        else yield put({ type: POST_VOTE_ERROR, data })

    } catch (err) {
        yield put({ type: POST_VOTE_ERROR, err })
    }
}
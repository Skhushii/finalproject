import { call, put } from "redux-saga/effects"
import { GET_PARTY_ERROR, GET_PARTY_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS ,DELETE_PARTY_SUCCESS ,DELETE_PARTY_ERROR , UPDATE_PARTY_SUCCESS , UPDATE_PARTY_ERROR} from "../../Admin/party/action/action";
import { GetPartyAxios, PostPartyAxios , DeletePartyAxios , UpdatePartyAxios} from "../../Admin/party/api/api";

// GET PARTY MANAGE
export function* GetPartyManage(action) {
  try {
    const res = yield call(GetPartyAxios, action)
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: GET_PARTY_SUCCESS , data })
    } else {
      yield put({ type: GET_PARTY_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_PARTY_ERROR, error })
  }
}

// POST PARTY MANAGE
export function* PostPartyManage(action) {
  try {
    const res = yield call(PostPartyAxios, action);
  const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_PARTY_SUCCESS, data })
    } else {
      yield put({ type: POST_PARTY_ERROR, data })
      console.log(data);
    }
  } catch (error) {
    yield put({ type: POST_PARTY_ERROR, error })
  }
}

// DELETE PARTY MANAGE
export function* DeletePartyManage(action) {
  try {
    const res = yield call(DeletePartyAxios, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_PARTY_SUCCESS, data });
    } else {
      yield put({ type: DELETE_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_PARTY_ERROR, error });
  }
}

// UPDATE PARTY MANAGE
export function* UpdatePartyManage(action) {
  try {
    const res = yield call(UpdatePartyAxios, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: UPDATE_PARTY_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_PARTY_ERROR, data });
    }
  } catch (error) {
    yield put({ type: UPDATE_PARTY_ERROR, error });
  }
}
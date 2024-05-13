import { all } from "redux-saga/effects";
import { GetElectionRootSaga, GetPartyConnectRootSaga, GetPartyRootSaga, GetTotalCountRootSaga, PostElectionRootSaga, PostPartyConnectRootSaga, PostPartyRootSaga , DeleteElectionRootSaga ,DeletePartyRootSaga ,UpdateElectionRootSaga ,UpdatePartyRootSaga} from "./Root/RootSaga";

export function* SagaIndex() {
  yield all([
    GetElectionRootSaga(),
    PostElectionRootSaga(),
    DeleteElectionRootSaga(),
    UpdateElectionRootSaga(),

    GetPartyRootSaga(),
    PostPartyRootSaga(),
    DeletePartyRootSaga(),
    UpdatePartyRootSaga(),

    GetPartyConnectRootSaga(),
    PostPartyConnectRootSaga(),

    GetTotalCountRootSaga(),
  ])
}
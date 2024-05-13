import { takeLatest } from "redux-saga/effects";
import { DELETE_ELECTION_PROGRESS, GET_ELECTION_PROGRESS, POST_ELECTION_PROGRESS, UPDATE_ELECTION_PROGRESS } from "../../Admin/Election/action/action";
import { GetElectionManage, PostElectionManage ,DeleteElectionManage ,UpdateElectionManage} from "../ElectioManage/ElectionManage";
import { GetPartyManage, PostPartyManage , DeletePartyManage, UpdatePartyManage} from "../PartyManage/PartyManage";
import { GET_PARTY_PROGRESS, POST_PARTY_PROGRESS } from "../../Admin/party/action/action";
import { DeletePartyConnectManage, GetPartyConnectManage, PostPartyConnectManage } from "../PartyConnecManage/PartyConnect";
import { DELETE_PARTYCONNECT_PROGRESS, GET_PARTYCONNECT_PROGRESS, POST_PARTYCONNECT_PROGRESS } from "../../Admin/PartyConnect/action/action";
import { GET_TOTALCOUNT_PROGRESS } from "../../Admin/TotalCount/action/action";
import { GetTotalCountManage } from "../TotalCountManage/TotalManage";

// Election
//GET ELECTION IN ROOTSAGA
export function* GetElectionRootSaga(){
  yield takeLatest( GET_ELECTION_PROGRESS , GetElectionManage)
}
//POST ELECTION IN ROOTSAGA
export function* PostElectionRootSaga(){
  yield takeLatest( POST_ELECTION_PROGRESS , PostElectionManage)
}
//DELEE ELECTION IN ROOOTSAGA
export function* DeleteElectionRootSaga(){
  yield takeLatest ( DELETE_ELECTION_PROGRESS , DeleteElectionManage)
}
//UPDATE ELECTION IN ROOTSAGA
export function* UpdateElectionRootSaga(){
  yield takeLatest ( UPDATE_ELECTION_PROGRESS , UpdateElectionManage)
}

// Party
//GET PARTY IN ROOTSAGA
export function* GetPartyRootSaga(){
  yield takeLatest( GET_PARTY_PROGRESS , GetPartyManage)
}
//POST PARTY IN ROOTSAGA
export function* PostPartyRootSaga(){
  yield takeLatest( POST_PARTY_PROGRESS , PostPartyManage)
}
// DELETE PARTY IN ROOTSAGA
export function* DeletePartyRootSaga () {
  yield takeLatest ( DELETE_ELECTION_PROGRESS , DeletePartyManage)
}
// UPDATE PARTY IN ROOTSAGA
export function* UpdatePartyRootSaga () {
  yield takeLatest ( UPDATE_ELECTION_PROGRESS , UpdatePartyManage)
}

// party connect
//GET PARTYCONNECT IN ROOTSAGA
export function* GetPartyConnectRootSaga(){
  yield takeLatest( GET_PARTYCONNECT_PROGRESS , GetPartyConnectManage)
}
//POST PARTYCONNECT IN ROOTSAGA
export function* PostPartyConnectRootSaga(){
  yield takeLatest(POST_PARTYCONNECT_PROGRESS, PostPartyConnectManage )
}
// DELETE PARTYCONNECT IN ROOTSAGA
export function* DeletePartyConnectRootSada(){
  yield takeLatest ( DELETE_PARTYCONNECT_PROGRESS , DeletePartyConnectManage)
}

// total count
//GET TOTAL COUNT IN ROOTSAGA
export function* GetTotalCountRootSaga(){
  yield takeLatest(GET_TOTALCOUNT_PROGRESS , GetTotalCountManage)
}
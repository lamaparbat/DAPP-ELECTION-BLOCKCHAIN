import { getConvertedAge } from "./ageCalculator";
import { getEventDate } from "./getEventDate";
import {
  registerCandidate,
  registerParty,
  registerVoter
} from "./action";
import { getCandidateList, getVoterList, getPartyList, getElectionList } from "./web3";
import {getFormattedErrorMessage} from "./common";

export {
  getConvertedAge,
  getEventDate,
  registerCandidate,
  registerParty,
  registerVoter,
  getCandidateList, getVoterList, getPartyList, getElectionList,
  getFormattedErrorMessage
}
import { combineReducers } from "redux";
import { AuthDetails } from "./auth";
import { UserDetails } from "./userDetails";
import PopupDetails from "./popup";
import { FormDetails } from "./formDetails";
import { freelancerUserList, publicFreelancerUserList } from './freelancerUser'
import loaderReducer from "./loader";
import { filterCountForJobs, getAllJobs, publicJobs } from "./Jobs";
import { notifications } from "./notifications";
import UserActivitySummary from "./userActiveStatus";
import CommanState, { tabsState } from "./commonReducer";
import { transactions } from "./transactions";

export default combineReducers({
    auth: AuthDetails,
    userDetails: UserDetails,
    popup: PopupDetails,
    publicFreelancerUserList,
    loader: loaderReducer,
    publicJobs,
    getAllJobs,
    notifications,
    freelancerUserList,
    filterCountForJobs,
    transactions,
    tabsState,
    // add new state
    FormDetails,
    UserActivitySummary,
    CommanState,
})

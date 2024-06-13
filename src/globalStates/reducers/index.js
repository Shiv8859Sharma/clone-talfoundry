import { combineReducers } from "redux";
import { AuthDetails } from "./auth";
import { UserDetails } from "./userDetails";
import PopupDetails from "./popup";
import { FormDetails } from "./formDetails";
import { freelancerUserList, publicFreelancerUserList } from './freelancerUser'
import loaderReducer from "./loader";
import { publicJobs } from "./Jobs";
import { notifications } from "./notifications";
import UserActivitySummary from "./userActiveStatus";
import CommanState from "./commonReducer";

export default combineReducers({
    auth: AuthDetails,
    userDetails: UserDetails,
    popup: PopupDetails,
    FormDetails,
    publicFreelancerUserList,
    loader: loaderReducer,
    publicJobs,
    notifications,
    UserActivitySummary,
    freelancerUserList,
    CommanState,
})

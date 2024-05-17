import { combineReducers } from "redux";
import { AuthDetails } from "./auth";
import { UserDetails } from "./userDetails";
import PopupDetails from "./popup";
import { FormDetails } from "./formDetails";
import { publicFreelancerUserList } from './freelancerUser'
import loaderReducer from "./loader";
import { publicJobs } from "./Jobs";

export default combineReducers({
    auth: AuthDetails,
    userDetails: UserDetails,
    popup: PopupDetails,
    FormDetails,
    publicFreelancerUserList,
    loader: loaderReducer,
    publicJobs,
})
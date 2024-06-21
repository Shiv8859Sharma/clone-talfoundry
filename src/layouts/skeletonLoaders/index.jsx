import React from "react";
import FindExpertLoader from "./findExpertLoader";
import FindWorkLoader from "./findWorkLoader";
import UserDeatilsCardLoader from "./userDeatilsCardLoader";
import JobDetailsCardLoader from './jobDetailCardLoader'
import NotificationLoader from "./notificationLoader";

const componentMap = {
    FindExpertLoader,
    FindWorkLoader,
    UserDeatilsCardLoader,
    JobDetailsCardLoader,
    NotificationLoader
};

const CustomLoader = ({ count, name }) => {
    const DynamicComponent = componentMap[name];

    if (!DynamicComponent) {
        return null;
    }

    return <DynamicComponent count={count} />;
};

export default CustomLoader;

import React, { memo } from "react";
import FindExpertLoader from "./findExpertLoader";
import FindWorkLoader from "./findWorkLoader";
import UserDeatilsCardLoader from "./userDeatilsCardLoader";
import JobDetailsCardLoader from './jobDetailCardLoader'
import NotificationLoader from "./notificationLoader";
import TableLoader from "./tableLoader";

const componentMap = {
    FindExpertLoader,
    FindWorkLoader,
    UserDeatilsCardLoader,
    JobDetailsCardLoader,
    NotificationLoader,
    TableLoader
};

const CustomLoader = ({ count, name, ...rest }) => {
    const DynamicComponent = componentMap[name];

    if (!DynamicComponent) {
        return null;
    }

    return <DynamicComponent count={count} {...rest} />;
};

export default memo(CustomLoader);

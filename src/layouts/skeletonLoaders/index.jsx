import React from "react";
import FindExpertLoader from "./findExpertLoader";
import FindWorkLoader from "./findWorkLoader";
import UserDeatilsCardLoader from "./userDeatilsCardLoader";

const componentMap = {
    FindExpertLoader: FindExpertLoader,
    FindWorkLoader: FindWorkLoader,
    UserDeatilsCardLoader: UserDeatilsCardLoader
};

const CustomLoader = ({ count, name }) => {
    const DynamicComponent = componentMap[name];

    if (!DynamicComponent) {
        return null;
    }

    return <DynamicComponent count={count} />;
};

export default CustomLoader;

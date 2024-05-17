import React from "react";
import FindExpertLoader from "./findExpertLoader";
import FindWorkLoader from "./findWorkLoader";

const componentMap = {
    FindExpertLoader: FindExpertLoader,
    FindWorkLoader: FindWorkLoader
};

const CustomLoader = ({ count, name }) => {
    const DynamicComponent = componentMap[name];

    if (!DynamicComponent) {
        return null;
    }

    return <DynamicComponent count={count} />;
};

export default CustomLoader;

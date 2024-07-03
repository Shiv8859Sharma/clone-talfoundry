import { memo } from "react";
import TableSimpleLoader from "./TableSimpleLoader";

const componentMap = {
    TableSimpleLoader
};

const TableLoader = ({ count, tableLoaderName,  }) => {
    const DynamicComponent = componentMap[tableLoaderName];

    if (!DynamicComponent) {
        return null;
    }

    return <DynamicComponent tbCount={count?.tbCount} trCount={count?.trCount} />;
};

export default memo(TableLoader);
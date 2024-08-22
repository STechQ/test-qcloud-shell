import { FC } from "react";
import { IRestUrlParam } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
interface IPathsProps {
    requestURL: Array<IRestUrlParam>;
    readOnly: boolean;
    store: Store;
    updateRequestURL: (requestURL: Array<IRestUrlParam>) => void;
}
export declare const Paths: FC<IPathsProps>;
export {};
//# sourceMappingURL=Paths.d.ts.map
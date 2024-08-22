import { FC } from "react";
import { IRestUrlParam } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
interface IQueryProps {
    requestURL: Array<IRestUrlParam>;
    readOnly: boolean;
    store: Store;
    updateRequestURL: (model: Array<IRestUrlParam>) => void;
}
export declare const Query: FC<IQueryProps>;
export {};
//# sourceMappingURL=Query.d.ts.map
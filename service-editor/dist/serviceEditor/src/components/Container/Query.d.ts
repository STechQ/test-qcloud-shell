import { FC } from "react";
import { IRestUrlParam } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
interface IQueryProps {
    requestURL: Array<IRestUrlParam>;
    readOnly: boolean;
    updateRequestURL: (model: Array<IRestUrlParam>) => void;
}
export declare const Query: FC<IQueryProps>;
export {};
//# sourceMappingURL=Query.d.ts.map
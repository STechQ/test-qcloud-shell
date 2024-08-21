import { FC } from "react";
import { IRestUrlParam } from "../../../../common/everything/restService/runtimeModels/IRestServiceModel";
interface IPathsProps {
    requestURL: Array<IRestUrlParam>;
    readOnly: boolean;
    updateRequestURL: (requestURL: Array<IRestUrlParam>) => void;
}
export declare const Paths: FC<IPathsProps>;
export {};
//# sourceMappingURL=Paths.d.ts.map
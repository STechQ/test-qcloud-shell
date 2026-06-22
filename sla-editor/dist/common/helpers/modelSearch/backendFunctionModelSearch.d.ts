import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IFlowLocationDetail } from "./flowModelSearch";
export type IBackendFunctionLocationDetail = IFlowLocationDetail;
export declare class BackendFunctionModelSearch implements IModelSearch<IBackendFunctionLocationDetail> {
    private readonly baseSearcher;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IBackendFunctionLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IBackendFunctionLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
}
//# sourceMappingURL=backendFunctionModelSearch.d.ts.map
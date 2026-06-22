import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IFlowLocationDetail } from "./flowModelSearch";
export declare class WorkflowModelSearch implements IModelSearch<IFlowLocationDetail> {
    private readonly baseSearcher;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IFlowLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IFlowLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
}
//# sourceMappingURL=workflowModelSearch.d.ts.map
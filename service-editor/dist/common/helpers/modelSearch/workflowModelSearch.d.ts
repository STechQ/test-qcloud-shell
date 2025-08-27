import { IFlowLocationDetail } from "./flowModelSearch";
import { ILocationResult, IModelSearch } from "./IModelSearch";
export declare class WorkflowModelSearch implements IModelSearch<IFlowLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IFlowLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=workflowModelSearch.d.ts.map
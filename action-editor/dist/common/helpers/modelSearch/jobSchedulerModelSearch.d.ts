import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IJobSchedulerLocationDetail = {
    key: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class JobSchedulerModelSearch implements IModelSearch<IJobSchedulerLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IJobSchedulerLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IJobSchedulerLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private buildPolicy;
}
//# sourceMappingURL=jobSchedulerModelSearch.d.ts.map
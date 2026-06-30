import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IJobSchedulerLocationDetail = {
    fileName: string;
};
export declare class JobSchedulerModelSearch implements IModelSearch<IJobSchedulerLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IJobSchedulerLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=jobSchedulerModelSearch.d.ts.map
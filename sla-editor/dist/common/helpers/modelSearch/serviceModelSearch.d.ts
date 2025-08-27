import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IServiceLocationDetail = {
    fileName: string;
};
export declare class ServiceModelSearch implements IModelSearch<IServiceLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IServiceLocationDetail>) => void) => Promise<void>;
    private searchVarible;
}
//# sourceMappingURL=serviceModelSearch.d.ts.map
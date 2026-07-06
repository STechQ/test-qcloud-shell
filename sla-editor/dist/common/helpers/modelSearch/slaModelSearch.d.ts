import { ILocationResult, IModelSearch } from "./IModelSearch";
export type ISLALocationDetail = {
    fileName: string;
};
export declare class SLAModelSearch implements IModelSearch<ISLALocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ISLALocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=slaModelSearch.d.ts.map
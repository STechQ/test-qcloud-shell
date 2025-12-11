import { ILocationResult, IModelSearch } from "./IModelSearch";
export interface ICssLocationDetail {
    lineNumber: number;
    column: number;
    code: string;
    searchValue: string;
    text: string;
}
export declare class CssModelSearch implements IModelSearch<ICssLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ICssLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=cssModelSearch.d.ts.map
import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IBackendFunctionLocationDetail = {
    stepID: Array<string>;
    fileName: string;
    mappingName?: string;
    code?: {
        startLine: number;
        startColumn: number;
        endLine: number;
        endColumn: number;
    };
};
export declare class BackendFunctionModelSearch implements IModelSearch<IBackendFunctionLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IBackendFunctionLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=backendFunctionModelSearch.d.ts.map
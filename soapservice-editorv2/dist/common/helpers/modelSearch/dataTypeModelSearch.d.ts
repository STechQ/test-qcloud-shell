import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IDataTypeLocationDetail = {
    fileName: string;
};
export declare class DataTypeModelSearch implements IModelSearch<IDataTypeLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IDataTypeLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=dataTypeModelSearch.d.ts.map
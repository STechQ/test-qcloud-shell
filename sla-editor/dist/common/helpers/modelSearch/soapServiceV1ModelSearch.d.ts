import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type ISoapServiceLocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class SoapServiceV1ModelSearch implements IModelSearch<ISoapServiceLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: ISoapServiceLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ISoapServiceLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private buildPolicy;
    private buildPath;
}
//# sourceMappingURL=soapServiceV1ModelSearch.d.ts.map
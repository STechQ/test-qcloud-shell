import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type ISoapServiceV2LocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class SoapServiceV2ModelSearch implements IModelSearch<ISoapServiceV2LocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: ISoapServiceV2LocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ISoapServiceV2LocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private buildPolicy;
}
//# sourceMappingURL=soapServiceV2ModelSearch.d.ts.map
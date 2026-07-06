import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IEndpointLocationDetail = {
    fileName: string;
    handlerIndex?: number;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class EndpointModelSearch implements IModelSearch<IEndpointLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IEndpointLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IEndpointLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private extractHandlerIndex;
    private buildPolicy;
}
//# sourceMappingURL=endpointModelSearch.d.ts.map
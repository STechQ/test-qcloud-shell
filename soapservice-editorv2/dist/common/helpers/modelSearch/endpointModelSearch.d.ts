import { ILocationResult, IModelSearch } from "./IModelSearch";
export type IEndpointLocationDetail = {
    fileName: string;
    handlerIndex?: number;
};
export declare class EndpointModelSearch implements IModelSearch<IEndpointLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IEndpointLocationDetail>) => void) => Promise<void>;
}
//# sourceMappingURL=endpointModelSearch.d.ts.map
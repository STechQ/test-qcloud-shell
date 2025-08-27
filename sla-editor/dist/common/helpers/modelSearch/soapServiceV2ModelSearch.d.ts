import { ILocationResult, IModelSearch } from "./IModelSearch";
export type ISoapServiceV2LocationDetail = {
    fileName: string;
};
export declare class SoapServiceV2ModelSearch implements IModelSearch<ISoapServiceV2LocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ISoapServiceV2LocationDetail>) => void) => Promise<void>;
    private searchVarible;
}
//# sourceMappingURL=soapServiceV2ModelSearch.d.ts.map
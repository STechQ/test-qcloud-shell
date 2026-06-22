import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IDecisionTableLocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class DecisionTableModelSearch implements IModelSearch<IDecisionTableLocationDetail> {
    private readonly pathDictionary;
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IDecisionTableLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IDecisionTableLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private buildPolicy;
    private buildPath;
    private buildPathSignature;
    private getRuleLabel;
}
//# sourceMappingURL=decisionTableModelSearch.d.ts.map
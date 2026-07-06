import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
export type IContainerLocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class ContainerModelSearch implements IModelSearch<IContainerLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IContainerLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IContainerLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private buildPolicy;
    private buildPath;
    private shouldVisitKey;
    private isObjectContentPath;
    private formatTail;
    private normalizeSegments;
    private parseModel;
    private stringifyModel;
}
//# sourceMappingURL=containerModelSearch.d.ts.map
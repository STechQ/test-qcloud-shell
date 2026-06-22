import { PModules } from "@stechquick/algae/lib/protocols/PlateauMessaging";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
type IQuickBaseDetail = PModules["Quick"]["findModelSearchResult"]["result"];
export type IQuickLocationDetail = IQuickBaseDetail & {
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class QuickModelSearch2 implements IModelSearch<IQuickLocationDetail> {
    private readonly componentEngine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IQuickLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IQuickLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private applyReplacementToCJson;
    private applyNestedReplacementToCJsonValue;
    private buildDetail;
    private buildPath;
    private buildReplacePolicy;
    private shouldVisitKey;
    private resolveComponent;
    private getComponentPathFromSegments;
    private resolveValue;
    private findComponentById;
    private isPropValuePath;
    private isEventValuePath;
    private getValuePathInfo;
    private isValueBodyPath;
    private buildValuePathLabel;
    private isStylePath;
    private isTypePath;
    private getStyleSegmentIndex;
    private buildStyleTailLabel;
    private getRootComponents;
    private getCJsonComponents;
}
export {};
//# sourceMappingURL=quickModelSearch2.d.ts.map
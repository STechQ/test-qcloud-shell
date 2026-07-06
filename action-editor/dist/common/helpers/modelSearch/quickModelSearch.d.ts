import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { PModules } from "@stechquick/algae/lib/protocols/PlateauMessaging";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
export type IQuickLocationDetail = PModules["Quick"]["findModelSearchResult"]["result"];
export interface ISearchValue {
    text: string;
    lineNumber: number;
    column: number;
}
export declare class QuickModelSearch implements IModelSearch<IQuickLocationDetail> {
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IQuickLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IQuickLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private searchInComponent;
    private searchInRawString;
    private getRootComponents;
    private getFirstMatch;
    private toSearchableString;
    private ParseQJsonContent;
}
//# sourceMappingURL=quickModelSearch.d.ts.map
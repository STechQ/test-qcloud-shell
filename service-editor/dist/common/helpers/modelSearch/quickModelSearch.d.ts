import { ILocationResult, IModelSearch } from "./IModelSearch";
import { PModules } from "@stechquick/algae/lib/protocols/PlateauMessaging";
export type IQuickLocationDetail = PModules["Quick"]["findModelSearchResult"]["result"];
export interface ISearchValue {
    text: string;
    lineNumber: number;
    column: number;
}
export declare class QuickModelSearch implements IModelSearch<IQuickLocationDetail> {
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IQuickLocationDetail>) => void) => Promise<void>;
    private searchInComponent;
    private ParseQJsonContent;
    fillSearchValues(code: string, value: string, options?: {
        isRegex?: boolean;
        caseSensitive?: boolean;
    }): ISearchValue[];
}
//# sourceMappingURL=quickModelSearch.d.ts.map
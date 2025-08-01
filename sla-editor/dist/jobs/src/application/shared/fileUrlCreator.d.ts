import { IExportItemBody } from "../../domain/model/IExportItemBody";
export type FileUrlCreationRuleName = "superApp";
export declare class FileUrlCreator {
    private _ruleSet;
    constructor(ruleName: FileUrlCreationRuleName);
    getItemRelativeUrl(item: IExportItemBody): string;
    private getItemFieldValueAsString;
}
//# sourceMappingURL=fileUrlCreator.d.ts.map
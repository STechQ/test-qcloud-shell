import { IExportItemBody } from "../../jobs/src/domain/model/IExportItemBody";
import { ExportType } from "../../jobs/src/domain/model/IExportJob";
export declare class PathLocator {
    private exportType;
    private fileIdPathDict;
    private exportTypePaths;
    constructor(exportType: ExportType);
    get ExportType(): ExportType;
    addFile(file: IExportItemBody): Array<string> | undefined;
    lookupFilePath(fileId: string): Array<string> | undefined;
    calculateFilePath(file: {
        type: IExportItemBody["type"];
        path: IExportItemBody["path"];
    }): undefined | Array<string>;
}
//# sourceMappingURL=pathLocator.d.ts.map
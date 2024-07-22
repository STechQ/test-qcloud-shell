import { IEntity } from "../../../../flowInterfaces/runtime/IEntity";
export interface IImportExport {
    importModel(entity: IEntity): void;
    exportModel(): IEntity;
}
export declare const IImportExport: unique symbol;
//# sourceMappingURL=IImportExport.d.ts.map
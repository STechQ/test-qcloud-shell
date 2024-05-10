import { IEntity } from "../../../../flowInterfaces/runtime/IEntity";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IImportExport } from "../../domain/useCase/IImportExport";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class ImportExportImpl implements IImportExport {
    private readonly viewModel;
    constructor(container: DependencyContainer, viewModel?: IViewModel);
    importModel(entity: IEntity): void;
    exportModel(): IEntity;
}
//# sourceMappingURL=importExportImpl.d.ts.map
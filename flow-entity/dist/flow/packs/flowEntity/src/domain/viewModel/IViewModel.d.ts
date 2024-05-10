import { IInitOptions } from "../../../../flowInterfaces/editor/editors/IEntityEditorProgram";
import { IEntity } from "../../../../flowInterfaces/runtime/IEntity";
export interface IEntityState {
    entity: IEntity;
    editingProp?: string;
}
export interface IViewModel {
    initOptions: IInitOptions;
    entities: Record<string, IEntityState>;
    currentEntity: string;
    readonly: boolean;
}
export declare const IViewModel: unique symbol;
//# sourceMappingURL=IViewModel.d.ts.map
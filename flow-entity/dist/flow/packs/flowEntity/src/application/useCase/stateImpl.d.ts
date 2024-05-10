import { IFlowEntityEditorState } from "../../../../flowInterfaces/editor/IFlowEntityEditorState";
import { IModifiedStatus } from "../../../../flowInterfaces/editor/common/IModifiedStatus";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IEntityUC } from "../../domain/useCase/IEntityUC";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class StateImpl implements IState {
    private readonly viewModel;
    private readonly entityUC;
    constructor(container: DependencyContainer, viewModel?: IViewModel, entityUC?: () => IEntityUC);
    getState(): IFlowEntityEditorState;
    setState(state?: IFlowEntityEditorState): void;
    setReadonly(readonly: boolean): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
    assertEditable(): void;
}
//# sourceMappingURL=stateImpl.d.ts.map
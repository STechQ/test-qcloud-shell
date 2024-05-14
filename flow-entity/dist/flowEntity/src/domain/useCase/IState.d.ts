import { IFlowEntityEditorState } from "../../../../flowInterfaces/editor/IFlowEntityEditorState";
import { IModifiedStatus } from "../../../../flowInterfaces/editor/common/IModifiedStatus";
export interface IState {
    getState(): IFlowEntityEditorState;
    setState(state?: IFlowEntityEditorState): void;
    setReadonly(readonly: boolean): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
    assertEditable(): void;
}
export declare const IState: unique symbol;
//# sourceMappingURL=IState.d.ts.map
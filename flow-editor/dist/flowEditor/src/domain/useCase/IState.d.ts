import { IFlowEditorState } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { IModifiedStatus } from "../../../../flowInterfaces/editor/common/IModifiedStatus";
export interface IState {
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setReadonly(readonly: boolean): void;
    getEditable(): boolean;
    updateModified(status: IModifiedStatus): void;
}
export declare const IState: unique symbol;
//# sourceMappingURL=IState.d.ts.map
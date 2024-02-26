import { IEntity } from "../../runtime/IEntity";
import { IFlowEntityEditorState } from "../IFlowEntityEditorState";
import { IModifiedStatus } from "../common/IModifiedStatus";
export interface IInitOptions {
    onHistoryStatus?: (status: {
        undo: boolean;
        redo: boolean;
    }) => void;
    onModifiedStatus?: (status: IModifiedStatus) => void;
}
export interface IEntityEditorProgram {
    init(options: IInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IEntity;
    importModel(model: IEntity): Promise<void>;
    getState(): IFlowEntityEditorState;
    setState(state?: IFlowEntityEditorState): void;
    setReadonly(readonly: boolean): void;
}
//# sourceMappingURL=IEntityEditorProgram.d.ts.map
import "reflect-metadata";
import { IPresentation } from "./domain/presentation/IPresentation";
import { DependencyContainer } from "./domain/core/diContainer";
import { IImportExport } from "./domain/useCase/IImportExport";
import { IEntity } from "../../flowInterfaces/runtime/IEntity";
import { IEntityEditorProgram, IInitOptions } from "../../flowInterfaces/editor/editors/IEntityEditorProgram";
import { IFlowEntityEditorState } from "../../flowInterfaces/editor/IFlowEntityEditorState";
import { IState } from "./domain/useCase/IState";
export declare class Program implements IEntityEditorProgram {
    private readonly container;
    private readonly state;
    private readonly presentation;
    private readonly importExport;
    constructor(container?: DependencyContainer, state?: () => IState, presentation?: () => IPresentation, importExport?: () => IImportExport);
    private inited;
    private destroyed;
    init(options: IInitOptions): Promise<void>;
    destroy(): Promise<void>;
    private assert;
    private mounted;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IEntity;
    importModel(model: IEntity): Promise<void>;
    getState(): IFlowEntityEditorState;
    setState(state?: IFlowEntityEditorState): void;
    setReadonly(readonly: boolean): void;
}
//# sourceMappingURL=program.d.ts.map
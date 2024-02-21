/// <reference types="react" />
import { IVMHistory } from "../../../../flowInterfaces/editor/IFlowEditorState";
import { IObjectEntry, IStepOptions } from "../../../../flowInterfaces/editor/IStepOptions";
import { IInitOptions } from "../../../../flowInterfaces/editor/editors/IFlowEditorProgram";
import { IStepModel } from "../../../../flowInterfaces/runtime/IStepModel";
export interface IConnectionFrom {
    step: string;
    output: string;
}
export interface IConnectionTo {
    step: string;
    input: string;
}
export interface IConnectionInstance {
    from: IConnectionFrom;
    to: IConnectionTo;
}
export interface IStepInstance {
    options: IStepOptions;
    propValues: IStepModel["P"];
}
export type ReactComponent<TProps = Record<string, any>> = (props: TProps) => JSX.Element;
export interface IViewModel {
    stepRepo: Record<string, Record<string, IStepOptions> | undefined>;
    steps: Record<string, IStepInstance | undefined>;
    connections: Record<string, IConnectionInstance | undefined>;
    selecteds: Array<string>;
    initOptions: IInitOptions;
    componentMap: Map<symbol, ReactComponent>;
    history: IVMHistory;
    readonly: boolean;
    flowInputs: Array<IObjectEntry>;
    flowOutputs: Array<IObjectEntry>;
    resetHistory: () => IVMHistory;
}
export declare const IViewModel: unique symbol;
//# sourceMappingURL=IViewModel.d.ts.map
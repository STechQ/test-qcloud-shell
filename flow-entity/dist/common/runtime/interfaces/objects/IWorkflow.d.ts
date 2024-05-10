import { IModelBase } from "../IModel";
import { IAction } from "../../interfaces/objects/IAction";
import { IFlowModel } from "@stechquick/flow-interfaces/runtime";
import { IWFExpressionData } from "../../IWorkflowExpression";
import { IStore } from "../store/IStore";
import { IMapping } from "../store/IMapping";
import { ISwitchProps } from "../objects/ISwitch";
export type WorkflowStepName = "start" | "humantask" | "flow" | "switch" | "end";
export interface IWorkflow extends IModelBase {
    type: "workflow";
    name: string;
    _name: string;
    desc: string;
    swimlanes: Record<string, IWFExpressionData>;
    roles: Record<string, IWFExpressionData>;
    steps: Record<string, IStepModel>;
    startSteps: Array<IStepTo>;
    store: IStore;
}
export interface IStepTo {
    ID: string;
    inputName: string;
    connectionIndex: number;
}
export interface IStepFrom {
    ID: string;
    outputName: string;
}
export interface IStepModel {
    N: string;
    V: string;
    P?: IPropObject;
    O: Record<string, Array<IStepTo> | undefined>;
    I: Record<string, Array<IStepFrom> | undefined>;
    S?: string;
}
export interface IPropObject {
    type?: 'inline';
    stepId: string;
    name?: string;
    label?: string;
    version?: string;
    swimlane: string;
    props: StepFlowModelPropType | IStepProps | ISwitchProps;
}
export type StepFlowModelPropType = IStepFlowModelProps | IStepInlineFlowModelProps;
export interface IStepFlowModelPropBase {
    type: 'referenced' | 'inline';
    mapping?: IMapping;
}
export interface IStepFlowModelProps extends IStepFlowModelPropBase {
    type: 'referenced';
    id: string;
    version: string;
}
export interface IStepInlineFlowModelProps extends IStepFlowModelPropBase {
    type: 'inline';
    inline: IFlowModel;
}
export interface IStepProps {
    forms: Array<IForm>;
    actions: Array<IAction>;
}
export interface IForm {
    id: string;
    roles: Array<string>;
    disabled?: boolean;
}
export interface IWorkflowConnection {
    label?: string;
    id: number;
    f: number;
    f_o: number;
    t: number;
    t_i: number;
}
//# sourceMappingURL=IWorkflow.d.ts.map
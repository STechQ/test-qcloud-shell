import { IStepDesignModel } from "@stechquick/flow-interfaces/editor/IStepDesignModel";
import { IModelForWorkflow } from "../../../qCloudTemp/quickCloud";
import { ILegacyWorkflowModelForCamunda, IWFStepModel, IWorkflowModel } from "../runtimemodels/IWorkflow";
export declare class WorkflowModelHelper {
    static createWFStepId(stepName: string): string;
    static parseWorkflowModelBody(model: IModelForWorkflow): ILegacyWorkflowModelForCamunda | IWorkflowModel;
    static migrateLegacyStep(step: IWFStepModel): void;
    static migrateLegacyDesignStep(step: IStepDesignModel): void;
    static parseWorkflowModelBodyWFE(model: IModelForWorkflow, env?: "notification" | "conversion", showError?: (error: string) => void): IWorkflowModel;
    static deParseWorkflowModelBodyWFE(model: IWorkflowModel | ILegacyWorkflowModelForCamunda): ILegacyWorkflowModelForCamunda;
}
//# sourceMappingURL=workflowModelHelper.d.ts.map
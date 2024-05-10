import { IWorkflow } from "../../../../common/runtime/interfaces/objects/IWorkflow";
import { IFlowModel } from "../runtime/IFlowModel";
import { IFlowDesignModel } from "./IFlowDesignModel";
export interface IFlowEditorModel {
    runtime: IFlowModel | IWorkflow;
    design: IFlowDesignModel;
}
//# sourceMappingURL=IFlowEditorModel.d.ts.map
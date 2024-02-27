import { IModelBase } from "./IModel";
import { IStepModel, IStepTo } from "./IStepModel";
export interface IFlowModel extends IModelBase {
    type: "flow";
    startSteps: Array<IStepTo>;
    steps: Record<string, IStepModel>;
}
//# sourceMappingURL=IFlowModel.d.ts.map
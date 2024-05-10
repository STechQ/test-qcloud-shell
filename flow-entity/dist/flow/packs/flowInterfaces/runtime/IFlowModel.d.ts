import { IModelBase } from "./IModel";
import { IStepModel, IStepTo, ISwimlaneModel } from "./IStepModel";
import { IStore } from "../../../../common/runtime/interfaces/store/IStore";
export interface IFlowModel extends IModelBase {
    type: "flow";
    steps: Record<string, IStepModel>;
    startSteps: Array<IStepTo>;
    store: IStore;
    swimlanes?: Record<string, ISwimlaneModel>;
}
//# sourceMappingURL=IFlowModel.d.ts.map
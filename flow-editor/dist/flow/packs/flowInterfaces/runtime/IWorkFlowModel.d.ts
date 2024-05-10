import { ILink } from "./ILink";
import { IModelBase } from "./IModel";
import { INodeModel, IStepTo } from "./IStepModel";
import { IStore } from "../../../../common/runtime/interfaces/store/IStore";
export interface IWorkFlowModel extends IModelBase {
    name: string;
    type: "workflow";
    startSteps: Array<IStepTo>;
    steps: Record<string, INodeModel>;
    links: Array<ILink>;
    store: IStore;
}
//# sourceMappingURL=IWorkFlowModel.d.ts.map
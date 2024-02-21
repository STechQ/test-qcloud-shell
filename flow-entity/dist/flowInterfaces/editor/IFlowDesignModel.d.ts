import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
import { IObjectEntry } from "./IStepOptions";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
}
export interface IFlowCopyModel {
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
    inputs: Array<IObjectEntry>;
    outputs: Array<IObjectEntry>;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map
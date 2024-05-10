import { IVariable } from "../../../../common/runtime/interfaces/objects/IVariable";
import { IExpressionData } from "../runtime";
import { IConnectionDesignModel } from "./IConnectionDesignModel";
import { IStepDesignModel } from "./IStepDesignModel";
import { ISwimlaneDesignModel } from "./ISwimlaneDesignModel";
export interface IFlowDesignModel extends IFlowCopyModel {
    maxID: number;
}
export interface IFlowCopyModel {
    steps: Array<IStepDesignModel>;
    connections: Array<IConnectionDesignModel>;
    inputs: Record<string, IVariable>;
    outputs: Record<string, IVariable>;
    swimlanes?: Record<string, ISwimlaneDesignModel>;
    roles?: Array<IExpressionData>;
}
//# sourceMappingURL=IFlowDesignModel.d.ts.map
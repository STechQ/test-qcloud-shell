import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { IObjectModel } from "../../object/runtimemodels/IObjectModel";
import { IFlowModel } from "@stechquick/flow-interfaces/runtime/IFlowModel";
import { IRestServiceModel } from "../../restService/runtimeModels/IRestServiceModel";
import { IWorkflowModel } from "./IWorkflow";
import { IEnvironmentModel } from "../../object/runtimemodels/IEnvironmentModel";
export type IModelBaseFields = {
    id: string;
};
export type IWFModels = IObjectModel | IEnumModel | IRestServiceModel | IFlowModel | IWorkflowModel | IEnvironmentModel;
//# sourceMappingURL=IModel.d.ts.map
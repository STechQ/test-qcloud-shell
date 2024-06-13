import { WorkflowModelType } from "../../workflow/runtimemodels/types";
import { FlowModelType } from "../../flow/runtimeModels/types";
import { RestServiceModelType } from "../../restService/runtimeModels/types";
import { SoapServiceModelType } from "../../soapService/runtimeModels/types";
import { EnumModelType } from "../../enum/runtimeModels/types";
import { ObjectModelType } from "../../object/runtimemodels/types";
import { IStudioUIObjectBase } from "./IStudioUIObjectBase";
export type ContentType = "qjson" | "js" | "ts" | "yaml" | "css" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "lottie" | "woff" | "woff2" | "ttf" | "otf" | "json";
export type ModelType = ContentType | "bpmn" | "process" | "entityDesigner" | "namedComponent" | FlowModelType | WorkflowModelType | RestServiceModelType | SoapServiceModelType | "step" | /*"flowEntity" //FLOW ENTITY IS GOING BYE BYE (perhaps 🤔) |*/ "appSettings" | ObjectModelType | EnumModelType;
export interface IStudioUIModelBase extends IStudioUIObjectBase {
    modelType: ModelType;
    path: string;
}
//# sourceMappingURL=IStudioUIModelBase.d.ts.map
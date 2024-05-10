import { IFlow } from "./objects/IFlow";
import { IObject } from "./objects/IObject";
import { IEnum } from "./objects/IEnum";
import { IRestService } from "./objects/IRestService";
import { IWorkflow } from "./objects/IWorkflow";
import { IEnvironmentModel } from "./objects/IEnvironmentModel";
export interface IModelBase {
    id: string;
    version: string;
    type: "object" | "enum" | "flow" | "workflow" | "restService" | "envParam";
}
export type ModelType = IObject | IEnum | IRestService | IFlow | IWorkflow | IEnvironmentModel;
//# sourceMappingURL=IModel.d.ts.map
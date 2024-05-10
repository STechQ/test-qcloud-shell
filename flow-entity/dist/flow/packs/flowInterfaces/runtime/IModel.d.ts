import { IRestService } from "../../../../common/runtime/interfaces/objects/IRestService";
import { IEntity } from "./IEntity";
import { IFlowModel } from "./IFlowModel";
export interface IModelBase {
    type: 'entity' | 'restService' | 'flow' | 'workflow';
}
export type IModel = IEntity | IRestService | IFlowModel;
//# sourceMappingURL=IModel.d.ts.map
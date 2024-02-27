import { IEntity } from "./IEntity";
import { IFlowModel } from "./IFlowModel";
import { IRestService } from "./IRestService";
export interface IModelBase {
    type: 'entity' | 'restService' | 'flow';
}
export type IModel = IEntity | IRestService | IFlowModel;
//# sourceMappingURL=IModel.d.ts.map
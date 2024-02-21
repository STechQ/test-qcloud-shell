import { IEntity } from "./IEntity";
import { IFlowModel } from "./IFlowModel";
import { IRestService } from "./IRestService";
import { ISwitchModel } from "./ISwitch";
export interface IModelBase {
    type: 'entity' | 'restService' | 'flow' | 'switch';
}
export type IModel = IEntity | IRestService | IFlowModel | ISwitchModel;
//# sourceMappingURL=IModel.d.ts.map
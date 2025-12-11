import { Store } from "../../../common/everything/store/designtimemodels/IStoreModel";
import { IStudioUIModelBase } from "../../../common/everything/studio/ui/IStudioUIModelBase";
type findObjectCBType = (objectId: string) => Promise<any>;
export declare const generateFlowIntellisense: (store: Store, models: {
    dataTypeModels?: Array<IStudioUIModelBase>;
    dataSetModels?: Array<IStudioUIModelBase>;
}, findObjectCB: findObjectCBType) => Promise<string>;
export {};
//# sourceMappingURL=intelliSenseHelper.d.ts.map
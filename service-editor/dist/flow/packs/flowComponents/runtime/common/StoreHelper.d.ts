import { IEnvironment } from '@stechquick/flow-interfaces/runtime/IEnvironment.js';
import { IStoreInParameterMapping, IStoreOutParameterMapping } from '../../../../../common/everything/store/runtimemodels/IStoreMapping.js';
import { Store } from '../../../../../common/everything/store/runtimemodels/IStoreModel.js';
import { RuntimeMessage } from '@stechquick/flow-interfaces/runtime/StepRuntime.js';
import { IFlowLogger } from '../../../../../flow/packs/flowInterfaces/runtime/IFlowLogger.js';
interface IMapMsgOptions {
    innerMsg: RuntimeMessage;
    store: Store;
    outerMsg: RuntimeMessage;
    inParamMapping: Array<IStoreInParameterMapping>;
    environment: IEnvironment;
}
export declare class StoreHelper {
    static mapInnerMsg({ environment, innerMsg, inParamMapping, outerMsg, store }: IMapMsgOptions, logger: IFlowLogger): Promise<void>;
    static mapInput(input: Store['input'], inParamMapping: Array<IStoreInParameterMapping>, outerMsg: RuntimeMessage, environment: IEnvironment): Record<string, any>;
    private static initItems;
    static mapOutput(output: any, mapping: Array<IStoreOutParameterMapping>, outerStoreIns: RuntimeMessage, environment: IEnvironment): void;
    static createEmptyMsg(): RuntimeMessage;
}
export {};
//# sourceMappingURL=StoreHelper.d.ts.map
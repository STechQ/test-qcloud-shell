import { IEnvironment, IExpressionData, RuntimeMessage } from "@stechquick/flow-interfaces/runtime";
import { IFlowLogger } from "@stechquick/flow-interfaces/runtime/IFlowLogger";
import { IStoreInParameterMapping, IStoreMapping, IStoreOutParameterMapping } from "../../store/runtimemodels/IStoreMapping";
import { Store } from "../../store/runtimemodels/IStoreModel";
interface IMapMsgOptions {
    innerMsg: RuntimeMessage;
    store: Store;
    outerMsg: RuntimeMessage;
    inParamMapping: Array<IStoreInParameterMapping>;
    environment: IEnvironment;
}
export declare class StoreHelper {
    static mapInnerMsg({ environment, innerMsg, inParamMapping, outerMsg, store }: IMapMsgOptions, logger?: IFlowLogger): Promise<void>;
    static mapInput(input: Store['input'], inParamMapping: Array<IStoreInParameterMapping>, outerMsg: RuntimeMessage, environment: IEnvironment): Record<string, any>;
    private static initItems;
    static mapOutput(output: any, mapping: Array<IStoreOutParameterMapping>, outerStoreIns: RuntimeMessage, environment: IEnvironment): void;
    static createEmptyMsg(): RuntimeMessage;
    static createInputExecuteMapping(inputs: Record<string, IExpressionData>): IStoreMapping["inParamMapping"];
}
export {};
//# sourceMappingURL=StoreHelper.d.ts.map
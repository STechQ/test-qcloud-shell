import { ModelRetriever } from "./ModelRetriever";
import { ExpressionGetter, ExpressionSetter, IExpressionData, ISetExpressionData } from "./IExpression";
import { IPropObject } from "./IStepModel";
import { IPlatformClientAdaptor } from "./platform/IPlatformClientAdaptor";
import { IPlatformServerAdaptor } from "./platform/IPlatformServerAdaptor";
import { Omit2 } from "./platform/tsHelperTypes";
import { IPlatformWorkflowAdaptor } from "./platform/IPlatformWorkflowAdaptor";
export type RuntimeMessage = {
    input: any;
    vars: any;
    output?: any;
};
export type StateValues = Record<string, any>;
export interface ICommonState<T> {
    set(key: string, value: T, secret: string): void;
    get(key: string, secret: string): T | undefined;
}
export interface IStateBaseType {
    destruct: () => void;
}
export interface IServerAdaptor extends Omit2<IPlatformServerAdaptor, "getEnvVar"> {
    getEnvVar(key: string): string | undefined;
}
export interface IRuntimeParam<PropType = IPropObject, OutputOptions = string, StateType = StateValues> {
    entryInfo: {
        /**
         * step input name
         */
        inputName: string;
        /**
         * connection count of the entry
         */
        connectionCount: number;
        /**
         * index of connection
         */
        connectionIndex: number;
    };
    props: PropType;
    msg: RuntimeMessage;
    flow: {
        next: (output?: OutputOptions) => void;
        stop: () => void;
        evalGet: (expression: IExpressionData, getter: ExpressionGetter) => ReturnType<ExpressionGetter>;
        evalSet: (expression: ISetExpressionData, value: any, setter: ExpressionSetter) => void;
        getServer: () => IServerAdaptor | undefined;
        getClient: () => IPlatformClientAdaptor | undefined;
        getWorkflow: () => IPlatformWorkflowAdaptor | undefined;
        getCommonState: <CommonStateType extends IStateBaseType = IStateBaseType>() => ICommonState<CommonStateType>;
    };
    state: {
        readonly values: StateType;
        clear: () => void;
    };
    model: {
        retriever: ModelRetriever;
    };
}
export type StepRuntime<PropType = IPropObject, OutputOptions = string, StateType = StateValues> = (param: IRuntimeParam<PropType, OutputOptions, StateType>) => void;
//# sourceMappingURL=StepRuntime.d.ts.map
import { ExpressionGetter, ExpressionSetter, IExpressionData, ISetExpressionData } from "./IExpression";
import { IPlatformServerAdaptor } from "./IPlatformServerAdaptor";
import { IPropObject } from "./IStepModel";
export declare type RuntimeMessage = Record<string, any>;
export declare type StateValues = Record<string, any>;
export interface ICommonState<T> {
    set(key: string, value: T, secret: string): void;
    get(key: string, secret: string): T | undefined;
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
        evalGet: (expression: IExpressionData, getter: ExpressionGetter) => any;
        evalSet: (expression: ISetExpressionData, value: any, setter: ExpressionSetter) => any;
        getServer: () => IPlatformServerAdaptor | undefined;
        getCommonState: <CommonStateType = any>() => ICommonState<CommonStateType>;
    };
    state: {
        readonly values: StateType;
        clear: () => void;
    };
}
export declare type StepRuntime<PropType = IPropObject, OutputOptions = string, StateType = StateValues> = (param: IRuntimeParam<PropType, OutputOptions, StateType>) => void;
//# sourceMappingURL=StepRuntime.d.ts.map
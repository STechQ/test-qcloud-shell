import { IExpressionData, IPropObject } from "./IStepModel";
export declare type RuntimeMessage = Record<string, any>;
export declare type StateValues = Record<string, any>;
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
        eval: (expression: IExpressionData) => any;
    };
    state: {
        readonly values: StateType;
        clear: () => void;
    };
}
export declare type StepRuntime<PropType = IPropObject, OutputOptions = string, StateType = StateValues> = (param: IRuntimeParam<PropType, OutputOptions, StateType>) => void;
//# sourceMappingURL=StepRuntime.d.ts.map
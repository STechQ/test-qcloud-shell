import { IEnvironment } from "../../../flowInterfaces/runtime/IEnvironment";
import { IFlowModelBase } from "../../../flowInterfaces/runtime/IFlowModel";
import { IModel } from "../../../flowInterfaces/runtime/IModel";
import { ModelRetriever } from "../../../flowInterfaces/runtime/ModelRetriever";
import { ICommonState, IServerAdaptor, IStateBaseType, RuntimeMessage } from "../../../flowInterfaces/runtime/StepRuntime";
import { IPlatformClientAdaptor } from "../../../flowInterfaces/runtime/platform/IPlatformClientAdaptor";
import { IPlatformWFFAdaptor } from "../../../flowInterfaces/runtime/platform/IPlatformWorkflowAdaptor";
import { StepRetriever } from "../../../flowInterfaces/runtime/stepRetriever";
import { IRuntimeConstructor, Runtime } from "../runtimes/runtime";
import { CommonState } from "./commonState";
import { ReturnValue } from "./returnValue";
import { StepRepo } from "./stepRepo";
import { StepStates } from "./stepStates";
import { IFlowExecutionResult } from "../flow";
import { IFlowLogger } from "@stechquick/flow-interfaces/runtime/IFlowLogger";
import { IPlatformWFEAdaptor } from "@stechquick/flow-interfaces/runtime/platform/IPlatformWFEAdaptor";
import { IFlowEvents } from "@stechquick/flow-interfaces/runtime/IFlowEvents";
import { IStepStates } from "../../../../../common/everything/flow/runtimeObjects/IStepStates";
export declare class RuntimeContext {
    readonly flow: IFlowModelBase;
    readonly msg: RuntimeMessage;
    readonly runtimeCtor: IRuntimeConstructor;
    private readonly _onEnd;
    private readonly _onFail;
    private readonly origStepRetriever;
    private readonly modelRetriever;
    readonly environment: IEnvironment;
    readonly logger: IFlowLogger["log"];
    readonly isKnownError: (error: Error, detail: string) => boolean;
    private static stepRepo?;
    private static modelRepo;
    readonly returnValue: ReturnValue;
    readonly stepStates: StepStates;
    readonly commonState: CommonState<IStateBaseType>;
    private readonly stepRetriever;
    readonly runtime: Runtime;
    readonly events?: IFlowEvents;
    private readonly stepRepo;
    constructor(flow: IFlowModelBase, msg: RuntimeMessage, runtimeCtor: IRuntimeConstructor, stepRepo: StepRepo | undefined, _onEnd: (returnValue: IFlowExecutionResult) => void, _onFail: (err: Error) => void, origStepRetriever: StepRetriever, modelRetriever: ModelRetriever, environment: IEnvironment, logger: IFlowLogger["log"], isKnownError: (error: Error, detail: string) => boolean, events?: IFlowEvents, stepStates?: IStepStates);
    getStepFromRepo(stepName: string, version: string): Promise<import("../../../flowInterfaces/runtime/StepRuntime").StepRuntime<import("@stechquick/flow-interfaces/runtime").IPropObject, string, import("../../../flowInterfaces/runtime/StepRuntime").StateValues>>;
    getModelFromRepo(entityPath: string): Promise<IModel>;
    private startGatherStepRuntimes;
    createClient(): IPlatformClientAdaptor | undefined;
    createServer(stepName: string): IServerAdaptor | undefined;
    createWorkflow(): IPlatformWFFAdaptor | undefined;
    createWFE(): IPlatformWFEAdaptor | undefined;
    createCommonState<T extends IStateBaseType>(): ICommonState<T>;
    onEnd(returnValue: IFlowExecutionResult): void;
    onFail(err: Error): void;
}
//# sourceMappingURL=runtimeContext.d.ts.map
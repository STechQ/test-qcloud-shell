import { IWorkflowContext } from "../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
import { IWorkflowConstants } from "../../../../common/everything/workflow/runtimeObjects/IWorkflowConstants";
import { IEnvironment } from "@stechquick/flow-interfaces/runtime/IEnvironment";
import { IWorkflowMethods } from "./workflowCodeStepContext";
type FlowObjectContext = ({
    type: "workflow";
} & IWorkflowContext & IWorkflowConstants & IWorkflowMethods) | {
    type: "client";
} | {
    type: "server";
} | ({
    type: "workflowEngine";
} & IWorkflowContext);
declare function createFlowContext(environment: IEnvironment): FlowObjectContext;
export { createFlowContext, FlowObjectContext };
//# sourceMappingURL=contextCreator.d.ts.map
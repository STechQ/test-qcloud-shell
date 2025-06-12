import { IUser } from "./namedobjects/IUser";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { DataInstance } from "./DataInstance.js";
import { IActionData } from "./IAction";
export interface IWorkflowContext {
    currentUser?: IUser;
    dataInstance?: DataInstance;
    processInstance?: IProcessInstance;
    action?: IActionData;
}
//# sourceMappingURL=IWorkflowContext.d.ts.map
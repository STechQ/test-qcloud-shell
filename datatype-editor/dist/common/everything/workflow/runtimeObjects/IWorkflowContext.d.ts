import { IUser } from "./namedobjects/IUser";
import { IProcessInstance } from "./namedobjects/IProcessInstance";
import { IEnumModel } from "../../enum/runtimeModels/IEnumModel";
import { DataInstance } from "./DataInstance.js";
export interface IWorkflowContext {
    currentUser?: IUser;
    enums?: Array<IEnumModel>;
    dataInstance?: DataInstance;
    processInstance?: IProcessInstance;
}
//# sourceMappingURL=IWorkflowContext.d.ts.map
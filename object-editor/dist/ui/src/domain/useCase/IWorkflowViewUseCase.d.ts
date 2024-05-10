import { IUser } from "../../../../common/runtime/interfaces/namedobjects/IUser";
import { IModel } from "../model/models";
export interface IProcess {
    informList: Array<any>;
    processInstance: IProcessInstance;
    task: ITask;
}
export interface IProcessInstance {
    processId: string;
    processInstanceId: string;
    businessKey: string;
    processStart: string;
    SLADue: string;
}
export interface ITask {
    taskId: string;
    taskDefinitionKey: string;
    taskName: string;
    taskGroupId: string;
    user?: string;
    unit?: string;
    swimlane?: string;
    taskStart: string;
    taskEnd?: string;
    SLADue?: string;
    priority: number;
}
export interface IWorkflowViewUseCase {
    startWorkflowView?(element: HTMLElement, isUserChange: boolean): void;
    listUsers(): Promise<Array<IUser>>;
    listUserRoles(): Array<string>;
    listSwimlanes(): Array<string>;
    insertUser(userInfo: IUser): Promise<void>;
    setUser(user: IUser): void;
    getUser(): IUser | undefined;
    listProcess(): Promise<Array<IProcess>>;
    processListForStartNewProcess(): Array<IModel>;
    setProcessToViewModel(process: IProcess | string): Promise<void>;
    setIsNewProcess(value: boolean): void;
}
export declare const IWorkflowViewUseCase: unique symbol;
//# sourceMappingURL=IWorkflowViewUseCase.d.ts.map
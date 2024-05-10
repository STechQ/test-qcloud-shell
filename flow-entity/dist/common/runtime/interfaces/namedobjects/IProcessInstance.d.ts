import { DateTime } from "../common";
import { IFile } from "./IFile";
import { INamedObjectBase } from "./INamedObjectBase";
import { ISLA } from "./ISLA";
import { IUnit } from "./IUnit";
import { IUser } from "./IUser";
export interface IProcessInstance extends INamedObjectBase {
    processInstanceId: string;
    processId: string;
    version: string;
    clusterId: string;
    businessKey: string;
    initiatorUser: IUser;
    initiatorUnit: IUnit;
    currentUnit: IUnit;
    processStart: DateTime;
    processEnd: DateTime;
    sla: ISLA;
    priority: number;
    lastUpdate: DateTime;
    lastUpdateUser: IUser;
    lastUpdateDescription?: string;
    contributorUsers: Array<IUser>;
    followerUsers: Array<IUser>;
    files?: Array<IFile>;
}
//# sourceMappingURL=IProcessInstance.d.ts.map
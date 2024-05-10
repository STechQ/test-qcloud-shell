import { INamedObjectBase } from "./INamedObjectBase";
import { IUnit } from "./IUnit";
export interface IUser extends INamedObjectBase {
    id: string;
    name: string;
    unit: IUnit;
    roles: Array<string>;
    email?: string;
    swimlane?: Swimlane;
}
export type Swimlane = Array<string>;
//# sourceMappingURL=IUser.d.ts.map
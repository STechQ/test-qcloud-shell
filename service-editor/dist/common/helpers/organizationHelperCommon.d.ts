import { IOrganization } from "../qCloudTemp/membership";
import { IOrganizationOptions } from "../clean/domain/useCases/ICloudProvider";
interface ICreateOrganizationOptions {
    id: IOrganization["id"];
    name: IOrganization["name"];
    cloud?: IOrganization["cloud"];
}
export declare class OrganizationHelperCommon {
    static createOrganizationOptions(organization: ICreateOrganizationOptions): IOrganizationOptions;
}
export {};
//# sourceMappingURL=organizationHelperCommon.d.ts.map
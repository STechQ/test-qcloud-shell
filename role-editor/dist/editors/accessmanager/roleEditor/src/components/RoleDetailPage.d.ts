import { IRoleItem, IRoleWithRef } from "../../../../../common/everything/accessmanager/designtime/IRoleDesign";
import { IStudioUIModelBase } from "../../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IPrivilege } from "../IRoleEditorProgram";
interface IRoleDetailPageProps {
    role: IRoleItem | null;
    nameLocked: boolean;
    allRoles: Array<IRoleItem>;
    resourceModels: Array<IStudioUIModelBase>;
    privileges: Array<IPrivilege>;
    allExternalRoles: Array<IRoleWithRef>;
    externalRoleIds: string[];
    readOnly: boolean;
    onSave: (role: IRoleItem) => void;
    onCancel: () => void;
}
export default function RoleDetailPage(props: IRoleDetailPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RoleDetailPage.d.ts.map
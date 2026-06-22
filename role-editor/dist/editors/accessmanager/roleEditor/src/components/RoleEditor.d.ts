import { IRoleDesign, IRoleWithRef } from "../../../../../common/everything/accessmanager/designtime/IRoleDesign";
import { IPrivilege } from "../IRoleEditorProgram";
import { IStudioUIModelBase } from "../../../../../common/everything/studio/ui/IStudioUIModelBase";
export type IRoleEditorData = IRoleDesign;
interface IRoleEditorProps {
    data: IRoleEditorData;
    readonly models: Array<IStudioUIModelBase>;
    privileges: Array<IPrivilege>;
    allExternalRoles: Array<IRoleWithRef>;
    externalRoleIds: string[];
    readOnly: boolean;
    updateModel: (model: IRoleDesign) => void;
}
export default function RoleEditor(props: IRoleEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RoleEditor.d.ts.map
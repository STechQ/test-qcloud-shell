import { IRoleItem, IRoleWithRef } from "../../../../../common/everything/accessmanager/designtime/IRoleDesign";
import { IStudioUIModelBase } from "../../../../../common/everything/studio/ui/IStudioUIModelBase";
interface IRoleEditorProps {
    roles: Array<IRoleItem>;
    resourceModels: Array<IStudioUIModelBase>;
    allExternalRoles: Array<IRoleWithRef>;
    readOnly: boolean;
    updateModel: (model: Array<IRoleItem>) => void;
    onEditRole: (role: IRoleItem | null) => void;
}
export default function RolePage({ roles, resourceModels, allExternalRoles, readOnly, updateModel, onEditRole }: IRoleEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RolePage.d.ts.map
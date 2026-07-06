import { IPrivilegeDesign } from "../../../../../common/everything/accessmanager/designtime/IPrivilegeDesign";
export type IPrivilegeEditorData = IPrivilegeDesign;
interface IPrivilegeEditorProps {
    data: IPrivilegeEditorData;
    externalIds: string[];
    readOnly: boolean;
    updateModel: (model: IPrivilegeDesign) => void;
}
export default function PrivilegeEditor(props: IPrivilegeEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PrivilegeEditor.d.ts.map
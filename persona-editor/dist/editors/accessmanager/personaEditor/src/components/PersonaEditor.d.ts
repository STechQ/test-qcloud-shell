import { IPersonaDesign } from "../../../../../common/everything/accessmanager/designtime/IPersonaDesign";
import { IStudioUIModelBase } from "../../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IPersonaEditorInitOptions } from "../IPersonaEditorProgram";
interface IPersonaEditorProps {
    data: IPersonaDesign;
    readonly models: Array<IStudioUIModelBase>;
    readOnly: boolean;
    externalPersonaIds: string[];
    updateModel: (model: IPersonaDesign) => void;
    getModelBody: IPersonaEditorInitOptions['getModelBody'];
}
export default function PersonaEditor(props: IPersonaEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PersonaEditor.d.ts.map
import { ISLAModel } from "../../../common/everything/sla/runtimemodels/ISLAModel";
import { ISlaEditorData } from "../ISlaEditorProgram";
interface ISlaLevelProps {
    readOnly: boolean;
    description: string;
    data: ISlaEditorData;
    updateModel: (model: ISLAModel) => void;
    openModelInNewTab: (modelID: string) => void;
}
export declare const SlaEditor: ({ readOnly, data, updateModel, openModelInNewTab }: ISlaLevelProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SlaEditor.d.ts.map
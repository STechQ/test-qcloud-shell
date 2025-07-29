import { ISLAModel } from "../../../common/everything/sla/runtimemodels/ISLAModel";
import { ISlaEditorData } from "../ISlaEditorProgram";
interface ISlaLevelProps {
    readOnly: boolean;
    description: string;
    data: ISlaEditorData;
    updateModel: (model: ISLAModel) => void;
}
export declare const SlaEditor: ({ readOnly, data, updateModel }: ISlaLevelProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SlaEditor.d.ts.map
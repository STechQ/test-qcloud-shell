import { IObjectEditorData, IObjectEditorInitOptions } from "../../IObjectEditorProgram";
import { IObjectModel } from "../../../../common/everything/object/runtimemodels/IObjectModel";
interface Prop {
    options: IObjectEditorInitOptions;
    data: IObjectEditorData;
    updateMainModel: (model: IObjectModel) => void;
}
declare const ObjectEditorView: (props: Prop) => import("react/jsx-runtime").JSX.Element;
export default ObjectEditorView;
//# sourceMappingURL=ObjectEditor.d.ts.map
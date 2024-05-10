import { IObject } from "../../../../common/runtime/interfaces/objects/IObject.js";
import { IObjectEditorInitOptions, IObjectInfoItem } from "../../IObjectEditorProgram";
interface Prop {
    options: IObjectEditorInitOptions;
    studioObjects: Array<IObjectInfoItem>;
    mainModel: IObject;
    updateMainModel: (model: IObject) => void;
}
declare const ObjectEditorView: (props: Prop) => import("react/jsx-runtime").JSX.Element;
export default ObjectEditorView;
//# sourceMappingURL=ObjectEditor.d.ts.map
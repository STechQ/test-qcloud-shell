import { IDataTypeEditorData, IDataTypeEditorInitOptions } from "../../IDataTypeEditorProgram";
import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
interface Prop {
    options: IDataTypeEditorInitOptions;
    data: IDataTypeEditorData;
    readOnly: boolean;
    updateMainModel: (model: IDataTypeModel) => void;
}
declare const DataTypeEditorView: (props: Prop) => import("react/jsx-runtime").JSX.Element;
export default DataTypeEditorView;
//# sourceMappingURL=DataTypeEditor.d.ts.map
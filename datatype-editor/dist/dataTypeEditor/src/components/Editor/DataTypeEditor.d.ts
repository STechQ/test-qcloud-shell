import { IDataTypeEditorData, IDataTypeEditorInitOptions } from "../../IDataTypeEditorProgram";
import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
interface Prop {
    options: IDataTypeEditorInitOptions;
    data: IDataTypeEditorData;
    readOnly: boolean;
    selectedTab: string;
    setSelectedTab: (tabName: string) => void;
    updateMainModel: (model: IDataTypeModel) => void;
    selectedQueryIndex: (index: number) => void;
}
declare const DataTypeEditorView: (props: Prop) => import("react/jsx-runtime").JSX.Element;
export default DataTypeEditorView;
//# sourceMappingURL=DataTypeEditor.d.ts.map
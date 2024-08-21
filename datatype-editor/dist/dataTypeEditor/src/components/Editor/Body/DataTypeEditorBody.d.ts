import { IDataTypeEditorData, IDataTypeEditorInitOptions } from "../../../IDataTypeEditorProgram";
import { IDataTypeModel } from "../../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
type Props = {
    options: IDataTypeEditorInitOptions;
    data: IDataTypeEditorData;
    readOnly: boolean;
    setModel: (model: IDataTypeModel) => void;
};
declare const DataTypeEditorBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default DataTypeEditorBody;
//# sourceMappingURL=DataTypeEditorBody.d.ts.map
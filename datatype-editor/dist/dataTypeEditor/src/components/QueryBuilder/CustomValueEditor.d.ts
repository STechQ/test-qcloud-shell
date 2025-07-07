import React from "react";
import { ValueEditorProps } from "react-querybuilder";
import { IQuery } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
interface ICustomValueEditor extends ValueEditorProps {
    readOnly: boolean;
    studioObjects: Array<IDataTypeInfoItem>;
    model: IQuery;
}
declare const CustomValueEditor: React.FC<ICustomValueEditor>;
export default CustomValueEditor;
//# sourceMappingURL=CustomValueEditor.d.ts.map
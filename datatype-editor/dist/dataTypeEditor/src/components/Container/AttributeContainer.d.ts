import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
type Props = {
    model: IDataTypeModel;
    studioObjects: Array<IDataTypeInfoItem>;
    readOnly: boolean;
    setModel: (model: IDataTypeModel) => void;
};
export declare const AttributeContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AttributeContainer.d.ts.map
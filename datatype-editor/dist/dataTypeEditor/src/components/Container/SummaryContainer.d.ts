import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
type Props = {
    model: IDataTypeModel;
    studioObjects: Array<IDataTypeInfoItem>;
    readOnly: boolean;
    setModel: (model: IDataTypeModel) => void;
};
export declare const SummaryContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SummaryContainer.d.ts.map
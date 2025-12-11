import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataSetInfoItem, IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
type Props = {
    model: IDataTypeModel;
    studioObjects: {
        dataTypeModels: Array<IDataTypeInfoItem>;
        dataSetModels: Array<IDataSetInfoItem>;
    };
    readOnly: boolean;
    setModel: (model: IDataTypeModel) => void;
    openModelInNewTab: (modelID: string) => void;
};
export declare const AttributeContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AttributeContainer.d.ts.map
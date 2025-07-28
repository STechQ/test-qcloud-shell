import { IDataTypeModel } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeEditorInitOptions, IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
type Props = {
    model: IDataTypeModel;
    setModel: (model: IDataTypeModel) => void;
    readOnly: boolean;
    options: IDataTypeEditorInitOptions;
    studioObjects: Array<IDataTypeInfoItem>;
    selectedQueryIndex: (index: number) => void;
};
export declare const EntityContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EntityContainer.d.ts.map
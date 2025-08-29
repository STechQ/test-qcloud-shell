import { Field } from "react-querybuilder";
import { IQuery } from "../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeInfoItem } from "../../IDataTypeEditorProgram";
type Props = {
    model: IQuery;
    studioObjects: Array<IDataTypeInfoItem>;
    readOnly: boolean;
    setModel: (model: IQuery) => void;
    filterOptions: Field[];
    goBack: () => void;
    name: string;
};
export declare const QueryContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=QueryContainer.d.ts.map
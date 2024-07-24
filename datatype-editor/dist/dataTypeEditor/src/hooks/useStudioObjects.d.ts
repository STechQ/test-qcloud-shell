import { IOption } from "@stechquick/components/comps/Select";
import { IDataTypeModel } from "../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IDataTypeInfoItem } from "../IDataTypeEditorProgram";
type Props = {
    model: IDataTypeModel;
    studioObjects: Array<IDataTypeInfoItem>;
};
export declare const useStudioObjects: (props: Props) => {
    attributeObjects: IOption[] | undefined;
};
export {};
//# sourceMappingURL=useStudioObjects.d.ts.map
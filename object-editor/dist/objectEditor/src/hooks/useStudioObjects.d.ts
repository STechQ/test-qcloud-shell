import { IOption } from "@stechquick/components";
import { IObjectModel } from "../../../common/everything/object/runtimemodels/IObjectModel";
import { IObjectInfoItem } from "../IObjectEditorProgram";
type Props = {
    model: IObjectModel;
    studioObjects: Array<IObjectInfoItem>;
};
export declare const useStudioObjects: (props: Props) => {
    attributeObjects: IOption[] | undefined;
};
export {};
//# sourceMappingURL=useStudioObjects.d.ts.map
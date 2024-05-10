import { IObject } from "../../../../../common/runtime/interfaces/objects/IObject";
import { IObjectEditorInitOptions, IObjectInfoItem } from "../../../IObjectEditorProgram";
type Props = {
    model: IObject;
    options: IObjectEditorInitOptions;
    studioObjects: Array<IObjectInfoItem>;
    setModel: (model: IObject) => void;
};
declare const ObjectEditorBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default ObjectEditorBody;
//# sourceMappingURL=ObjectEditorBody.d.ts.map
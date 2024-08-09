import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
import { IServiceEditorData, IServiceEditorInitOptions } from "../../IServiceEditorProgram";
type Props = {
    updateMainModel: (model: IRestServiceDesign) => void;
    data: IServiceEditorData;
    readOnly: boolean;
    options: IServiceEditorInitOptions;
};
declare const RestServiceEditor: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default RestServiceEditor;
//# sourceMappingURL=RestServiceEditor.d.ts.map
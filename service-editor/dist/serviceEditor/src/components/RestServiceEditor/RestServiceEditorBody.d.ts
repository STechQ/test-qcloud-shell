import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
import { IServiceEditorData } from "../../IServiceEditorProgram";
type Props = {
    mainModel: IRestServiceDesign;
    constantInfo: IServiceEditorData['constantInfo'];
    dataTypes: IServiceEditorData["dataTypes"];
    readOnly: boolean;
    updateModel: (model: IRestServiceDesign) => void;
    openModelInNewTab?: (modelID: string) => void;
};
export type TabNames = "Request" | "Response" | "Mock Response";
export declare const RestServiceEditorBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RestServiceEditorBody.d.ts.map
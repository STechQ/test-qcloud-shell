import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
import { IServiceEditorData } from "../../IServiceEditorProgram";
type Props = {
    mainModel: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    updateModel: (model: IRestServiceDesign) => void;
    dataTypes: IServiceEditorData["dataTypes"];
};
export type TabNames = "Request" | "Response" | "Mock";
export declare const RestServiceEditorBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RestServiceEditorBody.d.ts.map
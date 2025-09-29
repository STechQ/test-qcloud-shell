import { ISoapServiceEditorV2Data } from "../../ISoapServiceEditorV2Program";
import { ISoapServiceV2Design } from "../../../../common/everything/soapService/designtimeModels/ISoapServiceV2";
type Props = {
    mainModel: ISoapServiceV2Design;
    constantInfo: ISoapServiceEditorV2Data['constantInfo'];
    dataTypes: ISoapServiceEditorV2Data["dataTypes"];
    readOnly: boolean;
    updateModel: (model: ISoapServiceV2Design) => void;
    openModelInNewTab: (modelID: string) => void;
};
export type TabNames = "Request" | "Response" | "Mock Response";
export declare const SoapServiceEditorV2Body: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SoapServiceEditorV2Body.d.ts.map
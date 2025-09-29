import { ISoapServiceEditorV2Data, ISoapServiceEditorV2InitOptions } from "../../ISoapServiceEditorV2Program";
import { ISoapServiceV2Design } from "../../../../common/everything/soapService/designtimeModels/ISoapServiceV2";
type Props = {
    data: ISoapServiceEditorV2Data;
    readOnly: boolean;
    options: ISoapServiceEditorV2InitOptions;
    updateMainModel: (model: ISoapServiceV2Design) => void;
    openModelInNewTab: (modelID: string) => void;
};
declare const SoapServiceEditor: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default SoapServiceEditor;
//# sourceMappingURL=SoapServiceEditorV2.d.ts.map
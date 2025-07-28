import { ISoapServiceV2Design } from "../../../../common/everything/soapService/designtimeModels/ISoapServiceV2";
import { ISoapServiceEditorV2Data } from "../../ISoapServiceEditorV2Program";
type Props = {
    mainModel: ISoapServiceV2Design;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    dataTypes: ISoapServiceEditorV2Data["dataTypes"];
    readOnly: boolean;
    updateModel: (model: ISoapServiceV2Design) => void;
};
export declare const RequestContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RequestContainer.d.ts.map
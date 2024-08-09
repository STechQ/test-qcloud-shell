import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
import { IServiceEditorData } from "../../IServiceEditorProgram";
type Props = {
    model: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    dataTypes: IServiceEditorData["dataTypes"];
    readOnly: boolean;
    updateModel: (model: IRestServiceDesign) => void;
};
export declare const RestServiceDefinition: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RestServiceDefinition.d.ts.map
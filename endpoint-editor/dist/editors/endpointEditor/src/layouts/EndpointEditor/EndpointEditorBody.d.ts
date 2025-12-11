import { IEndpointDesign } from "../../../../../common/everything/endpoint/designtimeModels/IEndpoint";
import { IEndpointEditorData } from "../../IEndpointEditorProgram";
type Props = {
    mainModel: IEndpointDesign;
    updateModel: (model: IEndpointDesign) => void;
    readOnly: boolean;
    selectedHandler: (index: number) => void;
    triggers: IEndpointEditorData["triggers"];
    registerTabOpener: (openTab: (tab: TabNames) => void) => void;
};
export type TabNames = "Path Params" | "Middlewares" | "Handlers";
export declare const EndpointEditorBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EndpointEditorBody.d.ts.map
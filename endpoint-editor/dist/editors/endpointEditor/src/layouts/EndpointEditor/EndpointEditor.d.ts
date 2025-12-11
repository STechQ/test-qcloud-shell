import { IEndpointDesign } from "../../../../../common/everything/endpoint/designtimeModels/IEndpoint";
import { IEndpointEditorData } from "../../IEndpointEditorProgram";
import { TabNames } from "./EndpointEditorBody";
type Props = {
    updateMainModel: (model: IEndpointDesign) => void;
    data: IEndpointEditorData;
    readOnly: boolean;
    selectedHandler: (index: number) => void;
    registerTabOpener: (openTab: (tab: TabNames) => void) => void;
};
declare const EndpointEditor: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default EndpointEditor;
//# sourceMappingURL=EndpointEditor.d.ts.map
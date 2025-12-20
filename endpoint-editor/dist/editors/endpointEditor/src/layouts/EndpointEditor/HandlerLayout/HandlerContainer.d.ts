import { IEndpointHandler, IEndpointModel } from "../../../../../../common/everything/endpoint/runtimeModels/IEndpointModel";
import { IEndpointEditorData, IEndpointEditorInitOptions } from "../../../IEndpointEditorProgram";
import { IEndpointState } from "../../../../../../common/everything/endpoint/designtimeModels/IEndpoint";
type Props = {
    readOnly: boolean;
    goBack: () => void;
    name: string;
    mainModel: IEndpointModel;
    updateModel: (handlers: IEndpointHandler) => void;
    triggers?: IEndpointEditorData["triggers"];
    options: IEndpointEditorInitOptions;
    selectedIndex: number;
    openModelInNewTab?: (modelID: string) => void;
    setState: (state: IEndpointState) => void;
    state: IEndpointState;
};
export type TabNames = "Request" | "Response";
export declare const HandlerContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HandlerContainer.d.ts.map
import { IEndpointModel } from "../../../../../../common/everything/endpoint/runtimeModels/IEndpointModel";
import { IEndpointEditorData } from "../../../IEndpointEditorProgram";
type Props = {
    model: IEndpointModel;
    readOnly: boolean;
    setModel: (model: IEndpointModel) => void;
    selectedHandler: (index: number) => void;
    triggers: IEndpointEditorData["triggers"];
};
export declare const Handlers: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Handlers.d.ts.map
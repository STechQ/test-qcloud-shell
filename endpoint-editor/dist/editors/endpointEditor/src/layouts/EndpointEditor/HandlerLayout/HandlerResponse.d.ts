import { IOption } from "@stechquick/components/comps/Select";
import { IEndpointHandler } from "../../../../../../common/everything/endpoint/runtimeModels/IEndpointModel";
type Props = {
    model: IEndpointHandler;
    readOnly: boolean;
    setModel: (model: any) => void;
    flowOutputs: Array<IOption>;
};
export declare const HandlerResponse: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HandlerResponse.d.ts.map
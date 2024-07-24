import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
type Props = {
    model: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    updateModel: (model: IRestServiceDesign) => void;
};
export declare const RestServiceDefinition: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RestServiceDefinition.d.ts.map
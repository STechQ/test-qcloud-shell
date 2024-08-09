import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
type Props = {
    mainModel: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    readOnly: boolean;
    updateModel: (model: IRestServiceDesign) => void;
};
export declare const RequestContainer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RequestContainer.d.ts.map
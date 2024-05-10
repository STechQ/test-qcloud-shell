import { IRestService } from "../../../../common/runtime/interfaces/objects/IRestService";
type Props = {
    model: IRestService;
    objectInfo: Array<{
        name: string;
        id: string;
        version?: string;
    }>;
    updateModel: (model: IRestService) => void;
};
export declare const Store: ({ model, objectInfo, updateModel }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Store.d.ts.map
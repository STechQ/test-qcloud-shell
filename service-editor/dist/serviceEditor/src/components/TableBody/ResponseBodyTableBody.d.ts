import { IWFSetExpressionData } from "../../../../common/runtime/IWorkflowExpression";
import { IRestService } from "../../../../common/runtime/interfaces/objects/IRestService";
type Props = {
    responseBody: IRestService["responseBody"];
    nameChange: (type: string, index: number) => void;
    typeChange: (type: IWFSetExpressionData["type"], index: number) => void;
    valueChange: (type: string, index: number) => void;
    responseBodyDelete: (index: number) => void;
};
export declare const ResponseBodyTableBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ResponseBodyTableBody.d.ts.map
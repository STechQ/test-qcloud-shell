import { IWFExpressionData } from "../../../../common/runtime/IWorkflowExpression";
import { IRestService } from "../../../../common/runtime/interfaces/objects/IRestService";
type Props = {
    requestBody: IRestService["requestBody"];
    nameChange: (type: string, index: number) => void;
    typeChange: (type: IWFExpressionData["type"], index: number) => void;
    valueChange: (type: string, index: number) => void;
    requestBodyDelete: (index: number) => void;
};
export declare const RequestBodyTableBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RequestBodyTableBody.d.ts.map
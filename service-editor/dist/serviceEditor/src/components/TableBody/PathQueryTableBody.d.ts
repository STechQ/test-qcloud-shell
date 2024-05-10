import { IWFExpressionData } from "../../../../common/runtime/IWorkflowExpression";
import { IRestService } from "../../../../common/runtime/interfaces/objects/IRestService";
type Props = {
    show: "QUERY" | "PATH";
    requestUrl: IRestService["requestUrl"];
    pathTypes: Array<IWFExpressionData["type"]>;
    queryKeyTypeChange?: (type: IWFExpressionData["type"], index: number) => void;
    queryKeyValueChange?: (type: string, index: number) => void;
    pathKeyTypeChange: (type: IWFExpressionData["type"], index: number) => void;
    pathKeyValueChange: (type: string, index: number) => void;
    pathRequiredChange: (type: boolean, index: number) => void;
    deleteRow: (index: number) => void;
};
export declare const PathTableBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PathQueryTableBody.d.ts.map
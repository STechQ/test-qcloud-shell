import { IWFExpressionData, IWFSetExpressionData } from "../../../../common/runtime/IWorkflowExpression";
type Props = {
    headers?: Array<IHeader>;
    headerTypes: Array<IWFExpressionData["type"] | IWFSetExpressionData["type"]>;
    onHeaderNameChange?: (value: string | number, index: number) => void;
    onHeaderTypeChange?: (type: IWFExpressionData["type"] | IWFSetExpressionData["type"], index: number) => void;
    onHeaderValueChange?: (type: string | number, index: number) => void;
    onHeaderExpressionDelete?: (index: number) => void;
};
interface IHeader {
    name: string;
    type: IWFExpressionData["type"] | IWFSetExpressionData["type"];
    value: string;
}
export declare const HeaderTableBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeaderTableBody.d.ts.map
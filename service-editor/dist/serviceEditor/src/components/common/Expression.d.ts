import { FC } from "react";
import { IWFExpressionData } from "../../../../common/runtime/IWorkflowExpression";
interface IExpressionProps {
    label?: string;
    className?: string;
    selectClassName?: string;
    inputClassName?: string;
    types: Array<IWFExpressionData["type"]>;
    expression: IWFExpressionData;
    onChange: (value: IWFExpressionData) => void;
}
export declare const Expression: FC<IExpressionProps>;
export {};
//# sourceMappingURL=Expression.d.ts.map
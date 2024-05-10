import { FC } from "react";
import "../assets/css/components/expression.css";
import { IExpressionData } from "@stechquick/flow-interfaces/runtime/IExpression";
interface IExpressionProps {
    label?: string;
    className?: string;
    types: Array<Exclude<IExpressionData["type"], "enum">>;
    expression: IExpressionData;
    onChange?: (value: IExpressionData) => void;
    onBlur?: (value: IExpressionData) => void;
}
export declare const Expression: FC<IExpressionProps>;
export {};
//# sourceMappingURL=Expression.d.ts.map
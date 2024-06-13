import { IOption } from "@stechquick/components";
import { FC } from "react";
import { IExpressionData, ISetExpressionData } from "../../../../common/everything/object/runtimemodels/IExpression";
interface IHeadersProps {
    headers: Record<string, IExpressionData | ISetExpressionData>;
    updateHeaders: (headers: Record<string, IExpressionData | ISetExpressionData>) => void;
    typeOptions: Array<IOption>;
}
export declare const Headers: FC<IHeadersProps>;
export {};
//# sourceMappingURL=Headers.d.ts.map
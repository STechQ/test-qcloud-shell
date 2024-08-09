import { FC } from "react";
import { IExpressionData, ISetExpressionData } from "../../../../common/everything/dataType/runtimemodels/IExpression";
import { IOption } from "@stechquick/components/comps/Select";
interface IHeadersProps {
    headers: Record<string, IExpressionData | ISetExpressionData>;
    updateHeaders: (headers: Record<string, IExpressionData | ISetExpressionData>) => void;
    typeOptions: Array<IOption>;
    readOnly: boolean;
}
export declare const Headers: FC<IHeadersProps>;
export {};
//# sourceMappingURL=Headers.d.ts.map
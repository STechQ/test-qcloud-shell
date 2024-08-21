import { IOption } from "@stechquick/components/comps/Select";
import { FC } from "react";
import { IExpressionData, ISetExpressionData } from "../../../../common/everything/dataType/runtimemodels/IExpression";
interface IBodyProps {
    body: Array<IBody>;
    typeOptions: Array<IOption>;
    readOnly: boolean;
    updateBody: (model: Array<IBody>) => void;
}
interface IBody {
    bodyKey: string;
    value: IExpressionData | ISetExpressionData;
}
export declare const Body: FC<IBodyProps>;
export {};
//# sourceMappingURL=Body.d.ts.map
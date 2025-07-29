import { IOption } from "@stechquick/components/comps/Select";
import { FC } from "react";
import { IExpressionData, ISetExpressionData } from "../../../../common/everything/dataType/runtimemodels/IExpression";
import { Store } from "../../../../common/everything/store/designtimemodels/IStoreModel";
interface IBodyProps {
    body: Array<IBody>;
    typeOptions: Array<IOption>;
    readOnly: boolean;
    store: Store;
    updateBody: (model: Array<IBody>) => void;
}
interface IBody {
    bodyKey: string;
    value: IExpressionData | ISetExpressionData;
    description?: string;
}
export declare const Body: FC<IBodyProps>;
export {};
//# sourceMappingURL=Body.d.ts.map
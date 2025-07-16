import { FC } from "react";
import { IExpressionData, ISetExpressionData } from "../../../../common/everything/dataType/runtimemodels/IExpression";
import { Store } from "../../../../common/everything/store/runtimemodels/IStoreModel";
import { IOption } from "@stechquick/components/comps/Select";
interface IHeadersProps {
    tableTitle?: string;
    headers: Record<string, IExpressionData | ISetExpressionData>;
    updateHeaders: (headers: Record<string, IExpressionData | ISetExpressionData>) => void;
    typeOptions: Array<IOption>;
    readOnly: boolean;
    store: Store;
}
export declare const Header: FC<IHeadersProps>;
export {};
//# sourceMappingURL=Headers.d.ts.map
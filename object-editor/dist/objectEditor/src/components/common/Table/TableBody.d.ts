import { IObject } from "../../../../../common/runtime/interfaces/objects/IObject";
import { PropertyType } from "../../../../../common/runtime/interfaces/objects/IProperty";
import { IOption } from "../Select";
export type RowType = "attribute" | "summary" | "label";
type Props = {
    type: RowType;
    model: IObject;
    types?: IOption[];
    childTypes?: IOption[];
    filtered?: string;
    options?: IOption[];
    setModel: (model: IObject) => void;
    setCheck?: (keyName: string, fieldName: keyof PropertyType) => void;
    setKeyCheck?: (selectedKey: string) => void;
    removeAttrKey?: (key: string) => void;
    setRemoveItem?: (key: number) => void;
    setObjectType?: (key: string, objectInfo: string) => void;
};
export declare const TableBody: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableBody.d.ts.map
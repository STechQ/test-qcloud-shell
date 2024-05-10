import { PropertyType } from "../../../../../common/runtime/interfaces/objects/IProperty";
import { ISummaryDefinition } from "../../../../../common/runtime/interfaces/objects/ISummaryDefinition";
import { IOption } from "../Select";
import { RowType } from "./TableBody";
import "@mdi/font/css/materialdesignicons.min.css";
import { LabelType } from "../../../../../common/runtime/interfaces/objects/IObject";
type Props = {
    type: RowType;
    attributeValue?: PropertyType;
    summaryValue?: ISummaryDefinition;
    labelValue?: LabelType;
    keyColumn?: string;
    types?: IOption[];
    labelTypes?: IOption[];
    objectTypes?: IOption[];
    options?: IOption[];
    setValue?: (newValue: any, fieldName: keyof PropertyType) => void;
    setSumValue?: (newValue: string, fieldName: keyof ISummaryDefinition) => void;
    setCheck?: (fieldName: keyof PropertyType) => void;
    setLabelValue?: (newValue: LabelType) => void;
    setKeyCheck?: (selectedKey: string) => void;
    removeKey?: () => void;
    removeItem?: () => void;
    setObjectType?: (objectInfo: string) => void;
};
export declare const TableRow: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableRow.d.ts.map
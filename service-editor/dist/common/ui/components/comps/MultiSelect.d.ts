import { FC } from "react";
import "../assets/css/components/select.css";
interface IMultiSelectProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    values: Array<IOption['value']>;
    onChange: (value: Array<IOption['value']>) => void;
    options: Array<IOption>;
}
interface IOption {
    name: string;
    value: string | number;
}
export declare const MultiSelect: FC<IMultiSelectProps>;
export {};
//# sourceMappingURL=MultiSelect.d.ts.map
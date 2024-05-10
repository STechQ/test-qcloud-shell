import { FC } from "react";
interface ISelectProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    onChange: (value: IOption['value']) => void;
    options: Array<IOption>;
}
export interface IOption {
    name: string;
    value: string | number;
}
export declare const Select: FC<ISelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map
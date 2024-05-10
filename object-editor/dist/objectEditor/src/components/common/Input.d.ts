import { ChangeEvent, FC } from "react";
interface IInputProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<IInputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map
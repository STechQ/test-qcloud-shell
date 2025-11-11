import { FC, ReactNode } from "react";
import "../assets/css/components/radiobutton.css";
interface IRadioButtonProps {
    id?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
}
export declare const RadioButton: FC<IRadioButtonProps>;
export {};
//# sourceMappingURL=RadioButton.d.ts.map
import { FC } from "react";
import "../assets/css/components/switch.css";
interface ISwitchProps {
    label?: string;
    className?: string;
    disabled?: boolean;
    value?: boolean;
    onChange: (value: boolean) => void;
}
export declare const Switch: FC<ISwitchProps>;
export {};
//# sourceMappingURL=Switch.d.ts.map
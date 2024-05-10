import { FC, ReactNode } from "react";
export interface ICollapsibleProps {
    label?: string;
    children?: ReactNode;
    isKeepOpen?: boolean;
    onAddButton?: () => void;
}
export declare const Collapsible: FC<ICollapsibleProps>;
//# sourceMappingURL=Collapsible.d.ts.map
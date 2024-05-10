import { FC, ReactNode } from "react";
interface DialogProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children?: ReactNode;
    footer?: Array<JSX.Element>;
    type?: "modal" | "dialog";
    position?: {
        top: number;
    };
}
export declare const Dialog: FC<DialogProps>;
export {};
//# sourceMappingURL=Dialog.d.ts.map
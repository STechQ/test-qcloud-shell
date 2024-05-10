import { ReactElement } from "react";
type Props = {
    tableHeaders: Array<{
        name: string;
        style?: React.CSSProperties;
    }>;
    tableHeadersGap?: string;
    tableBody: ReactElement;
    tableEmpty: boolean;
};
export declare const Table: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map
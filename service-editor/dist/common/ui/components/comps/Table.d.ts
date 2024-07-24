import { JSXElementConstructor, ReactElement, CSSProperties } from "react";
import "../assets/css/components/table.css";
interface ITableProps<T> {
    columns: Array<{
        name: string;
        body?: (row: T, index: number) => ReactElement<any, string | JSXElementConstructor<any>>;
        style?: CSSProperties;
    }>;
    data: Array<T>;
    className?: string;
    searchValue?: string;
    onDataChange?: (newData: Array<T>) => void;
    isDraggable: boolean;
}
export declare const Table: <T extends Record<string, any>>({ columns, data, className, searchValue, isDraggable, onDataChange }: ITableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Table.d.ts.map
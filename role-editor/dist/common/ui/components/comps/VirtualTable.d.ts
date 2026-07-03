import { CSSProperties, JSXElementConstructor, ReactElement } from "react";
interface IVirtualTableColumn<T> {
    name: string;
    body?: (row: T, index: number) => ReactElement<any, string | JSXElementConstructor<any>>;
    style?: CSSProperties;
}
interface IVirtualTableProps<T> {
    columns: Array<IVirtualTableColumn<T>>;
    data: Array<T>;
    rowHeight?: number;
    className?: string;
    isDraggable?: boolean;
    onDataChange?: (newData: Array<T>) => void;
}
export default function VirtualTable<T>({ columns, data, rowHeight, className, isDraggable, onDataChange }: IVirtualTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=VirtualTable.d.ts.map
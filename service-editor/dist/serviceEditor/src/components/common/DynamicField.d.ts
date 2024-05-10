import { ReactNode } from 'react';
interface IDynamicFieldProps<T extends Record<string, any>> {
    fields: Array<T>;
    disabledFields?: Array<T>;
    fieldLabel: string;
    collapsibleLabel: string;
    dialogElements: Array<IDialogElements<T>>;
    emptyValues: T;
    isAddible?: boolean;
    createItemLabel?: string;
    dialogTitle: string;
    getFieldLabel?: (item: T) => string;
    isCollabsible?: boolean;
    onChange: (fields: Array<T>) => void;
    maxItemLen?: number;
}
interface IDialogElements<T> {
    component: any;
    props: Record<string, any>;
    key: string;
    children?: ReactNode;
    isRendered?: (val: T) => boolean;
}
export declare const DynamicField: <T extends Record<string, any>>({ collapsibleLabel, fields, disabledFields, fieldLabel, dialogElements, emptyValues: defaultValues, isAddible, isCollabsible, createItemLabel, dialogTitle, maxItemLen, onChange, getFieldLabel, }: IDynamicFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DynamicField.d.ts.map
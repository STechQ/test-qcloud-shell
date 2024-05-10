import { FC } from "react";
interface ISelectTypeProps {
    label?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    objectsInfo: Array<IModelInfo>;
    value: IObjectModel;
    onChange: (val: IObjectModel) => void;
}
interface IObjectModel {
    type: string;
    objectID?: string;
    objectVersion?: string;
}
interface IModelInfo {
    id: string;
    name: string;
    version: string;
}
export declare const SelectType: FC<ISelectTypeProps>;
export {};
//# sourceMappingURL=SelectType.d.ts.map
import { IModelBase } from "../IModel";
export interface IEnum extends IModelBase {
    name: string;
    type: 'enum';
    description: string;
    values: Record<string | number, string>;
}
//# sourceMappingURL=IEnum.d.ts.map
import { IEntity, Property, PropertyString } from "../../../../flowInterfaces/runtime/IEntity";
import { IEntityState } from "../viewModel/IViewModel";
export interface IEntityUC {
    getCurrentEntityState(): IEntityState;
    getCurrentProperty(): Property | undefined;
    addNewProperty(property: Property, targetEntity?: IEntity): IEntity;
    deleteProperty(propertyName: string, targetEntity?: IEntity): IEntity;
    selectProperty(propertyName: string | undefined): void;
    changePropertyName(newName: string): Property;
    changePropertyFormat(newFormat: PropertyString["format"]): PropertyString;
    changePropertyType(newType: Property["type"]): Property;
}
export declare const IEntityUC: unique symbol;
//# sourceMappingURL=IEntityUC.d.ts.map
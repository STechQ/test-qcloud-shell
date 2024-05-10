import { IEntity, Property, PropertyString } from "../../../../flowInterfaces/runtime/IEntity";
import { DependencyContainer } from "../../domain/core/diContainer";
import { IEntityUC } from "../../domain/useCase/IEntityUC";
import { IState } from "../../domain/useCase/IState";
import { IViewModel } from "../../domain/viewModel/IViewModel";
export declare class EntityUCImpl implements IEntityUC {
    readonly container: DependencyContainer;
    private readonly viewModel;
    private readonly state;
    constructor(container: DependencyContainer, viewModel?: IViewModel, state?: IState);
    getCurrentEntityState(): import("../../domain/viewModel/IViewModel").IEntityState;
    getCurrentProperty(): Property | undefined;
    addNewProperty(property: Property, targetEntity?: IEntity): IEntity;
    deleteProperty(propertyName: string, targetEntity?: IEntity): IEntity;
    selectProperty(propertyName: string | undefined): void;
    changePropertyName(newName: string): Property;
    changePropertyType(newType: Property["type"]): Property;
    changePropertyFormat(newFormat: PropertyString["format"]): PropertyString;
}
//# sourceMappingURL=entityUCImpl.d.ts.map
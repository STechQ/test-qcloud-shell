import { Property } from "../../../../flowInterfaces/runtime/IEntity";
import { IEntityState } from "../../domain/viewModel/IViewModel";
export interface IEntityProps {
    entityState: IEntityState;
    readonly: boolean;
    onPropSelect?: (name: string) => void;
    onNewProp?: (newProp: Property) => void;
    onDelProp?: (name: string) => void;
}
export declare function Entity(props: IEntityProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=entity.d.ts.map
import { IPropObject, StepRuntime } from "@stechquick/flow-interfaces/runtime";
import { IStoreMapping } from "../../../../../common/everything/store/runtimemodels/IStoreMapping";
import { IQuery } from "../../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
export interface CustomQuery extends Pick<IQuery, 'id' | 'name' | 'type' | 'filter' | 'store' | 'limit' | 'skip' | 'isMultipleResult' | 'fields'> {
}
export type IDBEntityPropType = IPropObject & {
    id: string;
    queryId: string;
    mapping: IStoreMapping;
};
declare const dbEntity: StepRuntime<IDBEntityPropType>;
export default dbEntity;
//# sourceMappingURL=dbEntity.d.ts.map
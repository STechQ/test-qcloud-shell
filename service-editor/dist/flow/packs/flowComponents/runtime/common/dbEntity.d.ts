import { IExpressionData, IPropObject, StepRuntime } from "@stechquick/flow-interfaces/runtime";
import { CollectionName } from "../../../../../common/runtime/infrastructure/mongo/IDataStoreManager";
import { IStoreMapping } from "../../../../../common/everything/store/runtimemodels/IStoreMapping";
import { IQuery } from "../../../../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { RuntimeMessage } from "@stechquick/flow-interfaces/runtime";
import { IRuntimeParam } from "@stechquick/flow-interfaces/runtime/StepRuntime";
export interface CustomQuery extends Omit<IQuery, "source" | "filterRuleSet"> {
}
export type IDBEntityPropType = IPropObject & {
    id: string;
    queryId: string;
    mapping: IStoreMapping;
    collectionName?: CollectionName;
};
declare const dbEntity: StepRuntime<IDBEntityPropType>;
export declare function executeDBEntity(options: {
    flow: IRuntimeParam["flow"];
    model: IRuntimeParam["model"];
    outerMsg: RuntimeMessage;
    dbEntityModelId: string;
    queryName: string;
    input: Record<string, IExpressionData>;
    collectionName?: CollectionName;
}): Promise<any>;
export default dbEntity;
//# sourceMappingURL=dbEntity.d.ts.map
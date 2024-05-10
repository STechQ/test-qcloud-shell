import { IVariable } from "../objects/IVariable";
import { IStoreContext, IStoreProps } from "./IStore";
export interface IStoreSchema {
    name: string;
    _name: string;
    desc: string;
    store: IStore;
}
interface IStore {
    context: IStoreContext;
    props: IStoreSchemaProps;
    input?: Record<string, IVariable>;
    output?: Record<string, IVariable>;
}
export interface IStoreSchemaProps {
    insert: Array<string>;
    params?: Record<string, IStoreSchemaParams>;
    storeProps: IStoreProps;
}
export interface IStoreSchemaParams {
    replaceKey?: Array<string>;
    replaceValue?: Array<string>;
}
export {};
//# sourceMappingURL=IStoreSchema.d.ts.map
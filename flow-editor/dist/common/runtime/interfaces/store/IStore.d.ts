import { IEnum } from "../objects/IEnum";
import { IVariable } from "../objects/IVariable";
import { IComponent } from "./IComponent";
import { IStoreFunction } from "./IStoreFunction";
export interface IStore {
    context: IStoreContext;
    input: Record<string, IVariable>;
    output: Record<string, IVariable>;
    functions?: Record<string, IStoreFunction>;
    events?: Array<IStoreFunction>;
    dataEvents?: Array<IStoreFunction>;
    components?: Record<string, IComponent>;
    props: IStoreProps;
}
export interface IStoreContext {
    vars?: Record<string, IVariable>;
    appConstants?: Record<string, IVariable>;
    globalConstants?: Record<string, IVariable>;
    currentUser?: IVariable;
    processInstance?: IVariable;
    enums?: Record<string, IEnum>;
    entity?: IVariable | null;
}
export interface IStoreProps {
    getExpressionList: Array<string>;
    getExpressionExceptionList: Array<string>;
    setExpressionList: Array<string>;
    setExpressionExceptionList: Array<string>;
}
//# sourceMappingURL=IStore.d.ts.map
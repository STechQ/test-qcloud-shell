import { FC } from "react";
import { IStoreSchema } from "../../../../common/runtime/interfaces/store/IStoreSchema";
import { IStoreContext } from "../../../../common/runtime/interfaces/store/IStore";
interface IContextProps {
    entityOptions: Array<{
        name: string;
        value: string;
    }>;
    context: IStoreContext;
    schema: IStoreSchema;
    onChange: (context: IStoreContext) => void;
}
export declare const Context: FC<IContextProps>;
export {};
//# sourceMappingURL=Context.d.ts.map
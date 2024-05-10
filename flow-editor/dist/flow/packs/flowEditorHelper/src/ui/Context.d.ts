import { FC } from "react";
import { IStoreSchema } from "../../../../../common/runtime/interfaces/store/IStoreSchema";
import { IStoreContext } from "../../../../../common/runtime/interfaces/store/IStore";
interface IContextProps {
    objects: Array<{
        id: string;
        name: string;
        version: string;
    }>;
    context: IStoreContext;
    schema: IStoreSchema;
    onChange: (context: IStoreContext) => void;
}
export declare const Context: FC<IContextProps>;
export {};
//# sourceMappingURL=Context.d.ts.map
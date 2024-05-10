import { DependencyContainer, container, inject, injectable, singleton } from "tsyringe";
interface IDependencyContainer extends DependencyContainer {
}
export declare function cacheResolve<T>(cb: () => T): () => T;
export declare function delayWithResolve<TInterface>(dependency: symbol, cb: (dep: TInterface) => void | Promise<void>): Promise<void>;
export declare function delayTillResolve(dependencies: Array<symbol>, cb?: () => void | Promise<void>): Promise<void>;
export { IDependencyContainer, container, inject, injectable, singleton };
//# sourceMappingURL=diContainer.d.ts.map
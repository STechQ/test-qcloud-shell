export type SplitterFunc<T, TCumulative> = (item: T, prev: TCumulative) => {
    target: "next" | "current";
    prev: TCumulative;
};
export declare class ArrayHelper {
    onlyUnique<T>(array: Array<T>): T[];
    arrayToDict<T>(array: Array<T>, keyRetriever: (item: T) => string): Record<string, T>;
    splitArrayToObject<T, RetType extends string>(array: Array<T>, keyRetriever: (item: T) => RetType): Record<RetType, Array<T> | undefined>;
    splitArray<T, TCumulative>(array: Array<T>, cb: SplitterFunc<T, TCumulative>, prev: TCumulative): Array<Array<T>>;
    filterKeys<T>(array: Array<T>, keyRetriever: (item: T) => string): T[];
}
//# sourceMappingURL=arrayHelper.d.ts.map
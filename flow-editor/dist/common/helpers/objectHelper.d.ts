export declare function objectKeys<T extends object>(object: T): Array<keyof T>;
export declare function objectToArray<TObject extends object, TEach>(object: TObject, converter: (item: TObject[keyof TObject], key: keyof TObject) => TEach): Array<TEach>;
export declare function filterNulls<TItem>(array: Array<TItem | undefined>): Array<TItem>;
export declare function deepMerge(target: any, source: any, visited?: Map<any, any>): any;
export declare function objectToString(obj: Record<string, any>, space: string, level?: number): string;
//# sourceMappingURL=objectHelper.d.ts.map
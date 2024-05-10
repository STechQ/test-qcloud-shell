export interface ISelection {
    stepsSelected(stepIDs: Array<string>, switchCase?: boolean): void;
    stepsUnselected(stepIDs: Array<string>): void;
    getSelecteds(): Array<string>;
}
export declare const ISelection: unique symbol;
//# sourceMappingURL=ISelection.d.ts.map
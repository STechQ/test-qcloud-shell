import { IContainerFunc } from "@stechquick/algae/lib/quick/IContainerModel";
export interface IContainerMockEditorOptions {
    source: string;
    code: any;
    intelliContent: string;
    onChange: (value: string) => void;
    onReady?: () => void;
    readonly?: boolean;
}
export interface IContainerUseCase {
    initMonacoEditor(options: IContainerMockEditorOptions): void;
    generateMockInterface(func: IContainerFunc): string;
    generateDynamicMockData(interfaceStr: string): string;
    generateStaticMockData(func: IContainerFunc): string;
    refreshInterface(intelliContent: string): void;
    subscribeEditorErrors(callback: (hasError: boolean) => void): {
        dispose(): void;
    } | null;
}
export interface IContainerMockValidResult {
    isSuccess: boolean;
    message?: string;
}
export declare const IContainerUseCase: unique symbol;
export type FuncDetailActionType = 'add' | 'update';
//# sourceMappingURL=IContainerUseCase.d.ts.map
/// <reference types="react" />
interface CodeEditorProps {
    width?: string | number;
    height?: string | number;
    codeValue: string;
    language?: string;
    intelliInterfaces?: string;
    readOnly?: boolean;
    models?: Array<{
        ID: string;
        name: string;
    }>;
    onCodeValuechange: (code: string) => void;
    setUndoRedoHandlers?: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    onModelNameHover?: (modelId: string, key: string) => Promise<string>;
}
type MonacoRef = {
    insertSelectedModel: (selectedModel: string) => void;
};
export declare const MonacoComp: import("react").ForwardRefExoticComponent<CodeEditorProps & import("react").RefAttributes<MonacoRef>>;
export {};
//# sourceMappingURL=monaco.d.ts.map
/// <reference types="react" />
import * as monaco from "monaco-editor";
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
    onMounted?: (editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => void;
}
type MonacoRef = {
    insertSelectedModel: (selectedModel: string) => void;
    setRange?: (startLine: number, startColumn: number, endLine: number, endColumn: number, opts?: {
        center?: boolean;
        focus?: boolean;
    }) => void;
};
export declare const MonacoComp: import("react").ForwardRefExoticComponent<CodeEditorProps & import("react").RefAttributes<MonacoRef>>;
export {};
//# sourceMappingURL=monaco.d.ts.map
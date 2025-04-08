import { FC } from 'react';
interface CodeEditorProps {
    width?: string | number;
    height?: string | number;
    codeValue: string;
    language?: string;
    intelliInterfaces?: string;
    readOnly?: boolean;
    onCodeValuechange: (code: string) => void;
    setUndoRedoHandlers?: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
}
export declare const MonacoComp: FC<CodeEditorProps>;
export {};
//# sourceMappingURL=monaco.d.ts.map
import { FC } from 'react';
interface CodeEditorProps {
    width?: string | number;
    height?: string | number;
    language?: string;
    codeValue: string;
    onCodeValuechange: (code: string) => void;
}
export declare const MonacoComp: FC<CodeEditorProps>;
export {};
//# sourceMappingURL=monaco.d.ts.map
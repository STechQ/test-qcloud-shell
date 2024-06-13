import { FC } from 'react';
import { Store } from '../../../../common/everything/store/designtimemodels/IStoreModel';
interface CodeEditorProps {
    width?: string | number;
    height?: string | number;
    codeValue: string;
    language?: string;
    intelliInterfaces?: Store;
    onCodeValuechange: (code: string) => void;
}
export declare const MonacoComp: FC<CodeEditorProps>;
export {};
//# sourceMappingURL=monaco.d.ts.map
import { IMime } from "../domain/infrastructure/IMime";
export declare class MimeImpl implements IMime {
    getContentType(extension: string): string;
    getContentTypeWithFileName(fileName: string): string;
    getFileExtension(fileName: string): string;
}
//# sourceMappingURL=mimeImpls.d.ts.map
export declare class VersionHelper {
    getVersion(import_meta: ImportMeta): Promise<{
        error: string;
        packageJsonVersion?: undefined;
        packageJsonModify?: undefined;
    } | {
        packageJsonVersion: string;
        packageJsonModify: Date;
        error: undefined;
    }>;
}
//# sourceMappingURL=versionHelper.d.ts.map
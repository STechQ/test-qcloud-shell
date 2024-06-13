export declare class VersionHelper {
    getVersion(import_meta: ImportMeta): Promise<{
        time: Date;
        error: string;
        packageJsonVersion: string;
        packageJsonModify?: undefined;
    } | {
        packageJsonVersion: string;
        packageJsonModify: Date;
        time: Date;
        error: undefined;
    }>;
}
//# sourceMappingURL=versionHelper.d.ts.map
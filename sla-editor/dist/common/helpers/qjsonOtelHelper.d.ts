/**
 * Shared helper for injecting OpenTelemetry trace strings into QJson files.
 * Used by both studio/ui (uncompiled export) and studio/jobs (compiled export).
 */
export interface IOtelContext {
    aciCode: string;
    orgName: string;
    appName: string;
}
export interface IOtelModelInfo {
    modelName: string;
    modelID: string;
}
/** Builds the otel trace string: {aciCode}.{modelName}.{orgName}.{appName}.{modelID} */
export declare function buildOtelStr(ctx: IOtelContext, model: IOtelModelInfo): string;
/** Parses a qjson content string (handles `let pjson = ...` and `rally_microUI` wrappers). */
export declare function parseQJsonContent(jsonString: string): any;
/** Re-serializes a parsed qjson object back into its original wrapper format. */
export declare function serializeQJson(originalContent: string, parsed: any): string;
/**
 * Parses qjson content, injects an OpenTelemetry trace string into opt.otelStr, and re-serializes.
 * Returns the original content unchanged if parsing fails.
 */
export declare function injectOtelStr(content: string, ctx: IOtelContext, model: IOtelModelInfo): string;
//# sourceMappingURL=qjsonOtelHelper.d.ts.map
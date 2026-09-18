import { IQJSon } from "@stechquick/shrimp/lib/interfaces/ComponentInterfaces/IQJson";
/**
 * Shared helper for injecting studio metadata (opt.studio) into QJson files.
 * Used by both studio/ui (uncompiled export) and studio/jobs (compiled export).
 */
export interface IOtelContext {
    orgGroupName: string;
    orgName: string;
    appName: string;
    appId: string;
    /** All studio tag values keyed by tag label (e.g. tags['ACICode'], tags['Channel']). */
    tags: Record<string, string>;
}
export interface IOtelModelInfo {
    modelName: string;
    modelID: string;
}
/** Studio metadata shape mirrored from @stechquick/shrimp IQJsonStudio (widened locally until shrimp is republished). */
export interface IQJsonStudioLocal {
    tags?: Record<string, string>;
    app?: {
        name?: string;
        id?: string;
    };
    model?: {
        name?: string;
        id?: string;
    };
    org?: {
        name?: string;
    };
    orgGroupName?: string;
}
/** Builds the structured studio metadata object stored under opt.studio. */
export declare function buildStudioInfo(ctx: IOtelContext, model: IOtelModelInfo): IQJsonStudioLocal;
/** Parses a qjson content string (handles `let pjson = ...` and `rally_microUI` wrappers). */
export declare function parseQJsonContent(jsonString: string): IQJSon;
/** Re-serializes a parsed qjson object back into its original wrapper format, preserving multi-line (tab) formatting. */
export declare function serializeQJson(originalContent: string, parsed: any): string;
/**
 * Parses qjson content, injects the structured studio metadata (opt.studio), then re-serializes.
 * Returns the original content unchanged if parsing fails.
 */
export declare function injectStudioInfo(content: string, ctx: IOtelContext, model: IOtelModelInfo): string;
//# sourceMappingURL=qjsonOtelHelper.d.ts.map
export interface MergedOperation {
    path: string;
    method: string;
    operationId: string;
    summary?: string;
    description?: string;
    tags?: string[];
    pathParams?: DefinitionProperty[];
    queryParams?: DefinitionProperty[];
    headerParams?: DefinitionProperty[];
    request?: Definition;
    response?: Definition;
    content?: string;
}
export type DefinitionProperty = {
    name: string;
    sourceName: string;
    description?: string;
    kind: "PRIMITIVE";
    isArray?: boolean;
    type: string;
    isInput?: boolean;
    required?: boolean;
} | {
    name: string;
    sourceName: string;
    description?: string;
    kind: "REFERENCE";
    isArray?: boolean;
    ref: Definition;
    required?: boolean;
};
export interface Definition {
    name: string;
    sourceName: string;
    description?: string;
    docs: string[];
    properties: Array<DefinitionProperty>;
}
export interface SwaggerSchema {
    type?: string;
    format?: string;
    description?: string;
    properties?: Record<string, SwaggerSchema>;
    items?: SwaggerSchema;
    $ref?: string;
    enum?: any[];
    oneOf?: SwaggerSchema[];
    anyOf?: SwaggerSchema[];
    allOf?: SwaggerSchema[];
    required?: string[];
}
export interface SwaggerComponents {
    schemas: Record<string, SwaggerSchema>;
}
export interface SwaggerDocument {
    components: SwaggerComponents;
    openapi: string;
    servers: Array<{
        url: string;
    }>;
    info: {
        title: string;
        version: string;
        description?: string;
    };
    paths: Record<string, PathItem>;
}
export declare class ParsedSwagger {
    endpoint: string;
    title: string;
    mergedOperation: Array<MergedOperation>;
    paths?: Record<string, PathItem> | any[];
}
export type HttpMethod = "GET" | "POST";
export interface PathItem {
    get?: Operation;
    post?: Operation;
}
export interface ParameterObject {
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required?: boolean;
    description?: string;
    schema: SwaggerSchema;
}
export interface Operation {
    summary?: string;
    description?: string;
    tags?: string[];
    operationId?: string;
    parameters?: ParameterObject[];
    requestBody?: RequestBodyObject;
    responses?: ResponsesObject;
}
export interface RequestBodyObject {
    description?: string;
    required?: boolean;
    content: Record<string, {
        schema: SwaggerSchema;
    }>;
}
export interface ResponsesObject {
    [status: string]: {
        description?: string;
        content?: Record<string, {
            schema: SwaggerSchema;
        }>;
    };
}
//# sourceMappingURL=types.d.ts.map
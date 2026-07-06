import { FastifyInstance, FastifyRegisterOptions } from "fastify";
import { SwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import { MongoDBManager } from "../runtime/infrastructure/mongo/mongoDBManager";
type AppId = string;
export type SwaggerDocType = "public" | "secured" | AppId;
export interface SwaggerOpt {
    name: string;
    swaggerOptions?: FastifyRegisterOptions<SwaggerOptions>;
    swaggerUiOptions?: FastifyRegisterOptions<FastifySwaggerUiOptions>;
    includeAppIdsOnOptions?: boolean;
}
export declare class SwaggerHelper {
    private static getAppIds;
    static registerSwagger(server: FastifyInstance, opt: SwaggerOpt, dbManager?: MongoDBManager): Promise<void>;
}
export {};
//# sourceMappingURL=SwaggerHelper.d.ts.map
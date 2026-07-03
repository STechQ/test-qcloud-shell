/// <reference types="node" />
import { IncomingMessage } from "http";
export declare class RequestHelper {
    urlExists(request: IncomingMessage, diskRootPath: string): boolean;
    getPathLower(request: IncomingMessage): string;
}
//# sourceMappingURL=requestHelper.d.ts.map
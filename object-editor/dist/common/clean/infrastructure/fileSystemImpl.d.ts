/// <reference types="node" />
import fs from "fs";
import { ICloudProviderFileSystem } from "../domain/useCases/ICloudProvider";
export declare class FileSystemImpl implements ICloudProviderFileSystem {
    getItemsAsync(path: string): Promise<string[]>;
    getStatAsync(source: string): Promise<fs.Stats>;
}
//# sourceMappingURL=fileSystemImpl.d.ts.map
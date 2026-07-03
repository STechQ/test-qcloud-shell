import { ParsedWsdl } from "./models/parsed-wsdl";
import { ModelPropertyNaming } from "./models/types";
export interface GeneratorOptions {
    emitDefinitionsOnly: boolean;
    modelPropertyNaming: ModelPropertyNaming;
    esm: boolean;
}
export declare function generate(parsedWsdl: ParsedWsdl, outDir: string, options: Partial<GeneratorOptions>): Promise<void>;
//# sourceMappingURL=generator.d.ts.map
import { IAppStartObject } from "@stechquick/symphony";
export declare class GlobalConfig {
    private static config;
    static setGlobalConfig(config: IAppStartObject["config"]): void;
    static getValue(key: string): any;
}
//# sourceMappingURL=globalConfig.d.ts.map
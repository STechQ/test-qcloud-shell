import { IModelInfo } from "../qCloudTemp/quickCloud";
import { IAppSettings } from "../qCloudTemp/application";
export declare class SettingsHelper {
    static getSettingsInfo(models: Array<IModelInfo>, getModelBody: (model: IModelInfo) => any): {
        settings_web: string;
        settings_iam: string;
    };
    static getAppSettingsModelReferences(appSettings?: IAppSettings, rootQjsonID?: string, appID?: string): Record<string, string | string[]>;
}
//# sourceMappingURL=settingsHelper.d.ts.map
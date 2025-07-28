import { IPlateauUIObject } from "@stechquick/algae/lib/quick/IPlateauUI";
import { ObjectID, UsageType } from "./quickCloud";
export interface ILivePreviewCustomLink {
    type: "custom";
    url: string;
    isActive: boolean;
    name?: string;
}
export type ILivePreviewSettingsRetval = IPlateauUIObject;
export interface ILivePreviewDeepLinkParam {
    isActive: boolean;
    value: string;
}
export interface ILivePreviewModel {
    ID: ObjectID;
    ver: string;
    usageType?: UsageType;
}
export interface ILivePreview {
    ID: ObjectID;
    type: "default" | "custom";
    appID: ObjectID;
    password?: string;
    previewType: "live";
    dbName: string;
    selected: boolean;
}
export interface IDefaultLivePreview extends ILivePreview {
    type: "default";
}
export interface ICustomLivePreview extends ILivePreview {
    type: "custom";
    links?: Array<ILivePreviewCustomLink>;
    deepLinkParam?: ILivePreviewDeepLinkParam;
    creationInfo: {
        user: string;
        date: Date;
    };
    updateInfo?: {
        user: string;
        date: Date;
    };
    models: Array<ILivePreviewModel>;
    expiryDate?: Date;
}
export interface IMobileLivePreviewInfo {
    type: "appPreview";
    lpSitePrefix: string;
    ID: ObjectID;
    clientID?: string;
    firstPage?: string;
}
//# sourceMappingURL=livePreview.d.ts.map
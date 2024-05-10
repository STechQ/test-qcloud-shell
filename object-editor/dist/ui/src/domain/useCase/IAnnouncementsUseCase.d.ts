import { IAnnouncementServiceObj } from "../../../../common/qCloudTemp/announcement";
export interface IAnnouncementUIExtended extends IAnnouncementServiceObj {
    isRead: boolean;
}
export interface IAnnouncementsUseCase {
    displayAnnouncementsIfAvailable(): Promise<void>;
}
export declare const IAnnouncementsUseCase: unique symbol;
//# sourceMappingURL=IAnnouncementsUseCase.d.ts.map
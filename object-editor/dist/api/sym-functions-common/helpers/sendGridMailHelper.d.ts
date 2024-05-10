import { IFeedbackAttachment } from "../../../common/qCloudTemp/feedback";
interface IMailUserData {
    email: string;
    name?: string;
}
interface IMailDataBase {
    to: IMailUserData | Array<IMailUserData>;
    from: IMailUserData;
    cc?: IMailUserData | Array<IMailUserData>;
    bcc?: IMailUserData | Array<IMailUserData>;
    attachments?: Array<IFeedbackAttachment>;
}
export interface IMailWithHtmlData extends IMailDataBase {
    subject: string;
    body: string;
}
export interface IMailViaTemplateData extends IMailDataBase {
    templateId: string;
    templateData?: Record<string, string>;
}
export declare class SendGridMailSender {
    constructor(sendGridApiKey: string);
    sendWithHtml(mailData: IMailWithHtmlData): Promise<void>;
    sendViaTemplate(mailData: IMailViaTemplateData): Promise<void>;
    sendMultipleWithHtml(mailData: Array<IMailWithHtmlData>): Promise<void>;
    sendMultipleViaTemplate(mailData: Array<IMailViaTemplateData>): Promise<void>;
    private mapHtmlMailData;
    private mapTemplatedMailData;
}
export {};
//# sourceMappingURL=sendGridMailHelper.d.ts.map
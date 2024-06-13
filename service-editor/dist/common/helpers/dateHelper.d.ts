export type LocaleType = "en-GB" | "tr-TR" | "en-US";
export interface IDateFormat {
    date?: {
        locale?: LocaleType;
    };
    time?: {
        second?: boolean;
    };
}
export declare class DateHelper {
    static formatDate(date: Date, format: IDateFormat): string;
    static toLocaleIsoString(date?: Date): string;
}
//# sourceMappingURL=dateHelper.d.ts.map
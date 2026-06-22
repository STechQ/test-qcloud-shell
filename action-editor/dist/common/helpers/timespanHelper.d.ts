declare const timespanTexts: {
    en: {
        minsOnly: (mins: number) => string;
        hoursMins: (hours: number, mins: number) => string;
        daysHours: (days: number, hours: number) => string;
    };
    tr: {
        minsOnly: (mins: number) => string;
        hoursMins: (hours: number, mins: number) => string;
        daysHours: (days: number, hours: number) => string;
    };
};
export declare class TimespanHelper {
    static timeSpanToText(timespanMs: number, lang: keyof typeof timespanTexts): string;
}
export {};
//# sourceMappingURL=timespanHelper.d.ts.map
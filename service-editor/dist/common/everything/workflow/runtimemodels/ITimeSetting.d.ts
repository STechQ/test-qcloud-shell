export type ITimeSetting = {
    label: string;
    day: DaySetting;
    hour: HourSetting;
    minute: MinuteSetting;
};
export type DaySetting = {
    type: DaySettingType;
    workdayCorrection: DaySettingWorkdayCorrection;
    setTo: number;
};
export type HourSetting = {
    type: HourSettingType;
    setTo: number;
};
export type MinuteSetting = {
    type: MinuteSettingType;
    setTo: number;
};
export declare const DaySettingTypes: {
    "--days-- Workdays": string;
    "--days-- Calendar Days": string;
    "--dd--": string;
    "At The End Of The Month": string;
};
export declare const DaySettingWorkdayCorrections: {
    None: string;
    Previous: string;
    Next: string;
};
export type DaySettingType = keyof typeof DaySettingTypes;
export type DaySettingWorkdayCorrection = keyof typeof DaySettingWorkdayCorrections;
export declare const HourSettingTypes: {
    "--hours-- Hours": string;
    "--hh--": string;
};
export type HourSettingType = keyof typeof HourSettingTypes;
export declare const MinuteSettingTypes: {
    "--minutes-- Minutes": string;
    "--mm--": string;
};
export type MinuteSettingType = keyof typeof MinuteSettingTypes;
export declare function EmptyTimeSettingValues(): ITimeSetting;
export declare function ValidateTimeSetting(timeSetting?: ITimeSetting): string;
export declare function TimeSettingAsString(timeSetting?: ITimeSetting): string;
//# sourceMappingURL=ITimeSetting.d.ts.map
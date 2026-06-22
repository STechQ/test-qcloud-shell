export declare enum DateFormats {
    YYYYMMDD = "^\\d{4}-\\d{2}-\\d{2}$",
    DDMMYYYY = "^\\d{2}-\\d{2}-\\d{4}$",
    MMDDYYYY = "^\\d{2}-\\d{2}-\\d{4}$",
    YYYYMMDD_SLASH = "^\\d{4}/\\d{2}/\\d{2}$",
    DDMMYYYY_SLASH = "^\\d{2}/\\d{2}/\\d{4}$",
    MMDDYYYY_SLASH = "^\\d{2}/\\d{2}/\\d{4}$",
    YYYYMMDD_DOT = "^\\d{4}.\\d{2}.\\d{2}$",
    DDMMYYYY_DOT = "^\\d{2}.\\d{2}.\\d{4}$",
    MMDDYYYY_DOT = "^\\d{2}.\\d{2}.\\d{4}$",
    YYYYMMDDHHMMSS = "^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$",
    DDMMYYYYHHMMSS = "^\\d{2}-\\d{2}-\\d{4} \\d{2}:\\d{2}:\\d{2}$",
    MMDDYYYYHHMMSS = "^\\d{2}-\\d{2}-\\d{4} \\d{2}:\\d{2}:\\d{2}$",
    YYYYMMDDHHMMSS_SLASH = "^\\d{4}/\\d{2}/\\d{2} \\d{2}:\\d{2}:\\d{2}$",
    DDMMYYYYHHMMSS_SLASH = "^\\d{2}/\\d{2}/\\d{4} \\d{2}:\\d{2}:\\d{2}$",
    MMDDYYYYHHMMSS_SLASH = "^\\d{2}/\\d{2}/\\d{4} \\d{2}:\\d{2}:\\d{2}$",
    YYYYMMDDHHMMSS_DOT = "^\\d{4}.\\d{2}.\\d{2} \\d{2}:\\d{2}:\\d{2}$",
    DDMMYYYYHHMMSS_DOT = "^\\d{2}.\\d{2}.\\d{4} \\d{2}:\\d{2}:\\d{2}$",
    MMDDYYYYHHMMSS_DOT = "^\\d{2}.\\d{2}.\\d{4} \\d{2}:\\d{2}:\\d{2}$"
}
export declare function isValidDateTimeFormat(dateStr: string, format: DateFormats): boolean;
export declare function stringToDateFormatsEnum(value: string): DateFormats | undefined;
//# sourceMappingURL=DateTemplates.d.ts.map
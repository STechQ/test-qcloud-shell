export interface IFormValidatorOptions {
    maxLength?: number;
    minLength?: number;
    minAndMaxLength?: {
        min: number;
        max: number;
    };
    email?: boolean;
    availableCharacters?: boolean;
    nonSpaceCharacter?: boolean;
    minNumValue?: number;
    maxNumValue?: number;
    customRegex?: ICustomRegex | ICustomRegex[];
    customValidators?: Record<string, CustomFormValidatorType>;
}
export type CustomFormValidatorType = (inputValue: string, elementId?: string) => ICustomFormValidatorReturn;
export interface ICustomFormValidatorReturn {
    isValid: boolean;
    message: string;
}
export interface ICustomRegex {
    regex: RegExp;
    message: string;
}
export interface IFormValidatorResponseItem {
    key: keyof IFormValidatorOptions;
    message: string;
    isValid: boolean;
    elementId?: string;
}
export interface IFormValidator {
    validate(value: string | number, options: IFormValidatorOptions, props: {
        elementId?: string;
    }): Array<IFormValidatorResponseItem>;
}
export declare const IFormValidator: unique symbol;
//# sourceMappingURL=IFormValidator.d.ts.map
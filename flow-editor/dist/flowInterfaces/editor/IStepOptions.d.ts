/// <reference types="react" />
import { IExpressionData, IPropObject } from "../runtime/IStepModel";
export interface IExpressionOptions {
    types: Array<IExpressionData["type"]>;
    expression?: IExpressionData;
    onChange?: (value: IExpressionData) => void;
}
export interface IEditSectionInput<PropType = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <TName extends keyof PropType & string>(name: TName, value: PropType[TName]) => void;
        setOutputs: (outputs: Array<string>) => void;
    };
    react: {
        prop: {
            NameDiv: React.ReactDOM["div"];
            DescDiv: React.ReactDOM["div"];
        };
        ExpressionComp: (options: IExpressionOptions) => JSX.Element;
    };
}
export interface IStepStyle {
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    fill?: string;
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    stroke?: string;
}
export declare type ReactEditSection = () => JSX.Element;
export interface IStepOptions<PropType = IPropObject> {
    name: string;
    version: string;
    outputs: Array<string> | ((props: PropType | undefined) => Array<string>);
    inputs: Array<string>;
    autoStarts?: boolean;
    style?: IStepStyle;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    defaultProps?: () => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map
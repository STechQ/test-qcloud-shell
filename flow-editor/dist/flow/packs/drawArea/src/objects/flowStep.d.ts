import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { Text } from "two.js/src/text";
import { Circle } from "two.js/src/shapes/circle";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { ObjectManager } from "../managers/objectManager";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents, IFlowStepOptions, IFlowStepProps } from "../../types";
import { FlowConnection } from "./flowConnection";
import { EventHelper } from "../helper/eventHelper";
import { Path } from "two.js/src/path";
type GetPositionOptions = {
    type: "self" | "group" | "bounding";
} | {
    type: "input" | "output";
    name: string;
};
type StepShapeInfo = {
    rectangle?: boolean;
    circle?: boolean;
    rhombus?: boolean;
    width: number;
    height: number;
};
export declare class FlowStep extends FlowObjectBase {
    readonly stepName: string;
    private readonly container;
    private readonly name;
    private readonly labelInfo;
    private readonly descriptionInfo;
    private readonly iconInfo;
    private readonly swimlaneInfo;
    private readonly group;
    private readonly textWidthCalculator;
    private shapeInfo;
    private outputs;
    private inputs;
    private inputConns;
    private outputConns;
    private outputsOrdered;
    private inputsOrdered;
    private swimlaneId?;
    private label;
    private description;
    private errors;
    readonly type = "step";
    protected readonly stageType: StageType;
    constructor(id: string, stepName: string, surfacePoint: IPoint, options: IFlowStepOptions, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>, props?: IFlowStepProps);
    private getLabelMaxWidth;
    private createSwimlaneText;
    private createSwimlaneContainer;
    private createDescription;
    private createLabel;
    private createIcon;
    private createBar;
    private createRectangleContainer;
    createCircleContainer(x: number, y: number): Circle;
    createRhombusContainer(x: number, y: number): Path;
    get Options(): IFlowStepOptions;
    get SwimlaneId(): string | undefined;
    get Label(): string | undefined;
    get Description(): string;
    get Errors(): Array<string> | undefined;
    get ShapeInfo(): StepShapeInfo | undefined;
    setSwimlaneId(swimlaneId?: string): void;
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(isErroneous?: boolean): Path[];
    private getBorder;
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): void;
    reDraw(): void;
    private reDrawOutConns;
    getPosition(option: GetPositionOptions): any;
    closestInput(surfacePoint: IPoint, discardInputs?: Array<string>): {
        input: string;
        distSq: number;
    } | undefined;
    unregisterConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    registerConnection(conType: "input" | "output", name: string, connection: FlowConnection): void;
    getConnectionTo(output: string, toStep: FlowStep, toInput: string): FlowConnection | undefined;
    getConnectionsTo(output: string, toStep: FlowStep): Array<FlowConnection>;
    private drawInputs;
    private drawOutputs;
    private drawRhombusOutputs;
    private drawIOs;
    private afterDraw;
    colorIO(outputName: string, conType: "input" | "output", color?: string): void;
    setOutputs(outputs: Array<string>): void;
    setLabel(label: string): void;
    setDescription(description: string): void;
    setErrors(errors: Array<string>): void;
    setContainerColor(bgColor: string, borderColor: string): void;
    truncateTextToFit(text: Text, content: string, maxWidth: number): void;
    changeStepID(newId: string): void;
}
export {};
//# sourceMappingURL=flowStep.d.ts.map
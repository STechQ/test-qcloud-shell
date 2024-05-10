import { Shape } from "two.js/src/shape";
import { IPoint } from "../../../flowInterfaces/editor/shape/IPoint";
import { ObjectManager } from "../managers/objectManager";
import { FlowObjectBase, MouseDownReturn } from "./flowObjectBase";
import { Vector } from "two.js/src/vector";
import { StageType, ZuiManager } from "../managers/zuiManager";
import { FlowEvents } from "../../types";
import { EventHelper } from "../helper/eventHelper";
export interface IOperatorPoint {
    x: number;
    y1: number;
    y2: number;
}
export declare class Operator extends FlowObjectBase {
    readonly type = "operator";
    protected readonly stageType: StageType;
    private readonly rectangle;
    private readonly text;
    private readonly line;
    constructor(id: string, point: IOperatorPoint, text: string, objectManager: ObjectManager, zuiManager: ZuiManager, eventHelper: EventHelper<FlowEvents>);
    mouseDown(surfacePoint: IPoint): MouseDownReturn;
    protected createSelectionOverlay(): Shape[];
    moveBy(dVector: Vector, surfacePoint: IPoint): void;
    mouseUp(): void;
    protected onDeleted(): never[];
    reDraw(): void;
}
//# sourceMappingURL=operator.d.ts.map
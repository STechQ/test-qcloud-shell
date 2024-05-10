import { IApplication, IExportJobArtifactInfoItem, IExportJobItem, IExportJobStepItem, IModel, IModule } from "./models";
export type AllObjectTypes = IApplication | IModule | IModel | IExportJobItem | IExportJobStepItem | IExportJobArtifactInfoItem;
export interface IState {
    objectDict: Record<string, AllObjectTypes | undefined>;
}
export declare const IState: unique symbol;
//# sourceMappingURL=IState.d.ts.map
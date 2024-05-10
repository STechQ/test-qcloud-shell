import { IObject } from "../model/IObject";
import { IApplication, IExportJobArtifactInfoItem, IExportJobItem, IExportJobStepItem, IModel, IModule, IFolder } from "../model/models";
import { AllObjectTypes } from "../model/IState";
export interface IViewModelManager {
    isSystemUser: boolean;
    findObject(objectId: string): AllObjectTypes | IFolder | undefined;
    findModel(modelId: string): IModel | undefined;
    traverseChildren(items: Array<(IModule | IModel)>, cb: (item: IModule | IModel, index: number, containerArray: Array<IModule | IModel>) => boolean): boolean;
    traverseAllItems(cb: (item: IModule | IModel, index: number, containerArray: Array<IModule | IModel>) => boolean): boolean;
    removeModel(model: IModel): void;
    removeModule(module: IModule): void;
    removeApplication(app: IApplication): void;
    removeExportJob(jobID: string): void;
    removeObject(object: IObject): void;
    modelCreated(model: IModel): IModel;
    moduleCreated(module: IModule): IModule;
    applicationCreated(app: IApplication): IApplication;
    exportJobCreated(job: IExportJobItem): void;
    findApplication(name: string): IApplication | undefined;
    getCurrentApplication(): IApplication | undefined;
    reset(): void;
    setApplicationList(apps: Array<IApplication>): void;
    setApplicationDetails(appID: string, details: IApplication["details"]): void;
    setExportJobItemList(jobs: Array<IExportJobItem>): void;
    setExportJobSteps(jobID: string, steps: Array<IExportJobStepItem>): void;
    setExportJobStepLogs(stepID: string, logs: Array<string>): void;
    setExportJobArtifacts(jobID: string, artifacts: Array<IExportJobArtifactInfoItem>): void;
    flatMapItems<T>(items: Array<(IModule | IModel)>, cb: (item: IModule | IModel, prefix?: string) => T | undefined): Array<T>;
    changeOwner(object: IModel | IModule, newOwner: IApplication | IModule): void;
}
export declare const IViewModelManager: unique symbol;
//# sourceMappingURL=IViewModelManager.d.ts.map
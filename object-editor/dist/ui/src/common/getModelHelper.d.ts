import { ModelType } from "../../../common/qCloudTemp/quickCloud";
import { IModel } from "../domain/model/models";
import { IViewModel } from "../domain/viewModel/IViewModel";
export declare class GetModelHelper {
    private readonly viewModel;
    constructor(viewModel?: IViewModel);
    getModelFromStudio(modelType: ModelType): Array<IModel>;
}
//# sourceMappingURL=getModelHelper.d.ts.map
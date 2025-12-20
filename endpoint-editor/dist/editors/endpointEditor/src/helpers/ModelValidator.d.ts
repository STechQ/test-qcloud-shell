import { IEndpointModel } from "../../../../common/everything/endpoint/runtimeModels/IEndpointModel";
export type ModelValidatorResult = {
    error?: Error;
    modifiedModel?: IEndpointModel;
};
export default class ModelValidator {
    static validateAndFixModel(model: IEndpointModel): ModelValidatorResult;
}
//# sourceMappingURL=ModelValidator.d.ts.map
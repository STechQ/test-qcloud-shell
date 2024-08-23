import { IDataTypeModel } from "../../../common/everything/dataType/runtimemodels/IDataTypeModel";
export type ModelValidatorResult = {
    error?: Error;
    modifiedModel?: IDataTypeModel;
};
export default class ModelValidator {
    static validateAndFixModel(model: IDataTypeModel): ModelValidatorResult;
}
//# sourceMappingURL=ModelValidator.d.ts.map
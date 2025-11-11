import { IDecisionTableModel } from "../../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
export type ModelValidatorResult = {
    error?: Record<string, string>;
};
export default class ModelValidator {
    static validateModel(model: IDecisionTableModel): Record<string, string>;
}
//# sourceMappingURL=ModelValidator.d.ts.map
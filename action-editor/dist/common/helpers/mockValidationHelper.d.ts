import { IContainerMockValidResult } from "../../ui/src/domain/useCase/IContainerUseCase";
export declare class MockValidationHelper {
    static getMockValidStatus(expectedType: string, value: any, objectContent?: string): IContainerMockValidResult;
    private static normalizeValueByExpectedType;
    private static validateObjectFields;
    private static createMockValidStatus;
    private static extractFieldsFromObjectContent;
    private static parseArrayType;
    private static extractInner;
    private static splitTopLevel;
}
//# sourceMappingURL=mockValidationHelper.d.ts.map
import { decisionTableFieldType, IDecisionTableComparision } from "../../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
type Props = {
    className?: string;
    disabled?: boolean;
    type: decisionTableFieldType;
    value: string | number | boolean;
    data: IDecisionTableComparision;
    errorMessage?: string;
    onChange: (data: string | number | boolean) => void;
};
export declare const ConditionInput: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default ConditionInput;
//# sourceMappingURL=ConditionInput.d.ts.map
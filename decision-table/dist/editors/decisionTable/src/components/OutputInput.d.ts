import { decisionTableFieldType, IDecisionTableOutputValue } from "../../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
type Props = {
    className?: string;
    type: decisionTableFieldType;
    value: IDecisionTableOutputValue;
    errorMessage?: string;
    disabled?: boolean;
    onChange: (value: IDecisionTableOutputValue) => void;
};
export declare const OutputInput: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default OutputInput;
//# sourceMappingURL=OutputInput.d.ts.map
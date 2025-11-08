import { IDecisionTableModel } from "../../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
type Props = {
    isOpen: boolean;
    data: IDecisionTableModel;
    ioKey?: "inputs" | "outputs";
    updatedKey?: string;
    onClose: () => void;
    updateModel: (model: IDecisionTableModel) => void;
    position?: {
        top: number;
        left: number;
    };
};
export declare const InputOutputDialog: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default InputOutputDialog;
//# sourceMappingURL=InputOutputDialog.d.ts.map
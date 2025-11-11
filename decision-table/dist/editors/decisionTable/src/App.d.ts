import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IDecisionTableModel } from "../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
import './App.css';
import { IDecisionTableData, IDecisionTableInitOptions } from './IDecisionTableProgram';
import { Program } from './program';
type Props = {
    data: IDecisionTableData;
    updateMainModel: (model: IDecisionTableModel) => void;
    options: IDecisionTableInitOptions;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    setErrorHandlers: (handlers: {
        setErrors: (errors: Record<string, string>) => void;
        clearErrors: () => void;
    }) => void;
};
export declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
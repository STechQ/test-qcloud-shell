import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Program } from "./program";
import { IPrivilegeDesign } from "../../../../common/everything/accessmanager/designtime/IPrivilegeDesign";
import { IPrivilegeEditorInitOptions } from "./IPrivilegeEditorProgram";
type Props = {
    data: IPrivilegeDesign;
    externalIds: string[];
    updateMainModel: (model: IPrivilegeDesign) => void;
    options: IPrivilegeEditorInitOptions;
    readOnly: boolean;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    setErrorHandlers: (handlers: {
        setErrors: (errors: Record<string, string>) => void;
        clearErrors: () => void;
    }) => void;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    triggerSetterExternalIds: (triggerExternalIds: (ids: string[]) => void) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
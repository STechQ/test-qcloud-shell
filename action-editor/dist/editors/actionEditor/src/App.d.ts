import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Program } from "./program";
import { IActionDesign } from "../../../common/everything/action/IActionDesign";
import { IActionEditorInitOptions, IActionPrivilege } from "./IActionEditorProgram";
import { IStudioUIModelBase } from "../../../common/everything/studio/ui/IStudioUIModelBase";
import { IActionItem } from "../../../common/everything/action/IActionDesign";
import { INestedStore } from "../../../common/everything/store/designtimemodels/IStoreModel";
type Props = {
    data: IActionDesign;
    updateMainModel: (model: IActionDesign) => void;
    options: IActionEditorInitOptions;
    readOnly: boolean;
    initialExternalActions: Array<IActionItem>;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    setErrorHandlers: (handlers: {
        setErrors: (errors: Record<string, string>) => void;
        clearErrors: () => void;
    }) => void;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    triggerSetterModels: (trigger: (models: IStudioUIModelBase[]) => void) => void;
    triggerSetterPrivileges: (trigger: (privileges: IActionPrivilege[]) => void) => void;
    triggerSetterExternalActions: (trigger: (actions: IActionItem[]) => void) => void;
    triggerSetterNestedStore: (trigger: (nestedStore: INestedStore) => void) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
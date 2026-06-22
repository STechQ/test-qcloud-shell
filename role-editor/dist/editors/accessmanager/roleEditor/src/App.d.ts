import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Program } from "./program";
import { IRoleDesign } from "../../../../common/everything/accessmanager/designtime/IRoleDesign";
import { IRoleDerivedData, IRoleEditorInitOptions } from "./IRoleEditorProgram";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
type Props = {
    data: IRoleDesign;
    externalRoleIds: string[];
    updateMainModel: (model: IRoleDesign) => void;
    options: IRoleEditorInitOptions;
    readOnly: boolean;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    setErrorHandlers: (handlers: {
        setErrors: (errors: Record<string, string>) => void;
        clearErrors: () => void;
    }) => void;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    triggerSetterModels: (trigger: (models: IStudioUIModelBase[]) => void) => void;
    triggerSetterDerivedData: (trigger: (derived: IRoleDerivedData) => void) => void;
    triggerSetterExternalRoleIds: (trigger: (ids: string[]) => void) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
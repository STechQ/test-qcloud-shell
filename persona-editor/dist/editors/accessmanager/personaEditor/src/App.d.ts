import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Program } from "./program";
import { IPersonaDesign } from "../../../../common/everything/accessmanager/designtime/IPersonaDesign";
import { IPersonaEditorInitOptions } from "./IPersonaEditorProgram";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
type Props = {
    data: IPersonaDesign;
    externalPersonaIds: string[];
    updateMainModel: (model: IPersonaDesign) => void;
    options: IPersonaEditorInitOptions;
    readOnly: boolean;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    setErrorHandlers: (handlers: {
        setErrors: (errors: Record<string, string>) => void;
        clearErrors: () => void;
    }) => void;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    triggerSetterModels: (trigger: (models: IStudioUIModelBase[]) => void) => void;
    triggerSetterExternalPersonaIds: (trigger: (ids: string[]) => void) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
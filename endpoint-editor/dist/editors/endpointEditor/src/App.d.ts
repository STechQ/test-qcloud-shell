import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IEndpointDesign, IEndpointState } from "../../../common/everything/endpoint/designtimeModels/IEndpoint";
import './App.css';
import { IEndpointEditorData, IEndpointEditorInitOptions } from './IEndpointEditorProgram';
import { Program } from './program';
type Props = {
    data: IEndpointEditorData;
    updateMainModel: (model: IEndpointDesign) => void;
    options: IEndpointEditorInitOptions;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
    triggerTabState: (triggerTabState: Program["triggerTabState"]) => void;
    triggerState: (triggerState: Program["triggerState"]) => void;
    openModelInNewTab: (modelID: string) => void;
    setState: (state: IEndpointState) => void;
};
export declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Program } from './program';
import { ISwimlaneEditorInitOptions } from "./ISwimlaneEditorProgram";
import './App.css';
import { ISwimlaneDesign } from "../../../../common/everything/accessmanager/designtime/ISwimlaneDesign";
interface Props {
    options: ISwimlaneEditorInitOptions;
    updateModel: (model: ISwimlaneDesign) => void;
    data: ISwimlaneDesign;
    externalIds: string[];
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    triggerTabState: (triggerTabState: Program["triggerTabState"]) => void;
    triggerSetterRoleModels: (triggerRoleModels: (roleModels: ISwimlaneEditorInitOptions["roleModels"]) => void) => void;
    triggerSetterExternalIds: (triggerExternalIds: (ids: string[]) => void) => void;
    openModelInNewTab: (modelID: string) => void;
}
declare function App(props: Props): import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
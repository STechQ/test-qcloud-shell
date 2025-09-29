import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import { ISlaEditorData, ISlaEditorInitOptions } from './ISlaEditorProgram';
import { Program } from './program';
import { ISLAModel } from "../../common/everything/sla/runtimemodels/ISLAModel";
type Props = {
    data: ISlaEditorData;
    updateMainModel: (model: ISLAModel) => void;
    options: ISlaEditorInitOptions;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
    openModelInNewTab: (modelID: string) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
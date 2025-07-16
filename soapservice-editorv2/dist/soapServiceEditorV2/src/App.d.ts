import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ISoapServiceEditorV2Data, ISoapServiceEditorV2InitOptions } from "./ISoapServiceEditorV2Program";
import { Program } from "./program";
import './App.css';
import { ISoapServiceV2Design } from "../../common/everything/soapService/designtimeModels/ISoapServiceV2";
type Props = {
    data: ISoapServiceEditorV2Data;
    updateMainModel: (model: ISoapServiceV2Design) => void;
    options: ISoapServiceEditorV2InitOptions;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
};
export declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
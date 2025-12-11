import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { IDataSetEditorData, IDataSetEditorInitOptions } from "./IDataSetProgram";
import { Program } from "./program";
import { IDataSetModel } from "../../../common/everything/dataSet/runtimemodels/IDataSetModel";
type Props = {
    data: IDataSetEditorData;
    updateMainModel: (model: IDataSetModel) => void;
    options: IDataSetEditorInitOptions;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
};
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
import { IObjectModel } from '../../common/everything/object/runtimemodels/IObjectModel';
import './App.css';
import { IObjectEditorData, IObjectEditorInitOptions } from './IObjectEditorProgram';
import { Program } from './program';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
interface Props {
    options: IObjectEditorInitOptions;
    updateMainModel: (model: IObjectModel) => void;
    data: IObjectEditorData;
    triggerSetter: (trigger: Program["trigger"]) => void;
}
declare function App(props: Props): import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
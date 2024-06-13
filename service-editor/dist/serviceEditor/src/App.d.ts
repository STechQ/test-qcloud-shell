import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IRestServiceDesign } from '../../common/everything/restService/designtimeModels/IRestService';
import './App.css';
import { IServiceEditorData, IServiceEditorInitOptions } from './IServiceEditorProgram';
import { Program } from './program';
type Props = {
    data: IServiceEditorData;
    updateMainModel: (model: IRestServiceDesign) => void;
    options: IServiceEditorInitOptions;
    triggerSetter: (trigger: Program["trigger"]) => void;
};
export declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
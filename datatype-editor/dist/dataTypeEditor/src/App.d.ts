import { IDataTypeModel } from '../../common/everything/dataType/runtimemodels/IDataTypeModel';
import './App.css';
import { IDataTypeEditorData, IDataTypeEditorInitOptions } from './IDataTypeEditorProgram';
import { Program } from './program';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
interface Props {
    options: IDataTypeEditorInitOptions;
    updateMainModel: (model: IDataTypeModel) => void;
    data: IDataTypeEditorData;
    readOnly: boolean;
    triggerSetter: (trigger: Program["trigger"]) => void;
    triggerSetterReadOnly: (triggerReadOnly: Program["triggerReadOnly"]) => void;
}
declare function App(props: Props): import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
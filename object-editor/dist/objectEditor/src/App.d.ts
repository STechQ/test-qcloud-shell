import { IObject } from '../../common/runtime/interfaces/objects/IObject';
import './App.css';
import { IObjectEditorInitOptions } from './IObjectEditorProgram';
interface Props {
    options: IObjectEditorInitOptions;
    updateMainModel: (model: IObject) => void;
}
declare function App(props: Props): import("react/jsx-runtime").JSX.Element;
export default App;
//# sourceMappingURL=App.d.ts.map
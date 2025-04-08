import { IRestServiceDesign } from "../../../../common/everything/restService/designtimeModels/IRestService";
type Props = {
    soapModel: string;
    readOnly: boolean;
    updateMainModel: (model: IRestServiceDesign) => void;
    setUndoRedoHandlers: (undo: () => void, redo: () => void, canUndo: boolean, canRedo: boolean) => void;
};
declare const SoapServiceEditor: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default SoapServiceEditor;
//# sourceMappingURL=SoapServiceEditor.d.ts.map
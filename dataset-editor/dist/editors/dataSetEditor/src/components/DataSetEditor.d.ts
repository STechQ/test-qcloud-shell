import { IDataSetModel } from "../../../../common/everything/dataSet/runtimemodels/IDataSetModel";
export interface IDataSetEditorData {
    mainModel: IDataSetModel;
}
interface IDataSetEditorProps {
    readOnly: boolean;
    data: IDataSetEditorData;
    updateModel: (model: IDataSetModel) => void;
}
export default function DataSetEditor({ readOnly, data, updateModel, }: IDataSetEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DataSetEditor.d.ts.map
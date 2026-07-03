import { IActionDesign, IActionItem } from "../../../../common/everything/action/IActionDesign";
import { IActionPrivilege } from "../IActionEditorProgram";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { INestedStore } from "../../../../common/everything/store/designtimemodels/IStoreModel";
import { IWFModels } from "../../../../common/everything/workflow/runtimemodels/IModel";
export type IActionEditorData = IActionDesign;
interface IActionEditorProps {
    data: IActionEditorData;
    readOnly: boolean;
    availablePrivileges: IActionPrivilege[];
    externalActions: Array<IActionItem>;
    models: Array<IStudioUIModelBase>;
    updateModel: (model: IActionDesign) => void;
    openModelInNewTab?: (modelId: string, modelType: string) => void;
    getModelBody?: (id: string, bodyKey: string) => Promise<IWFModels>;
    nestedStore?: INestedStore;
}
export default function ActionEditor(props: IActionEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ActionEditor.d.ts.map
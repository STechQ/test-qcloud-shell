import { IPersonaItem } from "../../../../../common/everything/accessmanager/designtime/IPersonaDesign";
interface IPersonaPageProps {
    personas: Array<IPersonaItem>;
    allRoles: Array<{
        id: string;
        refId: string;
    }>;
    readOnly: boolean;
    updateModel: (model: Array<IPersonaItem>) => void;
    onEditPersona: (persona: IPersonaItem | null) => void;
}
export default function PersonaPage({ personas, allRoles, readOnly, updateModel, onEditPersona }: IPersonaPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PersonaPage.d.ts.map
import { IPersonaItem } from "../../../../../common/everything/accessmanager/designtime/IPersonaDesign";
interface IPersonaDetailPageProps {
    persona: IPersonaItem | null;
    nameLocked: boolean;
    allPersonas: Array<IPersonaItem>;
    externalPersonaIds: string[];
    allDashboards: Array<{
        id: string;
        name: string;
    }>;
    allRoles: Array<{
        id: string;
        refId: string;
    }>;
    readOnly: boolean;
    onSave: (persona: IPersonaItem) => void;
    onCancel: () => void;
}
export default function PersonaDetailPage(props: IPersonaDetailPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PersonaDetailPage.d.ts.map
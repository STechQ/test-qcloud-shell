import "../assets/css/components/tabs.css";
export interface ITabItem {
    name: string;
    disabled: boolean;
}
type Props = {
    tabNames: Array<string | ITabItem>;
    onClick: (index: number) => void;
    selectedTab: string;
};
export declare const Tabs: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map
import { ITabItem } from "./Tabs";
type Props = {
    tabNames: Array<string | ITabItem>;
    selectedTab: string;
    onClick: (index: number) => void;
};
export declare const TabItem: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabItem.d.ts.map
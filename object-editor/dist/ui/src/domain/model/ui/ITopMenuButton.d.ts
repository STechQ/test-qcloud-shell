export interface ITopMenuButton {
    ID: string;
    name: string;
    onSelect: () => void | Promise<void>;
    disabled?: boolean;
    tooltip?: string;
    iconClass?: string;
}
//# sourceMappingURL=ITopMenuButton.d.ts.map
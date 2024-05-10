export interface INavItem {
    name: string;
    selected?: boolean;
    onSelect?: () => void | Promise<void>;
    /**
     * sidebar component path under /components/sidebars/...
     */
    sidebarComponent?: string;
}
//# sourceMappingURL=INavItem.d.ts.map
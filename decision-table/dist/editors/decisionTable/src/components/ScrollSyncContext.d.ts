import React from "react";
type ScrollSyncCtx = {
    register: (el: HTMLDivElement | null) => void;
    unregister: (el: HTMLDivElement | null) => void;
    syncFrom: (source: HTMLDivElement) => void;
};
export declare const ScrollSyncProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useScrollSync: () => ScrollSyncCtx;
export {};
//# sourceMappingURL=ScrollSyncContext.d.ts.map
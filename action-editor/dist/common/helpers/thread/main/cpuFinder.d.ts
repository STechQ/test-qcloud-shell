export declare class CpuFinder {
    getDefaultThreadCount(): {
        max: number;
        min: number;
        type: "physical" | "container" | "noDefault";
    };
    private isInContainer;
    private getMaxCPUsInContainer;
}
//# sourceMappingURL=cpuFinder.d.ts.map
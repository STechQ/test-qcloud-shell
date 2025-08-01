import { IDecryptDataRequest, IDecryptDataResponse, IEncryptDataRequest, IEncryptDataResponse, IHashDataRequest, IHashDataResponse } from "../../../shrimp/helpers/cryptoHelper";
import { IMessage } from "../../../shrimp/helpers/logger";
import { ElementLocation } from "../../../shrimp/interfaces/ComponentInterfaces/ElementLocation";
import { IComponent, IComponentClassEngine } from "../../../shrimp/interfaces/ComponentInterfaces/IComponent";
import { IComponentCollection } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentCollection";
import { IComponentInstanceTracker } from "../../../shrimp/interfaces/ComponentInterfaces/IComponentInstanceTracker";
import { IDictionary } from "../../../shrimp/interfaces/IDictionary";
import { IContainerServicesResponseReal, IHostResponseData } from "../../../shrimp/interfaces/IHostResponseData";
import { IDomElement } from "../../../shrimp/interfaces/RenderingInterfaces/IDomElement";
import { INetwork } from "../../../shrimp/interfaces/quick/IContainerServices";
import { ICookieAccess } from "../../../shrimp/interfaces/quick/ICookieAccess";
import { IExcel, IExcelJsonData, IExcelList, IExcelToJsonData } from "../../../shrimp/interfaces/quick/IExcel";
import { IFormatConfiguration } from "../../../shrimp/interfaces/quick/IFormatConfiguration";
import { IFormattingDefinition } from "../../../shrimp/interfaces/quick/IFormattingDefinition";
import { ILocationPosition } from "../../../shrimp/interfaces/quick/ILocationPosition";
import { INavigationOptions } from "../../../shrimp/interfaces/quick/INavigationManager";
import { IPlatform } from "../../../shrimp/interfaces/quick/IPlatform";
import { IProcessManager } from "../../../shrimp/interfaces/quick/IProcessManager";
import { IHistoryBasedShellConfiguration, IShellConfiguration } from "../../../shrimp/interfaces/quick/IShellConfiguration";
import { IShellGlobalMethods } from "../../../shrimp/interfaces/quick/IShellGlobalMethods";
import { IStore } from "../../../shrimp/interfaces/quick/IStore";
import { IUrlOptions } from "../../../shrimp/interfaces/quick/IUrl";
import { IRenderer } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { ISharedDataInfo } from "../../../shrimp/interfaces/quick/IGeneralMethods";
export declare class ShellConfiguration implements IShellConfiguration {
    network: INetwork;
    lridHelper?: (label: string, dataSource?: object | null) => string;
    go?: Function;
    go2?(qjsonPath: string, options?: INavigationOptions): void;
    integrationsEventTrigger?(name: string, params: any[]): void;
    goNative?: Function;
    triggerPreviousPage?: Function;
    nemoComponents?: object;
    storeAccess?: IStore;
    cookieAccess?: ICookieAccess;
    platform?: IPlatform;
    getCurrentPosition?: () => Promise<ILocationPosition>;
    compPropsAutoLrid?: boolean;
    osGlobalObjects?: IDictionary<any>;
    shellGlobalMethods?: IShellGlobalMethods;
    formatConfiguration: IFormatConfiguration;
    componentInstanceTracker?: IComponentInstanceTracker;
    historyBasedConf?: IHistoryBasedShellConfiguration;
    processManager?: IProcessManager;
    logHandler?: {
        timer: number;
        cb: (logs: IMessage) => void;
        clear: () => void;
    };
    coreComponentOverrider?(componentName: string): IComponentClassEngine | null;
    dynamicCompHandler?: ({ createdComps, referenceComp, compLocater, parentCollection, append, childName }: {
        createdComps?: Array<IComponentCollection>;
        referenceComp?: IComponentCollection;
        compLocater: ElementLocation;
        parentCollection?: IComponentCollection;
        append?: boolean;
        childName: string;
    }) => void;
    deleteComponent?: (compCollection: IComponentCollection | IDomElement) => void;
    resetTextField?: (componentContext: any) => void;
    roleBaseViewHelper?: (key: string) => boolean;
    redirectTo?({ url }: {
        url: string;
    }): void;
    performance?: () => number;
    getUrl?(options?: {
        noQueryString?: boolean;
    }): string | undefined;
    exportToXlsxHandler?: (excelFile: IExcel | IExcelList) => void;
    xlsxToJson?: (excelToJsonData: IExcelToJsonData) => IExcelJsonData[];
    setComponentClass?: (compCollection: IComponentCollection, classes: Array<string>) => void;
    setTheme?: (newTheme: string) => void;
    getThemeList?: () => Array<string> | undefined;
    addTheme?: (themeName: string) => void;
    removeTheme?: (themeName: string) => void;
    redirect?({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
    setVisibility: (compCollection: IComponentCollection, compVisibility: boolean) => void;
    setDisable: (compCollection: IComponentCollection, compDisable: boolean) => void;
    getComponentValue: (compCollection: IComponentCollection) => any;
    setComponentValue: (compCollection: IComponentCollection, value: string) => void;
    getComponentStyle: (comp: IComponent) => any;
    setComponentStyle: (compCollection: IComponentCollection, prop?: string, value?: string) => void;
    setComponentsProperty?: (componentCollection: IComponentCollection, propertyName: string, propertyValue: any) => void;
    setRegion?: (regionName: string) => void;
    getRegionList?: () => Array<string> | undefined;
    getCurrentRegion?: () => string | undefined;
    getFormattingDefinitionByCurrentRegion?: () => IFormattingDefinition | undefined;
    onComponentDestroy?: (options: {
        parentComponent?: IComponent;
        compColl: IComponentCollection;
        childKey?: string;
    }) => void;
    createComponentQValue?: (compCOllection: IComponentCollection) => void;
    hostTrigger?: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IHostResponseData>;
    containerTrigger?: (functionName: string, params: Record<string, any>, pageNameArray: Array<string>) => Promise<IContainerServicesResponseReal>;
    container?: (functionName: string, params: Record<string, any>) => Promise<IHostResponseData>;
    setDarkTheme?: (compCollection: IComponentCollection, isDark: boolean) => void;
    clearPageClose?: () => void;
    setPageClose?: () => void;
    scrollIntoView?: (component: IComponent) => void;
    YOffset?: () => Number;
    XOffset?: () => Number;
    toTop?: () => void;
    getEnvironmentVariable?: () => any;
    getPageTitle?: () => void;
    getFavicon?: () => void;
    setPageTitle: (value: string) => void;
    copyToClipboard: (value: string) => void;
    initializePositioning: (sourcePicker: string, wrapperClass: string) => void;
    cleanupPositioning: (sourcePicker: string) => void;
    setFavicon: (icon: string) => void;
    hash?: (data: IHashDataRequest) => Promise<IHashDataResponse>;
    encrypt?: (data: IEncryptDataRequest) => Promise<IEncryptDataResponse>;
    decrypt?: (data: IDecryptDataRequest) => Promise<IDecryptDataResponse>;
    downloadHandler?: (responseFile: {
        data: string;
        name: string;
    }) => boolean;
    shareData?: (sharedDataInfo: ISharedDataInfo) => void;
    getComponent?: ({ compID }: {
        compID: string;
    }) => IDomElement;
    getNetworkConnection?: () => boolean;
    stringToBase64?: (data: string) => string;
    base64ToString?: (data: string) => string;
    getLogBulkSize?: () => number | undefined;
    renderer: IRenderer;
    onLRChange?: (region: string) => void;
    constructor();
}
//# sourceMappingURL=ShellConfiguration.d.ts.map
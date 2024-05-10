import { ModelType, ObjectID, AllModelAdditionalTypes } from "./quickCloud";
export type AllProductTypes = IModuleProduct | IModelProduct;
export type AllProductVerTypes = IModuleProductVer | IModelProductVer;
export interface IContentInfo {
    ID: ObjectID;
    productVerID: ObjectID;
    parentID?: ObjectID;
    name: string;
    objectType: "model";
    subType?: ModelType;
    additionals?: AllModelAdditionalTypes;
}
export interface IContentBody {
    ID: ObjectID;
    infoID: ObjectID;
    key: string;
    model: any;
    size?: number;
}
export interface IStoreHistory {
    targetID: ObjectID;
    type: "activate" | "deactivate" | "withdraw" | "ownerChanged";
    targetType: "product" | "productVer";
    date: Date;
    user: string;
    oldValue?: string;
    newValue?: string;
    description?: string;
}
export interface IProductImage {
    ID: ObjectID;
    name: string;
    data: string;
    description?: string;
}
interface IProductBase {
    ID: ObjectID;
    name: string;
    type: "module" | "model";
    description?: string;
    images?: Array<IProductImage>;
    owner: {
        type: "organization" | "user";
        name: string;
    };
    attachedTo: {
        dbName: string;
        itemID: string;
    };
    createInfo: {
        user: string;
        date: Date;
    };
    isActive: boolean;
    withdrawInfo?: {
        user: string;
        date: Date;
    };
    isGlobal: boolean;
    compatibilities: {
        plateau: boolean;
    };
}
export interface IModuleProduct extends IProductBase {
    type: "module";
}
export interface IModelProduct extends IProductBase {
    type: "model";
    subType: ModelType;
}
interface IProductVerBase {
    ID: ObjectID;
    productID: ObjectID;
    ver: string;
    description?: string;
    images?: Array<IProductImage>;
    createInfo: {
        user: string;
        date: Date;
    };
    isActive: boolean;
    withdrawInfo?: {
        user: string;
        date: Date;
    };
}
export interface IModuleProductVer extends IProductVerBase {
    itemsCount: {
        quick?: number;
    };
}
export interface IModelProductVer extends IProductVerBase {
}
export interface IPutNewModel {
}
export {};
//# sourceMappingURL=store.d.ts.map
import { ISymphonyObject } from "@stechquick/symphony/dist";
import jwt from "jsonwebtoken";
import { IUserInformation } from "./IUserInformation";
import { IUser_SUSI } from "../../../common/qCloudTemp/authentication";
import { IAppToken } from "../../../common/qCloudTemp/quickCloud";
interface IVerifyResult<T> {
    status: true;
    data: T;
}
interface IVerifyResultFail {
    status: false;
    error: unknown;
}
type VerifyResult<T> = IVerifyResult<T> | IVerifyResultFail;
interface IGatheredCacheToken {
    source: "context" | "header";
    userInfo: IUserInformation;
}
export declare class AuthenticationManager {
    static tryGatherUserInfo(sym: ISymphonyObject): Promise<IUserInformation | undefined>;
    static gatherUserInfo(sym: ISymphonyObject): Promise<IUserInformation>;
    static authenticatedTokenType(sym: ISymphonyObject): Promise<{
        type: "apptoken";
        appToken: IAppToken;
    } | {
        type: "user";
        userInfo: IGatheredCacheToken;
    }>;
    private static getContextAppToken;
    static signAndAppendCacheToken(sym: ISymphonyObject, userInfo: IUserInformation): void;
    static verifyToken<T>(token: string, secret: string): Promise<VerifyResult<T>>;
    static validateAccessToken(sym: ISymphonyObject): Promise<jwt.JwtPayload & {
        sub: string;
    }>;
    private static gatherCacheToken;
    static createCacheToken(sym: ISymphonyObject, data: {
        userObjectId: string;
        type: "userId";
        sessionId: string;
    } | {
        type: "user";
        user: IUser_SUSI;
        sessionId: string;
    }): Promise<IUserInformation>;
    static verifyBearer(auth: string, sym: ISymphonyObject): Promise<boolean>;
    private static convertAppTokenToUser;
}
export {};
//# sourceMappingURL=AuthenticationManager.d.ts.map
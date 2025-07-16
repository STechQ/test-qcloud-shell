import { IThreadMsgKey } from "../main/threadManager";
import { ThreadCustomMsgDict } from "./IThreadMessages";
export type CustomMessageCB<TMsgKey extends string | IThreadMsgKey, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> = (message: TCustomMsgType[keyof TCustomMsgType], msgKey: TMsgKey) => (void | Promise<void>);
export declare class CustomMessageHandler<TMsgKey extends string | IThreadMsgKey, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    private customMsgHooks;
    subscribe(key: keyof TCustomMsgType, cb: CustomMessageCB<TMsgKey, TCustomMsgType>): void;
    trigger(key: keyof TCustomMsgType, message: TCustomMsgType[keyof TCustomMsgType], msgKey: TMsgKey): Promise<void>;
    stop(): void;
}
//# sourceMappingURL=customMessageHandler.d.ts.map
import { OmitTyped } from "@stechquick/symphony-common/lib/helpers/typeHelper";
import { IThreadEntryOptions, ThreadEntry } from "../worker/threadEntry";
import { ThreadCustomMsgDict, UserWorkerDataType } from "./IThreadMessages";
export type IThreadEntryCreator<TJob, TJobResult, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> = (options: IThreadEntryOptions<TJob, TJobResult, TCustomMsgType>) => ThreadEntry<TJob, TJobResult, TCustomMsgType>;
export interface IThreadEntyPoint<TJob, TJobResult, TWorkerData extends UserWorkerDataType = UserWorkerDataType, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    workerTarget: (threadEntryCreator: IThreadEntryCreator<TJob, TJobResult, TCustomMsgType>, options: {
        workerData?: OmitTyped<TWorkerData, "secret">;
    }) => (void | Promise<void>);
    onInit: (options: {
        workerDataSecret?: TWorkerData["secret"];
    }) => Promise<void>;
}
//# sourceMappingURL=IThreadEntryPoint.d.ts.map
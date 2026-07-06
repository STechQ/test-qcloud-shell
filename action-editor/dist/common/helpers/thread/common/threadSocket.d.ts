/// <reference types="node" />
import { ISocket } from '@stechquick/algae/lib/helpers/socket/iSocket';
import { Worker, parentPort } from 'worker_threads';
import { ThreadBufferType } from './IThreadRequest';
export declare class ThreadSocket implements ISocket<ThreadBufferType> {
    private readonly target;
    OnMessageWithDirectObject: boolean;
    OnMessage?: ISocket<ThreadBufferType>["OnMessage"];
    private _onMessage;
    constructor(target: NonNullable<typeof parentPort> | Worker);
    Send(packet: string | object, options?: {
        transferBuffers?: Array<ThreadBufferType>;
    }): void;
    destroy(): Promise<void>;
}
//# sourceMappingURL=threadSocket.d.ts.map
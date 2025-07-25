export type ThreadBufferType = ArrayBuffer;
export interface IThreadRequestSource<TJob> {
    job: TJob;
    jobBuffers?: Array<ThreadBufferType>;
}
export interface IThreadRequestTarget<TJob> {
    job: TJob;
}
export interface IThreadResultSource<TJobResult> {
    result: TJobResult;
    resultBuffers?: Array<ThreadBufferType>;
}
export interface IThreadResultTarget<TJobResult> {
    result: TJobResult;
}
//# sourceMappingURL=IThreadRequest.d.ts.map
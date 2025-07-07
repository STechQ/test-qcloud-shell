declare function encrypt(data: string, keyString: string): Promise<{
    encryptedDataString: string;
    ivString: string;
}>;
declare function decrypt(encryptedDataString: string, ivString: string, keyString: string): Promise<string>;
declare function generateCryptoKey(keyString: string): Promise<CryptoKey>;
declare function str2abForEncrypt(str: string, bits?: number): ArrayBufferLike;
declare function str2base64(str: string): string;
declare function ab2str(buf: ArrayBuffer): string;
declare function str2abForDecrypt(str: string): ArrayBufferLike;
declare function base64ToStr(base64: string): string;
//# sourceMappingURL=ct.d.ts.map
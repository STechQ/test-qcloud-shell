export declare class CryptoHelper {
    static genereateHashKey(key: string): string;
    static hash(key: string, value: string): Promise<string>;
    static encrypt(data: string, keyString: string): Promise<{
        encryptedData: ArrayBuffer;
        ivString: string;
    }>;
    static decrypt(encryptedData: ArrayBuffer, ivString: string, keyString: string): Promise<string>;
    private static generateCryptoKey;
    private static createFixedLengthArrayBufferFromString;
    static encodeABToBase64(buffer: ArrayBuffer): string;
    static decodeBase64ToAB(base64: string): ArrayBuffer;
}
//# sourceMappingURL=cryptoHelper.d.ts.map
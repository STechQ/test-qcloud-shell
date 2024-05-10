import { ICrypto, IRandomStringOptions } from "../domain/infrastructure/ICrypto";
export declare class CryptoImpl implements ICrypto {
    /**
     * me: write me a typescript function that generates random string with lowercase letters and numbers that is 24 characters
     * chatGPT: ▼ ▼
     */
    generateRandomString(options: IRandomStringOptions): string;
    /**
     * me: write me a typescript function that takes guid as string and returns a 24 character representation of that guid which is backwards convertable.
     * chatGPT: ▼ ▼
     */
    shortenGUID(guid: string): string;
    /**
     * me: when i convert back it gives me additional 00, should i remove them ?
     * chatGPT: ▼ ▼
     */
    lengthenGUID(representation: string): string;
}
//# sourceMappingURL=cryptoImpl.d.ts.map
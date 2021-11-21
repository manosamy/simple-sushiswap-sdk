import { ChainId } from '../../enums/chain-id';
/**
 * FLEATO token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export declare class FLEATO {
    static MATIC(): {
        chainId: ChainId;
        contractAddress: string;
        decimals: number;
        symbol: string;
        name: string;
    };
    static MUMBAI(): {
        chainId: ChainId;
        contractAddress: string;
        decimals: number;
        symbol: string;
        name: string;
    };
    /**
     * Get USDC token info by chain id
     * @param chainId The chain id
     */
    static token(chainId: ChainId | number): {
        chainId: ChainId;
        contractAddress: string;
        decimals: number;
        symbol: string;
        name: string;
    };
}

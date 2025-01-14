"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDC = void 0;
const chain_id_1 = require("../../enums/chain-id");
const error_codes_1 = require("../errors/error-codes");
const sushiswap_error_1 = require("../errors/sushiswap-error");
/**
 * USDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
class USDC {
    static MAINNET() {
        return {
            chainId: chain_id_1.ChainId.MAINNET,
            contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            decimals: 18,
            symbol: 'USDC',
            name: 'USD Coin',
        };
    }
    static MATIC() {
        return {
            chainId: chain_id_1.ChainId.MATIC,
            contractAddress: '0x90A49b254a017C4Fc2E22a732097d6d17752d855',
            decimals: 18,
            symbol: 'USDC',
            name: 'USD Coin',
        };
    }
    static MUMBAI() {
        return {
            chainId: chain_id_1.ChainId.MUMBAI,
            contractAddress: '0x90A49b254a017C4Fc2E22a732097d6d17752d855',
            decimals: 18,
            symbol: 'USDC',
            name: 'USD Coin',
        };
    }
    /**
     * Get USDC token info by chain id
     * @param chainId The chain id
     */
    static token(chainId) {
        switch (chainId) {
            case chain_id_1.ChainId.MAINNET:
                return this.MAINNET();
            case chain_id_1.ChainId.MATIC:
                return this.MATIC();
            case chain_id_1.ChainId.MUMBAI:
                return this.MUMBAI();
            default:
                throw new sushiswap_error_1.SushiswapError(`${chainId} is not allowed`, error_codes_1.ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    }
}
exports.USDC = USDC;

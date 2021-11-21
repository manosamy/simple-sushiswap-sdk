"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WBTC = void 0;
const chain_id_1 = require("../../enums/chain-id");
const error_codes_1 = require("../errors/error-codes");
const sushiswap_error_1 = require("../errors/sushiswap-error");
/**
 * WBTC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
class WBTC {
    static MATIC() {
        return {
            chainId: chain_id_1.ChainId.MATIC,
            contractAddress: '0x4E6bd2B6bb8448aAF90C8D62baF83856FBEDc036',
            decimals: 18,
            symbol: 'WBTC',
            name: 'Wrapped BTC',
        };
    }
    static MUMBAI() {
        return {
            chainId: chain_id_1.ChainId.MUMBAI,
            contractAddress: '0x4E6bd2B6bb8448aAF90C8D62baF83856FBEDc036',
            decimals: 18,
            symbol: 'WBTC',
            name: 'Wrapped BTC',
        };
    }
    /**
     * Get USDC token info by chain id
     * @param chainId The chain id
     */
    static token(chainId) {
        switch (chainId) {
            case chain_id_1.ChainId.MATIC:
                return this.MATIC();
            case chain_id_1.ChainId.MUMBAI:
                return this.MUMBAI();
            default:
                throw new sushiswap_error_1.SushiswapError(`${chainId} is not allowed`, error_codes_1.ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    }
}
exports.WBTC = WBTC;

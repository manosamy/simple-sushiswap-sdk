"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FLEATO = void 0;
const chain_id_1 = require("../../enums/chain-id");
const error_codes_1 = require("../errors/error-codes");
const sushiswap_error_1 = require("../errors/sushiswap-error");
/**
 * FLEATO token context CHANGE CONTRACT ADDRESS INFO ETC
 */
class FLEATO {
    static MATIC() {
        return {
            chainId: chain_id_1.ChainId.MATIC,
            contractAddress: '0xaD2a6255264D1dEf7EbEC64FA531F247a215A549',
            decimals: 18,
            symbol: 'FLEATO',
            name: 'fleato',
        };
    }
    static MUMBAI() {
        return {
            chainId: chain_id_1.ChainId.MUMBAI,
            contractAddress: '0xaD2a6255264D1dEf7EbEC64FA531F247a215A549',
            decimals: 18,
            symbol: 'FLEATO',
            name: 'fleato',
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
exports.FLEATO = FLEATO;

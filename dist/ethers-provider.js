"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthersProvider = void 0;
const ethers_1 = require("ethers");
const error_codes_1 = require("./common/errors/error-codes");
const sushiswap_error_1 = require("./common/errors/sushiswap-error");
const chain_id_1 = require("./enums/chain-id");
class EthersProvider {
    constructor(chainId, providerUrl) {
        if (providerUrl) {
            const chainName = chain_id_1.ChainNames.get(chainId);
            if (!chainName) {
                throw new sushiswap_error_1.SushiswapError(`Can not find chain name for ${chainId}`, error_codes_1.ErrorCodes.canNotFindChainId);
            }
            this._ethersProvider = new ethers_1.providers.StaticJsonRpcProvider(providerUrl, {
                name: chainName,
                chainId,
            });
            return;
        }
        this._ethersProvider = new ethers_1.providers.InfuraProvider(chainId);
    }
    /**
     * Creates a contract instance
     * @param abi The ABI
     * @param contractAddress The contract address
     */
    getContract(abi, contractAddress) {
        const contract = new ethers_1.Contract(contractAddress, abi, this._ethersProvider);
        return contract;
    }
    /**
     * Get the network
     */
    network() {
        return this._ethersProvider.network;
    }
    /**
     * Get the ethers provider
     */
    get provider() {
        return this._ethersProvider;
    }
    /**
     * Get eth amount
     * @param ethereumAddress The ethereum address
     */
    balanceOf(ethereumAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this._ethersProvider.getBalance(ethereumAddress)).toHexString();
        });
    }
}
exports.EthersProvider = EthersProvider;

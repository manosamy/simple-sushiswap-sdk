"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractContext = void 0;
class ContractContext {
}
exports.ContractContext = ContractContext;
/**
 * The sushiswap router address
 */
ContractContext.routerAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';
/**
 * The sushiswap factory address
 */
ContractContext.factoryAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
/**
 * The sushiswap pair address
 */
ContractContext.pairAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
/**
 * sushiswap v2 router
 */
ContractContext.routerAbi = require('../ABI/sushiswap-router-v2.json');
/**
 * sushiswap v2 factory
 */
ContractContext.factoryAbi = require('../ABI/sushiswap-factory-v2.json');
/**
 * sushiswap v2 pair
 */
ContractContext.pairAbi = require('../ABI/sushiswap-pair-v2.json');
/**
 * ERC20 abi
 */
ContractContext.erc20Abi = require('../ABI/erc-20-abi.json');

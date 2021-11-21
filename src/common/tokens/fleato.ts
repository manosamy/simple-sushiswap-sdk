import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

/**
 * FLEATO token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class FLEATO {
  public static MATIC() {
    return {
      chainId: ChainId.MATIC,
      contractAddress: '0xaD2a6255264D1dEf7EbEC64FA531F247a215A549',
      decimals: 18,
      symbol: 'FLEATO',
      name: 'fleato',
    };
  }

  public static MUMBAI() {
    return {
      chainId: ChainId.MUMBAI,
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
  public static token(chainId: ChainId | number) {
    switch (chainId) {
      case ChainId.MATIC:
        return this.MATIC();
      case ChainId.MUMBAI:
        return this.MUMBAI();
      default:
        throw new SushiswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}

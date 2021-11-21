import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

/**
 * WBTC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class WBTC {
  public static MATIC() {
    return {
      chainId: ChainId.MATIC,
      contractAddress: '0x4E6bd2B6bb8448aAF90C8D62baF83856FBEDc036',
      decimals: 18,
      symbol: 'WBTC',
      name: 'Wrapped BTC',
    };
  }

  public static MUMBAI() {
    return {
      chainId: ChainId.MUMBAI,
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

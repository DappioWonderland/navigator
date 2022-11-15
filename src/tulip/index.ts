export * from "./ids";
export * from "./infos";

import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { IDepositorInfo, IReserveInfo, IVaultInfo } from "../types";

export interface Base {
  nonce: BN;
  tag: BN[];
  pda: PublicKey;
  pdaNonce: BN;
  pdaAlignment: BN[];
  totalDepositedBalance: BN;
  totalShares: BN;
  underlyingMint: PublicKey;
  underlyingWithdrawQueue: PublicKey;
  underlyingDepositQueue: PublicKey;
  underlyingCompoundQueue: PublicKey;
  sharesMint: PublicKey;
  withdrawsPaused: BN;
  depositsPaused: BN;
  compoundPaused: BN;
  supportsCompound: BN;
  rebasePaused: BN;
  rebalancePaused: BN;
  stateAlignment: BN[];
  precisionFactor: BN;
  lastCompoundTime: BN;
  compoundInterval: BN;
  slippageTolerance: BN;
  slipAlignment: BN[];
  fees: {
    feeMultiplier: BN;
    controllerFee: BN;
    platformFee: BN;
    withdrawFee: BN;
    depositFee: BN;
    feeWallet: PublicKey;
    totalCollectedA: BN;
    totalCollectedB: BN;
  };
  farm: BN[];
  configured: BN;
  configuredAlignment: BN[];
  pendingFees: BN;
  totalDepositedBalanceCap: BN;
  realizedYield: {
    gainPerSecond: BN;
    apr: BN;
  };
}

export interface VaultInfo extends IVaultInfo {
  base: Base;
}

export interface RaydiumVaultInfo extends VaultInfo {
  lpMint: PublicKey;
  ammId: PublicKey;
  ammAuthority: PublicKey;
  ammOpenOrders: PublicKey;
  ammQuantitiesOrTargetOrders: PublicKey;
  stakeProgram: PublicKey;
  liquidityProgram: PublicKey;
  coinTokenAccount: PublicKey;
  pcTokenAccount: PublicKey;
  poolTempTokenAccount: PublicKey;
  poolLpTokenAccount: PublicKey;
  poolWithdrawQueue: PublicKey;
  poolId: PublicKey;
  poolAuthority: PublicKey;
  poolRewardATokenAccount: PublicKey;
  poolRewardBTokenAccount: PublicKey;
  feeCollectorRewardATokenAccount: PublicKey;
  feeCollectorRewardBTokenAccount: PublicKey;
  dualRewards: BN;
  vaultRewardATokenAccount: PublicKey;
  vaultRewardBTokenAccount: PublicKey;
  vaultStakeInfoAccount: PublicKey;
  associatedStakeInfoAddress: PublicKey;
  coinMint: PublicKey;
  pcMint: PublicKey;
  serumMarket: PublicKey;
}

export interface OrcaVault extends VaultInfo {
  farmData: {
    userFarmAddr: PublicKey;
    userFarmNonce: BN;
    vaultSwapTokenA: PublicKey;
    vaultSwapTokenB: PublicKey;
    poolSwapTokenA: PublicKey;
    poolSwapTokenB: PublicKey;
    poolSwapAccount: PublicKey;
    vaultRewardTokenAccount: PublicKey;
    vaultFarmTokenAccount: PublicKey;
    vaultSwapTokenAccount: PublicKey;
    globalBaseTokenVault: PublicKey;
    globalRewardTokenVault: PublicKey;
    globalFarm: PublicKey;
    farmTokenMint: PublicKey;
    rewardTokenMint: PublicKey;
    swapPoolMint: PublicKey;
    tokenAMint: PublicKey;
    tokenBMint: PublicKey;
    swapMarkets: PublicKey[];
  };
}
export interface OrcaDDVault extends VaultInfo {
  farmData: {
    userFarmAddr: PublicKey;
    userFarmNonce: BN;
    vaultSwapTokenA: PublicKey;
    vaultSwapTokenB: PublicKey;
    poolSwapTokenA: PublicKey;
    poolSwapTokenB: PublicKey;
    poolSwapAccount: PublicKey;
    vaultRewardTokenAccount: PublicKey;
    vaultFarmTokenAccount: PublicKey;
    vaultSwapTokenAccount: PublicKey;
    globalBaseTokenVault: PublicKey;
    globalRewardTokenVault: PublicKey;
    globalFarm: PublicKey;
    farmTokenMint: PublicKey;
    rewardTokenMint: PublicKey;
    swapPoolMint: PublicKey;
    tokenAMint: PublicKey;
    tokenBMint: PublicKey;
    swapMarkets: PublicKey[];
  };
  ddFarmData: {
    userFarmAddr: PublicKey;
    userFarmNonce: BN;
    vaultSwapTokenA: PublicKey;
    vaultSwapTokenB: PublicKey;
    poolSwapTokenA: PublicKey;
    poolSwapTokenB: PublicKey;
    poolSwapAccount: PublicKey;
    vaultRewardTokenAccount: PublicKey;
    vaultFarmTokenAccount: PublicKey;
    vaultSwapTokenAccount: PublicKey;
    globalBaseTokenVault: PublicKey;
    globalRewardTokenVault: PublicKey;
    globalFarm: PublicKey;
    farmTokenMint: PublicKey;
    rewardTokenMint: PublicKey;
    swapPoolMint: PublicKey;
    tokenAMint: PublicKey;
    tokenBMint: PublicKey;
    swapMarkets: PublicKey[];
  };
  ddCompoundQueue: PublicKey;
  ddCompoundQueueNonce: BN;
  ddConfigured: BN;
  ddWithdrawQueue: PublicKey;
  ddWithdrawQueueNonce: BN;
}

export interface ReserveInfo extends IReserveInfo {
  version: BN;
  lastUpdate: {
    lastUpdatedSlot: BN;
    stale: boolean;
  };
  lendingMarket: PublicKey;
  borrowAuthorizer: PublicKey;
  liquidity: {
    mintPubkey: PublicKey;
    mintDecimals: BN;
    supplyPubkey: PublicKey;
    feeReceiver: PublicKey;
    oraclePubkey: PublicKey;
    availableAmount: BN;
    borrowedAmount: BN;
    cumulativeBorrowRate: BN;
    marketPrice: BN;
    platformAmountWads: BN;
    platformFee: BN;
  };
  collateral: {
    reserveTokenMint: PublicKey;
    mintTotalSupply: BN;
    supplyPubkey: PublicKey;
  };
  config: {
    optimalUtilizationRate: BN;
    degenUtilizationRate: BN;
    loanToValueRatio: BN;
    liquidationBonus: BN;
    liquidationThreshold: BN;
    minBorrowRate: BN;
    optimalBorrowRate: BN;
    degenBorrowRate: BN;
    maxBorrowRate: BN;
    fees: {
      borrowFeeWad: BN;
      flashLoanFeeWad: BN;
      hostFeePercentage: BN;
    };
  };
}

export interface DepositorInfo extends IDepositorInfo {
  vaultId: PublicKey;
  pdaNonce: BN;
  queueNonce: BN;
  shares: BN;
  depositedBalance: BN;
  lastDepositTime: BN;
  pendingWithdrawAmount: BN;
  totalDepositedUnderlying: BN;
  totalWithdrawnUnderlying: BN;
  lastPendingReward: BN;
  rewardPerSharePaid: BN;
  extra_data_account: PublicKey;
}

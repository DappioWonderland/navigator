import { Connection, PublicKey } from "@solana/web3.js";

export interface IPoolInfo {
  poolId: PublicKey;
  tokenAMint: PublicKey;
  tokenBMint: PublicKey;
  lpMint: PublicKey;
}

export interface INFTRarityInfo {
  rarityId: PublicKey;
}

export interface INFTPoolInfo {
  poolId: PublicKey;
  proveTokenMint: PublicKey;
}

export interface INFTFarmInfo {
  farmId: PublicKey;
  farmTokenMint: PublicKey;
  rewardTokenMint: PublicKey;
}

export interface INFTLockerInfo {
  vaultId: PublicKey;
}

export interface INFTFarmerInfo {
  farmerId: PublicKey;
  userKey: PublicKey;
}

// TODO
export interface IFarmInfo {
  farmId: PublicKey;
}

export interface IFarmerInfo {
  farmerId: PublicKey;
  userKey: PublicKey;
  farmId?: PublicKey;
  amount?: number;
}

export interface IVaultInfo {
  vaultId: PublicKey;
  shareMint: PublicKey;
}

// TODO
export interface IDepositorInfo {
  depositorId: PublicKey;
  userKey: PublicKey;
}

// TODO
export interface IReserveInfo {
  reserveId: PublicKey;
}

export interface IObligationInfo {
  obligationId: PublicKey;
  userKey: PublicKey;
  reserveId?: PublicKey;
}

// TODO: Util methods
export interface IPoolInfoWrapper {
  poolInfo: IPoolInfo;
}

// TODO: Util methods
export interface IFarmInfoWrapper {
  farmInfo: IFarmInfo;
}

// TODO: Util methods
export interface IReserveInfoWrapper {
  reserveInfo: IReserveInfo;
}

// TODO: Util methods
export interface IVaultInfoWrapper {
  vaultInfo: IVaultInfo;
}

export interface IInstancePool {
  getAllPools(connection: Connection): Promise<IPoolInfo[]>;
  getAllPoolWrappers(connection: Connection): Promise<IPoolInfoWrapper[]>;
  getPool(connection: Connection, poolId: PublicKey): Promise<IPoolInfo>;
  parsePool(data: Buffer, farmId: PublicKey): IPoolInfo;
}

export interface IInstanceFarm {
  getAllFarms(connection: Connection, rewardMint?: PublicKey): Promise<IFarmInfo[]>;
  getAllFarmWrappers(connection: Connection, rewardMint?: PublicKey): Promise<IFarmInfoWrapper[]>;
  getFarm(connection: Connection, farmId: PublicKey): Promise<IFarmInfo>;
  parseFarm(data: Buffer, farmId: PublicKey): IFarmInfo;
  getAllFarmers(connection: Connection, userKey: PublicKey): Promise<IFarmerInfo[]>;
  getFarmerId(farmInfo: IFarmInfo, userKey: PublicKey, version?: number): Promise<PublicKey>;
  getFarmer(connection: Connection, farmerId: PublicKey, version?: number): Promise<IFarmerInfo>;

  // Optional Methods
  getFarmerIdWithBump?(farmId: PublicKey, userKey: PublicKey): Promise<[PublicKey, number]>;
}

export interface IInstanceMoneyMarket {
  getAllReserves(connection: Connection, marketId?: PublicKey): Promise<IReserveInfo[]>;
  getAllReserveWrappers(connection: Connection, marketId?: PublicKey): Promise<IReserveInfoWrapper[]>;
  getReserve(connection: Connection, reserveId: PublicKey): Promise<IReserveInfo>;
  parseReserve(data: Buffer, reserveId: PublicKey): IReserveInfo;

  // Optional Methods
  getAllObligations?(connection: Connection, userKey: PublicKey): Promise<IObligationInfo[]>;
  getObligation?(connection: Connection, obligationId: PublicKey): Promise<IObligationInfo>;
  parseObligation?(data: Buffer, obligationId: PublicKey): IObligationInfo;
  getObligationId?(marketId: PublicKey, userKey: PublicKey): Promise<PublicKey>;
}

export interface IInstanceNFTRarity {
  getAllRarities(connection: Connection): Promise<INFTRarityInfo[]>;
  // TODO: Add wrapper for NFTRarityInfo
  // getAllRarityWrappers(connection: Connection): Promise<INFTRarityInfoWrapper[]>;
  getRarity(connection: Connection, rarityId: PublicKey): Promise<INFTRarityInfo>;
  parseRarity(data: Buffer, rarityId: PublicKey): INFTRarityInfo;
}

export interface IInstanceNFTPool {
  getAllPools(connection: Connection): Promise<INFTPoolInfo[]>;
  // TODO: Add wrapper for NFTPoolInfo
  // getAllPoolWrappers(connection: Connection): Promise<INFTPoolInfoWrapper[]>;
  getPool(connection: Connection, poolId: PublicKey): Promise<INFTPoolInfo>;
  parsePool(data: Buffer, farmId: PublicKey): INFTPoolInfo;
}

export interface IInstanceNFTFarm {
  getAllFarms(connection: Connection): Promise<INFTFarmInfo[]>;
  // TODO: Add wrapper for NFTFarmInfo
  // getAllFarmWrappers(connection: Connection): Promise<INFTFarmInfoWrapper[]>;
  getFarm(connection: Connection, farmId: PublicKey): Promise<INFTFarmInfo>;
  parseFarm(data: Buffer, farmId: PublicKey): INFTFarmInfo;
}

export interface IInstanceNFTLocker {
  getAllNFTLockers(connection: Connection): Promise<INFTLockerInfo[]>;
  // TODO: Add wrapper for NFTLockerInfo
  // getAllNFTLockerWrappers(connection: Connection): Promise<INFTLockerInfoWrapper[]>;
  getNFTLocker(connection: Connection, vaultId: PublicKey): Promise<INFTLockerInfo>;
  parseNFTLocker(data: Buffer, vaultId: PublicKey): INFTLockerInfo;
}

export interface IInstanceNFTFarmer {
  getAllNFTFarmers(connection: Connection): Promise<INFTFarmerInfo[]>;
  // TODO: Add wrapper for NFTMinerInfo
  // getAllNFTMinerWrappers(connection: Connection): Promise<INFTMinerInfoWrapper[]>;
  getNFTFarmer(connection: Connection, minerId: PublicKey): Promise<INFTFarmerInfo>;
  parseNFTFarmer(data: Buffer, minerId: PublicKey): INFTFarmerInfo;
}

export interface IInstanceVault {
  getAllVaults(connection: Connection): Promise<IVaultInfo[]>;
  // TODO: Add wrapper for VaultInfo
  // getAllVaultWrappers(connection: Connection): Promise<IVaultInfoWrapper[]>;
  getVault(connection: Connection, vaultId: PublicKey): Promise<IVaultInfo>;
  parseVault(data: Buffer, vaultId: PublicKey): IVaultInfo;
  getAllDepositors(connection: Connection, userKey: PublicKey): Promise<IDepositorInfo[]>;
  getDepositor(connection: Connection, depositorId: PublicKey): Promise<IDepositorInfo>;
  parseDepositor(data: Buffer, depositorId: PublicKey): IDepositorInfo;
}

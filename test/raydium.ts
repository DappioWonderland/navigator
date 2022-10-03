import { Connection } from "@solana/web3.js";
import BN from "bn.js";
import { PoolDirection, raydium } from "../src";
import { PoolInfo, PoolInfoWrapper } from "../src/raydium";

describe("Raydium", () => {
  // const connection = new Connection("https://rpc-mainnet-fork.dappio.xyz", {
  //   commitment,
  //   wsEndpoint: "wss://rpc-mainnet-fork.dappio.xyz/ws",
  // });
  // const connection = new Connection("https://solana-api.tt-prod.net", {
  //   commitment: "confirmed",
  //   confirmTransactionInitialTimeout: 180 * 1000,
  // });
  // const connection = new Connection("https://ssc-dao.genesysgo.net", {
  //   commitment: "confirmed",
  //   confirmTransactionInitialTimeout: 180 * 1000,
  // });
  // const connection = new Connection("https:////api.mainnet-beta.solana.com", {
  //   commitment: "confirmed",
  //   confirmTransactionInitialTimeout: 180 * 1000,
  // });
  const connection = new Connection("https://rpc-mainnet-fork.epochs.studio", {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 180 * 1000,
    wsEndpoint: "wss://rpc-mainnet-fork.epochs.studio/ws",
  });

  it("fetches pool data", async () => {
    const pools = await raydium.infos.getAllPools(connection);
    const poolId = pools[20].poolId;

    const pool0 = pools[20];
    console.log(poolId.toString());
    console.log(pool0);

    const wrapper = new PoolInfoWrapper(pool0 as PoolInfo);
    const amountOut = await wrapper.getSwapOutAmount(PoolDirection.Reverse, new BN(100000000));
    console.log(amountOut.toNumber());

    const pool1 = await raydium.infos.getPool(connection, poolId);
    console.log(pool1);
  });

  it("fetches farm data", async () => {
    const farms = await raydium.infos.getAllFarms(connection);
    const farmId = farms[20].farmId;
    console.log(farmId.toString());
    const farm0 = farms[20];
    console.log(farm0);

    const farm1 = await raydium.infos.getFarm(connection, farmId);
    console.log(farm1);
  });
});

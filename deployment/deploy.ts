import * as dotenv from "dotenv";
import { TezosToolkit } from "@taquito/taquito";
import { InMemorySigner } from "@taquito/signer";

dotenv.config(); /* This loads the variables in your .env file to process.env */

const deploy = async () => {
  const { TEZOS_RPC_URL, ORIGINATOR_PRIVATE_KEY } = process.env;
    console.log(ORIGINATOR_PRIVATE_KEY, "imkey")
  const signer = await InMemorySigner.fromSecretKey(ORIGINATOR_PRIVATE_KEY);
  const Tezos = new TezosToolkit(TEZOS_RPC_URL);
  Tezos.setProvider({ signer: signer });

  try {
    const { hash, contractAddress } = await Tezos.contract.originate({
      code: require("../contracts/counter/step_000_cont_0_contract.json"),
      init: require("../contracts/counter/step_000_cont_0_storage.json"),
    });

    console.log("Successfully deployed contract");
    console.log(`>> Transaction hash: ${hash}`);
    console.log(`>> Contract address: ${contractAddress}`);
  } catch (error) {
    console.log(error);
  }
};

deploy();
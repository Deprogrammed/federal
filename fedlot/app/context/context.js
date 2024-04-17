import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { BN } from "@project-serum/anchor";
import { SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

import {
  getLotteryAddress,
  getMasterAddress,
  getProgram,
  getTicketAddress,
  getTotalPrize,
} from "../utils/program";
import { confirmTx, mockWallet } from "../utils/helper";
import toast from "react-hot-toast";
import { set } from "@project-serum/anchor/dist/cjs/utils/features";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [masterAddress, setMasterAddress] = useState();
  const [initialized, setInitialized] = useState(false)
  // Get provider
  const { connection } = useConnection()
  const wallet = useAnchorWallet()
  const program = useMemo(()=> {
    if(connection) {
      return getProgram(connection, wallet ?? mockWallet());
    }
  }, [connection, wallet])

  useEffect(()=> {
    updateState()
  },[program])

  const updateState = async () => {
    if(!program) return;

    try {
      if(!masterAddress) {
        const masterAddress = await getMasterAddress()

        setMasterAddress(masterAddress)
      }
      const master = await program.account.master.fetch(
        masterAddress ?? (await getMasterAddress())
      )
      setInitialized(true)

    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <AppContext.Provider
      value={{
        // Put functions/variables you want to bring out of context to App in here
        connect: wallet?.publicKey ? true : false,
        isMasterInitialized: initialized
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

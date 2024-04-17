import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import { AppProvider } from "../context/context";

export default function Home() {
const endpoint = "https://boldest-muddy-night.solana-devnet.quiknode.pro/d0f69eb36f1792c028cafb5a2de0352074cdf71e/"

const wallets = useMemo(
  () => [
    new PhantomWalletAdapter(),
  ],
  []
)

  return (
    <div className={style.wrapper}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <AppProvider>
              <div className={style.wrapper}>
                <Header />
                <PotCard />
                <Table />
              </div>
            </AppProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

import React from 'react';
import {LeoWalletAdapter} from "@demox-labs/aleo-wallet-adapter-leo";
import {WalletProvider} from "@demox-labs/aleo-wallet-adapter-react";
import {DecryptPermission, WalletAdapterNetwork} from "@demox-labs/aleo-wallet-adapter-base";
import {WalletModalProvider} from "@demox-labs/aleo-wallet-adapter-reactui";
import Wallet from "./components/Wallet.jsx";

const App = () => {
    const wallets = React.useMemo(() => [
        new LeoWalletAdapter({
            appName: "kelp1e"
        })
    ], [])

    return (
        <WalletProvider wallets={wallets}
                        decryptPermission={DecryptPermission.UponRequest}
                        network={WalletAdapterNetwork.Testnet}>
            <WalletModalProvider>
                <Wallet/>
            </WalletModalProvider>
        </WalletProvider>
    );
};

export default App;
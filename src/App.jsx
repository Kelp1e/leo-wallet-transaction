import React from 'react';
import {WalletProvider} from "@demox-labs/aleo-wallet-adapter-react";
import {WalletModalProvider} from "@demox-labs/aleo-wallet-adapter-reactui";
import {DecryptPermission, WalletAdapterNetwork} from "@demox-labs/aleo-wallet-adapter-base";
import {LeoWalletAdapter} from "@demox-labs/aleo-wallet-adapter-leo";
import Wallet from "./components/Wallet.jsx";
import RequestTransaction from "./components/RequestTransaction.jsx";

const App = () => {
    const wallets = React.useMemo(() => [
        new LeoWalletAdapter({
            appName: "kelp1e"
        })
    ], [])

    return (
        <WalletProvider wallets={wallets} decryptPermission={DecryptPermission.UponRequest} network={WalletAdapterNetwork.Testnet}>
            <WalletModalProvider>
                <Wallet/>
                <RequestTransaction/>
            </WalletModalProvider>
        </WalletProvider>
    );
};

export default App;
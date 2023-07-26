import React from 'react';
import {useWallet} from "@demox-labs/aleo-wallet-adapter-react";
import {DecryptPermission, WalletAdapterNetwork} from "@demox-labs/aleo-wallet-adapter-base";
import {LeoWalletName} from "@demox-labs/aleo-wallet-adapter-leo";

const Wallet = () => {
    const {select, connect, disconnect, connected, publicKey, connecting, disconnecting} = useWallet()

    const onClick = async () => {
        await connect(DecryptPermission.UponRequest, WalletAdapterNetwork.Testnet)
    }

    React.useEffect(() => {
        select(LeoWalletName)
    }, [connecting, disconnecting])

    return (
        <div>
            <p>Address: {publicKey}</p>
            <button onClick={onClick} disabled={connected}>Connect Leo Wallet</button>
            <button onClick={() => disconnect()} disabled={!connected}>Disconnect</button>
        </div>
    );
};

export default Wallet;
import React from 'react';
import {useWallet} from "@demox-labs/aleo-wallet-adapter-react";
import {Transaction, WalletAdapterNetwork, WalletNotConnectedError} from "@demox-labs/aleo-wallet-adapter-base";


const RequestTransaction = () => {
    const {connected, publicKey, requestTransaction} = useWallet()

    const onClick = async () => {
        if (!connected) throw new WalletNotConnectedError()

        const transaction = Transaction.createTransaction(
            publicKey, // Your public key
            WalletAdapterNetwork.Testnet, // Network
            "kelp1e.aleo", // Program ID
            "mint", // Function
            [], // Parameters that function need
            100_000 // Fee
        )

        if (requestTransaction) {
            await requestTransaction(transaction)
        }
    }

    return (
        <div>
            <button onClick={onClick} disabled={!connected}>Make a Transaction</button>
        </div>
    );
};

export default RequestTransaction;
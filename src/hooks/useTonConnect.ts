import { CHAIN } from "@tonconnect/protocol";
import { Sender, SenderArguments } from "ton-core";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Wallet } from '@tonconnect/ui';
import axios from 'axios';

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  wallet_address: string | null;
  wallet: Wallet | null;
  network: CHAIN | null;
  getTransactions: (address: string) => Promise<any>;
} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const getTransactions = async (address: string) => {
    const apiUrl = `https://testnet.toncenter.com/api/index/getTransactionsByAddress?address=${address}&limit=100&offset=0&include_msg_body=true`;

    try {
      const response = await axios.get(apiUrl);
      console.log('Response:', response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  };

  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
    connected: !!wallet?.account.address,
    wallet_address: wallet?.account.address ?? null,
    wallet,
    network: wallet?.account.chain ?? null,
    getTransactions
  };
}

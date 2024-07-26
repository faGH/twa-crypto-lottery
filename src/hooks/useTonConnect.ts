import { CHAIN } from "@tonconnect/protocol";
import { Sender, SenderArguments } from "ton-core";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Wallet } from '@tonconnect/ui';
import TonWeb from 'tonweb';

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  wallet_address: string | null;
  wallet: Wallet | null;
  network: CHAIN | null;
  getTransactions: () => Promise<any>;
} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const tonweb = new TonWeb();
  const getTransactions = async () => {
    if (!wallet?.account.address) {
      throw new Error("Wallet is not connected");
    }

    const address = wallet.account.address;

    try {
      const transactions = await tonweb.provider.getTransactions(address);
      return transactions;
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

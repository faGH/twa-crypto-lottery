import { CHAIN } from "@tonconnect/protocol";
import { Sender, SenderArguments } from "ton-core";
import { TonConnectUI, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Wallet } from '@tonconnect/ui';

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  wallet_address: string | null;
  wallet: Wallet | null;
  network: CHAIN | null;
  tonConnectUI: TonConnectUI | null;
} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

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
    tonConnectUI
  };
}
